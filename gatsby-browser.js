import React from "react";
import Layout from "./src/components/layout";

const transitionDelay = 250;

export const onClientEntry = () => {
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => { window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)}