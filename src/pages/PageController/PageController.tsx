import React from "react";
import MainListPage from "../MainListPage/MainListPage";
import { PAGES } from "../../store/constatnts";
import AboutPage from "../AboutPage/AboutPage";

const getPage = (page: PAGES) => {
  switch (page) {
    case PAGES.about:
      return <AboutPage />;
    case PAGES.mainList:
    default:
      return <MainListPage />;
  }
};

const PageController = (): JSX.Element => {
  return getPage(PAGES.mainList);
};

export default PageController;
