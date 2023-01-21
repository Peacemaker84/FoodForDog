import React, { useState } from "react";

export default (data, cnt) => {
  /* 
    ["", "", "", ""]
    cnt = 2   желаемое кол-во страниц
    pages = 2
    */
  const [currentPage, setCurrentPage] = useState(1); // 1 страница по умолчанию
  const maxPage = Math.ceil(data.length / cnt);

  const next = () => {
    let nextPage = Math.min(currentPage + 1, maxPage);
    setCurrentPage(nextPage);
  };
  const previous = () => {
    let prevPage = Math.max(currentPage - 1, 1);
    setCurrentPage(prevPage);
  };
  const step = (page) => {
    setCurrentPage(page);
  };
  const setPageData = () => {
    // рисуем данные только на этой странице
    // 0-11, 12-23, 23-35
    let start = (currentPage - 1) * cnt; // массив 0-23 значений
    let end = start + cnt;
    return data.slice(start, end);
  };

  return { currentPage, maxPage, next, previous, step, setPageData };
};
