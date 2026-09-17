import type { ReactNode } from "react";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

export default function HomepageFeatures(): ReactNode {
  return (
    <div className={styles.band}>
      <section className={styles.second}>
        <div className={styles.intro}>
          <Heading as="h2" className={styles.introTitle}>
            A simple structure for clinical multimodal datasets
          </Heading>
          <p className={styles.introText}>
            The Clinical Multimodal Data Structure (CMDS) is a standard for
            organizing clinical research data and metadata so datasets are
            interoperable, reusable, and easier to combine across studies. It
            is developed as part of the AI-READI project funded by the NIH
            Bridge2AI Common Fund.
          </p>
        </div>
      </section>
    </div>
  );
}
