import React from "react";
import { AppLayoutProps } from "./AppLayoutProps";

export const AppLayout = ({ children }: AppLayoutProps): JSX.Element => {
  return <div>{children}</div>;
};
