import styled from "styled-components";
import Row from "../../Row";
import Col from "../../Col";

export const StyledPaginationList = styled(Row)`
  display: ${(props) => props.show === false && "none"};
  position: absolute;
  bottom: 0;
  height: 40px;
  justify-content: center;
`;
export const StyledPagination = styled(Col)`
  width: auto;
  height: 30px;
  padding: 0 10px;
  margin-right: 7.5px;
  border-radius: 5px;
  background-color: ${(props) =>
    props.selected === true
      ? props.theme.secondary
      : props.disable === true
        ? props.theme.lightGray
        : "white"
  };
  color: ${(props) =>
    props.selected === true
      ? "white"
      : props.theme.gray
  };
  font-size: ${(props) => props.theme.fontSizeSm};
  cursor: pointer;
  :hover {
    background-color: ${(props) => props.hoverable === true && props.theme.primary};
    color: white;
    transition: all 500ms;
  }
`;