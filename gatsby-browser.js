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
  getSavedScrollPosition
}) => {
  window.scrollTo(0, 0)
  console.log('window scroll')
  return false
}