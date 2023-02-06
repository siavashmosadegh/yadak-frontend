import React, { useState, useEffect, useRef } from "react";
// import PropTypes from "prop-types";
import { 
  FormGroup,
  FormLabel, 
  FormInput,
  FormError 
} from "../Form";
import {
  SelectWrapper,
  SelectContainer,
  IconContainer,
  MultiSelectInput,
  SelectedItemContainer,
  SelectedItem,
  SelectOptionWrapper,
  HeaderContainer,
  OptionCell,
  OptionContainer,
  Option
} from "./styles";
import CloseIcon from "../../Icons/CloseIcon";
import DownArrow from "../../Icons/DownArrow";

const StyledSelect = (props) => {
  // const theme = props.theme;

  const {
    label,
    labelPosition,
    options,
    multi,
    // value,
    // displayTitle,
    columns,
    name,
    error,

    searchable,
    clearable,
    onSelect,
    onDeselect,
    onPress,
    onClear,
    onTouchHandler,
  } = props;

  const [state, setState] = useState({
    data: options || [],
    viewData: options || [],
    expand: false,
    isTyping: false,
  });
  const [fieldValue, setFieldValue] = useState("");
  const [selected, setSelected] = useState([]);
  const [focus, setFocus] = useState(false);
  let selectRef = useRef();
  let valueStringify = `${props.value}`;
  const singleSelectRef = useRef()
  const value =
    multi === true && typeof props.value === "string"
      ? props.value.split(",")
      : multi === true && typeof props.value === "object"
        ? props.value.toString()
        : multi !== true && typeof props.value === "string"
          ? [props.value]
          : multi !== true && typeof props.value === "number"
            ? [valueStringify]
            : "";
  const displayTitle = props.displayTitle || "title";

  useEffect(() => {
    if (options) {
      setState({
        ...state,
        viewData: options,
      });
    }
    if (
      value &&
      value.length > 0 &&
      state.isTyping === false &&
      options &&
      options.length > 0
    ) {
      let newSelected = []
      for (let i = 0; i < options.length; i++) {
        if (value.includes(options[i].id.toString())) {
          newSelected.push(options[i])
        }
      }
      // options.filter((each) => value.includes(`${each.id}`));
      setSelected(newSelected);
    } else if (value === null || value === "") {
      setSelected([]);
    } else {
      // return null
    }
    window.addEventListener("mousedown", ClickFunc, false);
    return () => {
      window.removeEventListener("mousedown", ClickFunc, false);
    };
  }, [options, props.value, selectRef]);

  const handleSearch = (e) => {
    let value = e.target.value;
    if (state.expand === false) {
      setState({
        ...state,
        expand: true,
        isTyping: true,
      });
    }
    function checkInclude(each) {
      let dataSearchValue = false;
      for (let i = 0; i < columns.length; i++) {
        let str = `${each[columns[i].displayTitle]}`;
        dataSearchValue = str.includes(value);
        if (dataSearchValue) {
          break;
        }
      }
      return dataSearchValue;
    }
    let viewData = [];
    for (let i = 0; i < options.length; i++) {
      if (checkInclude(options[i])) {
        viewData.push(options[i])
      }
    }
    // viewData = options.filter(checkInclude);
    setState({
      ...state,
      viewData,
    });
    setFieldValue(value);
  };

  const onFocusHanlder = () => {
    setState({
      ...state,
      expand: true,
    });
    setFocus(true);
    onPress(name);
  };

  const onSelectHanlder = (option, name) => {
    setState({
      ...state,
      expand: false,
      isTyping: false,
    });
    let selectedList = [...selected];
    if (multi === true) {
      selectedList.push(option);
    } else {
      selectedList = [option];
    }
    setSelected(selected);
    if (onSelect) {
      if (multi) {
        onSelect(selectedList, name);
      } else {
        onSelect(option, name);
      }
    }
  };

  const onDeselectHandler = (option, name) => {
    onDeselect && onDeselect(option, name);
  };

  const callBack = () => {
    setState({
      ...state,
      expand: false,
      viewData: options,
      data: options,
    });
    setFocus(false);
  };

  const OutSideClick = (e, ref, callback) => {
    if (ref && ref.current && callback) {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    }
  };

  const ClickFunc = (e) => {
    OutSideClick(e, selectRef, callBack);
  };

  const clearHandler = (e, name) => {
    setSelected([]);
    setFieldValue("");
    setState({
      ...state,
      viewData: [...options],
    })
    onClear && onClear(name);
  };

  const multModeFocusHandler = () => {
    setState({
      ...state,
      expand: !state.expand,
    });
    setFocus(true);
    onPress(name);
  };

  const multModeBlurHandler = () => {
    setFocus(false);
  };

  return (
    <SelectWrapper 
      className="bict__select__wrapper"
      ref={selectRef}
      label={label}
      labelPosition={labelPosition}
    >
      <SelectContainer className="bict__select__container">
        {multi 
          ? <MultiSelectInput
              className="bict__multiSelect__input"
              // theme={theme}
              hasError={error ? true : false}
              focus={focus}
            >
              <SelectedItemContainer
                onClick={multModeFocusHandler}
                onBlur={multModeBlurHandler}
                xl={21}
              >
                {selected.map((each) => {
                  return (
                    <SelectedItem 
                      // theme={theme}
                    >
                      {each[displayTitle]}
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          onDeselectHandler(each, name);
                        }}
                      >
                        <CloseIcon />
                      </span>
                    </SelectedItem>
                  );
                })}
              </SelectedItemContainer>
            </MultiSelectInput>
          : <FormInput
              className="bict__select__input"
              // theme={theme}
              label={label}
              labelPosition={labelPosition}
              hasError={error ? true : false}
              readOnly={searchable === true ? false : true}
              value={selected.length > 0 ? selected[0][displayTitle] : fieldValue}
              onClick={onFocusHanlder}
              onChange={searchable === true && handleSearch}
              onFocus={searchable === true && handleSearch}
              ref={singleSelectRef}
              {...props}
              // autoComplete="OFF"
            />
        }
        <IconContainer
          show={clearable}
          iconHeight={10}
          iconWidth={10}
          left={30}
          onClick={(e) => clearHandler(e, name)} 
        >
          {selected.length > 0 && <CloseIcon />}
        </IconContainer>
        <IconContainer
          onClick={() => {
            setState({
              ...state,
              expand: !state.expand,
            });
            if (multi === true) {
              setFocus(!focus);
              onTouchHandler();
            }
          }}
          left={10}
        >
          <DownArrow rotate={state.expand} />
        </IconContainer>
      </SelectContainer>
      
      <SelectOptionWrapper
        className="bict__select__optionWrapper"
        // theme={theme}
        expand={state.expand}
      >
        {columns && columns.length > 1 && (
          <HeaderContainer 
            className="bict__select__headerContainer"
            // theme={theme}
          >
            {columns.map((cell, i) => {
              return (
                <OptionCell
                  className="bict__select__optionCell"
                  // theme={theme}
                  flex={columns ? columns[i].size : 1}
                >
                  {cell.headerTitle}
                </OptionCell>
              );
            })}
          </HeaderContainer>
        )}
        <OptionContainer 
          className="bict__select__optionContainer"
        >
          {state.viewData && state.viewData.length > 0 
            ? state.viewData.map((option, index) => {
                return (
                  <Option
                    className="bict__select__option"
                    onClick={() => onSelectHanlder(option, name)}
                  >
                    {columns.map((cell, i) => {
                      return (
                        <OptionCell
                          className="bict__select__optionCell"
                          flex={cell.size || 1}
                        >
                          {option[cell.displayTitle]}
                        </OptionCell>
                      );
                    })}
                  </Option>
                );
            })
          : <Option>
              <OptionCell flex={1}>
                موردی وجود ندارد
              </OptionCell>
            </Option>
          }
        </OptionContainer>
      </SelectOptionWrapper>
    </SelectWrapper>
  );
};

const Select = (props) => {
  // const theme = props.theme;
  
  const {
    label,
    labelPosition,
    require,
    error,
    showErrorMessage,
  } = props;

  return (
    <FormGroup
      className="bict__formGroup"
      // theme={theme}
      labelPosition={labelPosition}
    >
      <FormLabel
        className="bict__formLabel"
        // theme={theme}
        labelPosition={labelPosition}
        show={label ? true : false}
      >
        {require === true ? " * " + label : label}
      </FormLabel>
      <StyledSelect
        {...props}
      />
      <FormError 
        className="bict__formError"
        // theme={theme}
      >
        {showErrorMessage === false ? null : error}
      </FormError>
    </FormGroup>
  );
};

Select.defaultProps = {
  label: "",
  labelPosition: "top",
  require: false,
  error: null,
  showErrorMessage: true,
};

Select.propTypes = {

};

export default Select;