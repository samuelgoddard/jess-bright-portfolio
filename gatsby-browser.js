import React from "react";
import Layout from "./src/components/layout";

const transitionDelay = 0;

export const onClientEntry = () => {
}

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

export const shouldUpdateScroll = ({
  routerProps: { location },
  getSavedScrollPosition,
}) => {
  if (location.action === "PUSH") {
    document.getElementById("scroll-container").scrollIntoView() 
  } else {
    document.getElementById("scroll-container").scrollIntoView() 
  }
  return false
}