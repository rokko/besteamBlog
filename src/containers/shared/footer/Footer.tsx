import React from "react";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
      <div className={styles.footer}>
        <p>
          Besteam Game S.R.L. ©️ 2022, All rights reserved <br />
          Via Roccella Jonica 25, 00173 Roma - VAT 16643031004 -
          besteamgamesrl@legalmail.it
        </p>
      </div>
  );
};

export default Footer;
