import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import jmoment from "moment-jalaali";
import CalendarForm from "./CalendarForm";
import { 
  FormGroup, 
  FormLabel, 
  FormError 
} from "../Form";

const Calendar = (props) => {
  const ref = useRef();
  const CalendarViewRef = useRef();
  const [show, setShow] = useState(false);

  // const theme = props.theme;
  const {
    label,
    labelPosition,
    require,
    initialDate,
    error,
    showErrorMessage,
    icon,
    onChange,
    onSelect,
    onPress,
  } = props;

  let initDate = initialDate ? new Date(initialDate) : null;
  const [now, setNow] = useState(Date.now());
  const [selected, setSelected] = useState({
    day:
      moment(initDate).isValid() === true
        ? Number(jmoment(now).format("jDD"))
        : "",
    month:
      moment(initDate).isValid() === true
        ? Number(jmoment(now).format("jMM"))
        : "",
    year:
      moment(initDate).isValid() === true
        ? Number(jmoment(now).format("jYYYY"))
        : "",
  });
  const [view, setView] = useState({
    day: Number(jmoment(now).format("jDD")),
    month: Number(jmoment(now).format("jMM")),
    year: Number(jmoment(now).format("jYYYY")),
  });

  const resetCalendar = () => {
    setSelected({
      day: Number(jmoment(Date.now()).format("jDD")),
      month: Number(jmoment(Date.now()).format("jMM")),
      year: Number(jmoment(Date.now()).format("jYYYY")),
    });
    setView({
      day: Number(jmoment(Date.now()).format("jDD")),
      month: Number(jmoment(Date.now()).format("jMM")),
      year: Number(jmoment(Date.now()).format("jYYYY")),
    });
    let date = moment(Date.now()).format("YYYY-MM-DD");
    if (moment(date).isValid() === true) {
      onChange(date);
    } else {
      onChange(null);
    }
  };

  useEffect(() => {
    let date = initialDate ? new Date(initialDate) : null;
    if (moment(date).isValid() === true) {
      let initialDateStamp = date.getTime();
      setNow(date.getTime());
      setSelected({
        day: Number(jmoment(initialDateStamp).format("jDD")),
        month: Number(jmoment(initialDateStamp).format("jMM")),
        year: Number(jmoment(initialDateStamp).format("jYYYY")),
      });
      setView({
        day: Number(jmoment(initialDateStamp).format("jDD")),
        month: Number(jmoment(initialDateStamp).format("jMM")),
        year: Number(jmoment(initialDateStamp).format("jYYYY")),
      });
    } else {
      setSelected({
        day: "",
        month: "",
        year: "",
      });
    }
    window.addEventListener("mousedown", ClickFunc, false);
    return () => {
      window.removeEventListener("mousedown", ClickFunc, false);
    };
  }, [initialDate]);

  const callBack = () => {
    setShow(false);
  };

  const OutSideClick = (e, ref, callback) => {
    if (ref && ref.current && callback) {
      if (!ref.current.contains(e.target)) {
        callback();
      }
    }
  };

  const ClickFunc = (e) => {
    OutSideClick(e, CalendarViewRef, callBack);
  };

  const calendarViewHandler = (status) => {
    setShow(status);
    onPress();
  };

  return (
    <>
      <FormGroup
        className="bict__formGroup"
        // theme={theme}
        labelPosition={labelPosition}
        ref={ref}
      >
        <FormLabel
          className="bict__formLabel"
          // theme={theme}
          labelPosition={labelPosition}
          show={label ? true : false}
        >
          {require === true ? " * " + label : label}
        </FormLabel>
        <CalendarForm
          CalendarViewRef={CalendarViewRef}
          view={view}
          show={show}
          setView={setView}
          selected={selected}
          setSelected={setSelected}
          resetCalendar={resetCalendar}
          calendarChangeHandler={onChange}
          calendarSelectHandler={onSelect}
          calendarViewHandler={calendarViewHandler}
          initialDate={initialDate ? new Date(initialDate) : null}
          error={error ? true : false}
          Icon={icon}
        />
        <FormError 
          className="bict__formError"
          // theme={theme}
        >
          {showErrorMessage === false ? null : error}
        </FormError>
      </FormGroup>
    </>
  );
};

Calendar.defaultProps = {
  label: "",
  labelPosition: "top",
  require: false,
  initialDate: null,
  error: "",
  showErrorMessage: true,
  icon: null,
  onChange: null,
  onSelect: null,
  onPress: null,
};

Calendar.propTypes = {
  label: PropTypes.string,
  labelPosition: PropTypes.oneOf(["top", "right"]),
  require: PropTypes.bool,
  initialDate: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
  error: PropTypes.string,
  showErrorMessage: PropTypes.bool,
  onSelect: PropTypes.func,
  onChange: PropTypes.func,
  onPress: PropTypes.func,
};

export default Calendar;