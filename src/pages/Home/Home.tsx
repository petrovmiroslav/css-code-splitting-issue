import React from "react";
import { Link } from "react-router-dom";
import { CommonPageHeader } from "../../components/CommonPageHeader/CommonPageHeader";
import styles from "./Home.module.scss";

const Home = () => (
  <>
    <CommonPageHeader className={styles.greenHeader}>
      I'm a green header
    </CommonPageHeader>
    <Link to={"some-page"}>Some page</Link>
  </>
);
export default Home;
