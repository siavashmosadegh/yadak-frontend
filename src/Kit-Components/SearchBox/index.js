import React, { useState } from "react";
import PropTypes from "prop-types";
import { Formik } from "formik";
import { Form } from "../Form";
import Input from "../Input";
import {
    SearchBoxContainer,
    SearchBoxWrapper,
    IconContainer,
    SearchResultContainer,
    SearchResult,
    NoItemContainer
} from "./styles";
import SearchIcon from "../../Icons/SearchIcon";

const SearchBox = (props) => { 
    // const theme = props.theme;

    const {
        label,
        setValue,
        name,
        value,
        error,
        showErrorMessage,
        require,
        onSearchWithEmptyValue, //api
        onSearch, //api
        onClear,
        placeholder,
        disabled,
        searchDisplayTitle,
        resultList,
        resultDisplayTitle,
        resultDisplayTitle2,
        onItemClick,
        hasSearchResult
    } = props;

    const [showResult, setShowResult] = useState(false);

    const onChangeHandler = (e) => {
        let value = e.target.value;
        setValue(value)
        if (value.length === 0) {
            setShowResult(false);
            onSearchWithEmptyValue && onSearchWithEmptyValue(value)
            onClear && onClear()
        } else {
            if (hasSearchResult) {
                setShowResult(true);
            }
            onSearch(value)
        }
    }

    const onSearchIconClickHandler = () => {
        setShowResult(!showResult)
    }

    const selectItemHandler = (item) => {
        setValue(item[searchDisplayTitle])
        setShowResult(false)
        onItemClick && onItemClick(item)
    };

    return (
        <SearchBoxContainer className="bict__SeachBoxContainer">
            <Formik
                initialValues={{}}
                onSubmit={(values, action) => {}}
            >
                {(formik) => {
                    return (
                        <SearchBoxWrapper
                            className={`
                                bict__SearchBoxWrapper
                                ${label ? "hasLabel" : ""}
                            `}
                            hasLabel={label ? true : false}
                        >
                            <Form 
                                className="bict__SeachBoxform" 
                                onSubmit={formik.handleSubmit} 
                            >
                                <Input 
                                    className="bict__SeachBoxformInput"
                                    label={label}
                                    name={name}
                                    value={value ? value : ""}
                                    error={error}
                                    showErrorMessage={showErrorMessage || false}
                                    require={require}
                                    placeholder={placeholder}
                                    autoComplete="OFF"
                                    disabled={disabled}
                                    onChange={(e) => onChangeHandler(e)}
                                />
                                <IconContainer 
                                    // theme={theme}
                                    className="bict__SeachBox_SearchIconContainer"
                                    onClick={onSearchIconClickHandler} 
                                >
                                    <SearchIcon />
                                </IconContainer>
                            </Form> 
                            {showResult && 
                                <SearchResultContainer className="bict__SearchBoxResultContainer">
                                    {resultList && resultList.length !== 0
                                        ? resultList.map((each, index) => {
                                            return (
                                                <SearchResult 
                                                    // theme={theme}
                                                    className="bict__SearchBoxResult"
                                                    key={index} 
                                                    onClick={() => selectItemHandler(each)}
                                                >
                                                    {each[resultDisplayTitle]}
                                                    {resultDisplayTitle2 && "-" + each[resultDisplayTitle2] }
                                                </SearchResult>
                                            )
                                        })
                                        : <SearchResult className="bict__SearchBoxResult">
                                            <NoItemContainer className="bict__SearchBox_NoItemContainer">
                                                موردی وجود ندارد
                                            </NoItemContainer>
                                        </SearchResult>
                                    }
                                </SearchResultContainer>
                            }
                        </SearchBoxWrapper>
                    );
                }}
            </Formik>
        </SearchBoxContainer>
    )
} 

SearchBox.defaultProps = {
    label: "",
    name: "",
    value: '',
    error: null,
    showErrorMessage: false,
    require: false,
    placeholder: "جستجو ...",
    disabled: false,
    searchDisplayTitle: "",
    resultList: [],
    resultDisplayTitle: "",
    resultDisplayTitle2: "",
    hasSearchResult: true
};
  
SearchBox.propTypes = {
    label: PropTypes.string,
    setValue: PropTypes.func,
    name: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.string,
    showErrorMessage: PropTypes.bool,
    require: PropTypes.bool,
    onSearchWithEmptyValue: PropTypes.func,
    onSearch: PropTypes.func,
    onClear: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    searchDisplayTitle: PropTypes.string,
    resultList: PropTypes.array,
    resultDisplayTitle: PropTypes.string,
    resultDisplayTitle2: PropTypes.string,
    onItemClick: PropTypes.func,
    hasSearchResult: PropTypes.bool,
};

export default SearchBox;
