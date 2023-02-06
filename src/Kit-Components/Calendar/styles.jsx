import styled from "styled-components";
import { HexToRgba } from "../../../Usages/HexToRgba";

// CalendarView
export const CalenderWrapper = styled.div`
  width: 260px !important;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  border-radius: 5px;
  z-index: 100;
  background-color: white;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 13px -1px rgba(99, 156, 240, 0.2);
  -moz-box-shadow: 0px 0px 13px -1px rgba(99, 156, 240, 0.2);
  box-shadow: 0px 0px 13px -1px rgba(99, 156, 240, 0.2);
  position: absolute;
  top: 50px;
  left: 0;
  animation-name: shutter-in-left;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  box-sizing : border-box;
  @keyframes shutter-in-left {
    0% {
      -webkit-transform: rotateY(100deg);
      transform: rotateY(100deg);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateY(0);
      transform: rotateY(0);
      -webkit-transform-origin: left;
      transform-origin: left;
      opacity: 1;
    }
  }
`;
export const CalendarHeader = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row-reverse;
`;
export const HeaderController = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 50%;
`;
export const Controller = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  cursor: pointer;
  user-select: none;
  margin: 0 5px;
  color: lightgray;
  border: 1px solid lightgray;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: none;
  :hover {
    transform: scale(1.05);
    color: gray;
    border: 1px solid gray;
    transition: all 300ms;
  }
  :not(:hover) {
    transition: all 300ms;
  }
`;
export const HeaderInformation = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100%;
  width: 50%;
  padding-right: 10px;
  font-size: 14px;
  color: black;
  direction: ltr;
  div {
    margin-left: 15px;
    cursor: pointer;
    :hover {
      background-color: ${(props) => props.theme.primary};
      border: none;
      color: white;
      border-radius: 7px;
      transition: all 300ms ease;
      padding: 2px 10px;
    }
    :not(:hover) {
      transition: all 300ms ease;
    }
  }
`;
export const WeekNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  border-radius: 4px;
  width: 100%;
`;
export const Weekname = styled.div`
  padding: 2px 5px;
  display: flex;
  justify-content: center;
  width: 47px;
  height: 30px;
  align-items: baseline;
  width: 14.3%;
  color: #777777;
  font-size: 13px;
`;
export const DayCellContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-start;
  width: 100%;
  height: 220px;
  flex-wrap: wrap;
  margin-top: 5px;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  @keyframes shutter-in-top {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;
export const DayCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 14.28%;
  color: black;
`;
export const Day = styled.div`
  width: 36px;
  height: 28px;
  cursor: pointer;
  border-radius: 7px;
  font-size: 13px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.3s ease-out 0.1ms;
  opacity: ${({ active }) => (!active ? 1 : 0.25)};
  pointer-events: ${({ active }) => (!active ? "initial" : "none")};
  user-select: ${({ active }) => (!active ? "initial" : "none")};
  font-weight: 600;
  &:focus {
    outline: none;
  }
  :hover {
    background-color: ${(props) => props.theme.primary};
    border: none;
    color: white;
    width: 36px;
    height: 28px;
  }
  &:active {
    transform: scale(0.9);
  }
  &.selected {
    background-color: ${(props) => props.theme.primary};
    color: white;
    width: 36px;
    height: 28px;
  }
`;
export const GoToDayButton = styled.div`
  color: ${(props) => props.theme.primary};
  height: 28px;
  border-radius: 7px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  margin-top: 5px;
  cursor: pointer;
`;
export const MonthCellContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  flex-wrap: wrap;
  margin-top: 5px;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  @keyframes shutter-in-top {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;
export const MonthCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  color: black;
  height: 50px;
  &:focus {
    outline: none;
  }
`;
export const Month = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 7px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.3s ease-out 0.1ms;
  opacity: ${({ active }) => (!active ? 1 : 0.25)};
  pointer-events: ${({ active }) => (!active ? "initial" : "none")};
  user-select: ${({ active }) => (!active ? "initial" : "none")};
  font-weight: 500;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
    border-radius: 7px;
    transition: all 300ms ease;
  }
  &.selected {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;
export const YearCellContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  width: 100%;
  height: 280px;
  flex-wrap: wrap;
  margin-top: 5px;
  animation-name: shutter-in-top;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: none;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  @keyframes shutter-in-top {
    0% {
      -webkit-transform: rotateX(-100deg);
      transform: rotateX(-100deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 0;
    }
    100% {
      -webkit-transform: rotateX(0deg);
      transform: rotateX(0deg);
      -webkit-transform-origin: top;
      transform-origin: top;
      opacity: 1;
    }
  }
`;
export const YearCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
  color: black;
  height: 40px;
  &:focus {
    outline: none;
  }
`;
export const Year = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  border-radius: 7px;
  font-size: 14px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  transition: all 0.3s ease-out 0.1ms;
  opacity: ${({ active }) => (!active ? 1 : 0.25)};
  pointer-events: ${({ active }) => (!active ? "initial" : "none")};
  user-select: ${({ active }) => (!active ? "initial" : "none")};
  font-weight: 500;
  &:hover {
    background-color: ${(props) => props.theme.primary};
    color: white;
    border-radius: 7px;
    transition: all 300ms ease;
  }
  &.selected {
    background-color: ${(props) => props.theme.primary};
    color: white;
  }
`;

// CalendarForm
export const CalenderInputsRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  width: ${(props) =>
    props.label
      ? props.labelPosition === "right"
        ? "calc(100% - 120px)"
        : "calc(100% - 0px)"
      : "calc(100% - 0px)"};
  height: 36px;
  border-radius: 5px;
  border: 1px solid ${(props) => 
                      props.error 
                          ? props.theme.danger
                          : HexToRgba(props.theme.gray, 0.15)
                      };
  .calendar__view__button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    border-radius: 5px 0px 0px 5px;
    cursor: pointer;
    border-right: 1px solid ${(props) => HexToRgba(props.theme.gray, 0.15)};
    svg {
      width: 20px;
      height: 20px;
      fill: ${(props) => props.theme.gray};
    }
  }
  &.focus {
    border: 1px solid ${(props) => 
                        props.error 
                            ? props.theme.danger
                            : props.theme.secondary
                        };
  }
  form {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 40px);
    height: 100%;
    box-sizing : border-box;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Input = styled.input`
  display: flex;
  text-align: center;
  width: ${(props) => props.name === "year" ? "31% !important" : "21% !important"};
  height: 36px;
  background: transparent;
  color: ${(props) => props.theme.gray};
  font-size: ${(props) => props.theme.fontSizeXs};
  border: none;
  outline: none;
  box-sizing : border-box;
  :focus {
  }
`;