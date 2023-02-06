import React from "react";
import PropTypes from "prop-types";
import { string } from "yup";
import Col from "../Col";
import Pagination from "./Pagination";
import {
  TableWrapper,
  TableOverlay,
  HeaderWrapper,
  TblHeaderCol,
  BodyWrapper,
  LoaderContainer,
  TblRow,
  TblCol
} from "./styles";

const Table = (props) => { 
  const {
    id,
    height,
    tblConfig,
    tblData,
    showPaging,
    pageHandler,
    skip,
    take,
    count,
    loading,
    loader,
    tableHeaderBackgroundColor,
    tableHeaderColor,
    tableOddRowColor,
    tableEvenRowColor,
    tableColor,
    tableHoverable,
    tableOddRowHover,
    tableEvenRowHover,
    hasBorder,
    noRecordMsg,
  } = props;

  const LoaderComponent = loader;

  return (
    <TableWrapper 
      className="bict__tblWrapper"
      id={id}
      height={height}
      hasBorder={hasBorder}
    >
      <TableOverlay disable={tblConfig.disable} /> 
      {tblConfig && tblConfig.showHeader === true &&
        <HeaderWrapper
          className="bict__tblHeaderContainer"
          show={tblConfig && tblConfig.showHeader}
          tableHeaderBackgroundColor={tableHeaderBackgroundColor}
          tableHeaderColor={tableHeaderColor}
        >
          {tblConfig && tblConfig.row.map((each, i) => {
            return (
              <TblHeaderCol
                className="bict__tblHeaderItem"
                flex={each.size}
                responsiveShow={each.responsiveShow}
                responsiveBreakPoint={each.responsiveBreakPoint}
                // isFirstCol={i === 0}
                // isLastCol={i === tblConfig.row.length - 1}
              >
                {each.headerTitle}
              </TblHeaderCol>
            )
          })}
        </HeaderWrapper>
      }
      <BodyWrapper
        className="bict__tblBodyWrapper"
        showPaging={showPaging}
        showHeader={tblConfig.showHeader}
      >
        {loading === true 
          ? <LoaderContainer>
            {loader ? <LoaderComponent /> : "لطفا چند لحظه منتظر بمانید ..."}
          </LoaderContainer>
         : tblData && tblData.length !== 0 
          ? tblData.map((each, i) => {
            return (
              <TblRow
                key={i}
                className={`bict__tblRow ${
                  (i + 1) % 2 === 0 ? `bict__tblRow__even` : `bict__tblRow__odd`
                }`}
                index={i}
                tableOddRowColor={tableOddRowColor}
                tableEvenRowColor={tableEvenRowColor}
                tableOddRowHover={tableOddRowHover}
                tableEvenRowHover={tableEvenRowHover}
                tableHoverable={tableHoverable}
                tableColor={tableColor}
              >
                {tblConfig.row.map((Row, colIndex) => {
                  let Element = (props) => (
                    <Row.element
                      index={i}
                      row={each}
                      rowIndex={skip - take + i + 1}
                      DataLength={tblData.length}
                    >
                      {props.children}
                    </Row.element>
                  );
                  return (
                    <TblCol
                      className="bict__tblCol"
                      key={i + colIndex}
                      flex={Row.size}
                      responsiveShow={Row.responsiveShow}
                      responsiveBreakPoint={Row.responsiveBreakPoint}
                      // isFirstCol={colIndex === 0}
                      // isLastCol={colIndex === tblConfig.row.length - 1}
                    >
                      {Row.element ? (
                        <Element>
                          {Row.displayTitle === "rowIndex"
                            ? skip - take + i + 1
                            : each[Row.displayTitle]}
                        </Element>
                      ) : (
                        <Col>
                          {Row.displayTitle === "rowIndex"
                            ? skip - take + i + 1
                            : each[Row.displayTitle]}
                        </Col>
                      )}
                    </TblCol>
                  );
                })}
              </TblRow>
            );
          }) 
          : <TblRow 
            className="bict__tblRow bict__noItem"
          >
            {noRecordMsg}
          </TblRow> 
        }
      </BodyWrapper>
      {showPaging &&
        <Pagination
          showPaging={showPaging}
          pageHandler={pageHandler}
          skip={skip}
          pageSize={take}
          count={count}
        />
      }
    </TableWrapper>
  );
};

Table.defaultProps = {
  height: "100%",
  tblConfig: null,
  tblData: [],
  showPaging: true,
  skip: 0,
  take: 20,
  count: 0,
  loading: false,
  tableHoverable: false,
  hasBorder: false,
  noRecordMsg: "موردی وجود ندارد",
};

Table.propTypes = {
  /**
   * کانفیگ جدول
   */
   tblConfig: PropTypes.shape({
    showHeader: true,
    disable: false,
    row: PropTypes.arrayOf(
      PropTypes.shape({
        headerTitle: PropTypes.string,
        displayTitle: PropTypes.string,
        size: PropTypes.number,
        responsiveShow: PropTypes.bool,
        element: PropTypes.oneOfType([string, Function]),
      })
    ),
  }),
  /**
   * اطلاعات جدول
   */
  tblData: PropTypes.arrayOf(Object).isRequired,
  /**
   * متد برای جا به جایی بین صفحات
   */
  pageHandler: PropTypes.func,
};

export default Table;