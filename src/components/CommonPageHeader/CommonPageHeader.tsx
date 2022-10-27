import styles from "./CommonPageHeader.module.scss";
import { ReactNode } from "react";

export const CommonPageHeader = (props: {
  className: string;
  children: ReactNode;
}) => {
  const { className = "", children } = props;

  return <h1 className={`${styles.header} ${className}`}>{children}</h1>;
};
