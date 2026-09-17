import type { ComponentType, ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

const SpecLink = Link as ComponentType<{
  className?: string;
  to: string;
  children?: ReactNode;
}>;

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className={styles.section}>
        <div className={styles.logoWrap}>
          <img
            src="/img/android-chrome-192x192.png"
            alt="AI-READI logo"
            width={100}
            height={100}
          />
        </div>
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <SpecLink
            className={clsx("button button--lg", styles.primaryButton)}
            to="/docs/0.1.1/"
          >
            View the Documentation
          </SpecLink>
          <SpecLink
            className={clsx("button button--lg", styles.secondaryButton)}
            to="/docs/0.1.1/about"
          >
            About the Specification
          </SpecLink>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout description={siteConfig.tagline}>
      <HomepageHeader />
      <HomepageFeatures />
    </Layout>
  );
}
