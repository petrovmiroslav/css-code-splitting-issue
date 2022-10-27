import React from "react";
import { Link } from "react-router-dom";
import { CommonPageHeader } from "../../components/CommonPageHeader/CommonPageHeader";
import styles from "./SomePage.module.scss";

const SomePage = () => {
  return (
    <>
      <CommonPageHeader className={styles.redHeader}>
        I'm a red header
      </CommonPageHeader>
      <Link to={"/"}>Home</Link>
    </>
  );
};
export default SomePage;
