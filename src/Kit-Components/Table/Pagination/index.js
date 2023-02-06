import React from "react";
import PropTypes from "prop-types";
import { 
  StyledPaginationList, 
  StyledPagination 
} from "./styles";

const Pagination = (props) => {
  const { pageHandler, skip } = props;

  let count = props.count || 0;
  let pageSize = props.pageSize || 20;
  let currentPage =
    skip % pageSize === 0
      ? Math.floor(skip / pageSize) - 1
      : Math.floor(skip / pageSize);
  let totalPage = Math.ceil(count / pageSize);
  let PagesArray = [];
  let offset = totalPage < 5 ? totalPage : 5;

  if (currentPage < offset - 1) {
    for (let i = 0; i < offset; i++) {
      PagesArray.push({
        number: i,
      });
    }
  } else if (currentPage > totalPage - offset) {
    for (let j = totalPage - offset; j < totalPage; j++) {
      PagesArray.push({
        number: j,
      });
    }
  } else {
    for (let j = currentPage - 2; j <= currentPage + 2; j++) {
      if (j < totalPage && j >= 0) {
        PagesArray.push({
          number: j,
        });
      }
    }
  }

  return (
    <StyledPaginationList
      className="bict__paginationContainer"
      show={count <= pageSize ? false : true}
    >
      <StyledPagination
        className={`bict__paginationPrevious  ${
          currentPage >= 1
            ? "bict__paginationPrevious__enable"
            : "bict__paginationPrevious__disable"
        }`}
        onClick={
          currentPage >= 1
            ? () => pageHandler((currentPage - 1) * pageSize)
            : null
        }
        disable={currentPage >= 1 ? false : true}
        hoverable={currentPage >= 1 ? true : false}
      >
        {"<"}
      </StyledPagination>

      {PagesArray.map((page, i) => {
        return (
          <>
            <StyledPagination
              className={`bict__paginationPageNum  ${page.number ===
                currentPage && "bict__paginationPageNum_active"}`}
              selected={page.number === currentPage ? true : false}
              hoverable={page.number !== currentPage ? true : false}
              onClick={() => pageHandler(page.number * pageSize)}
            >
              {page.number + 1}
            </StyledPagination>
          </>
        );
      })}
      {totalPage - currentPage > offset && (
        <StyledPagination>...</StyledPagination>
      )}
      {currentPage >= totalPage - offset ? null : (
        <StyledPagination
          className={`bict__paginationLastPage`}
          onClick={
            currentPage + 1 !== totalPage
              ? () => pageHandler((totalPage - 1) * pageSize)
              : null
          }
          hoverable={true}
        >
          {totalPage}
        </StyledPagination>
      )}
      <StyledPagination
        className={`bict__paginationNext  ${
          currentPage + 1 !== totalPage
            ? "bict__paginationNext__enable"
            : "bict__paginationNext__disable"
        }`}
        onClick={
          currentPage + 1 !== totalPage
            ? () => pageHandler((currentPage + 1) * pageSize)
            : null
        }
        disable={currentPage + 1 !== totalPage ? false : true}
        hoverable={currentPage + 1 !== totalPage ? true : false}
      >
        {">"}
      </StyledPagination>
    </StyledPaginationList>
  );
};

Pagination.propTypes = {
  count: PropTypes.number,
};

export default Pagination;