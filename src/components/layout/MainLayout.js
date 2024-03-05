"use client";
import React from "react";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation
import Header2 from "../header/Header2";
import Breadcrumb from "./Breadcrumb";
import Footer from "../footer/Footer";
import Home1Contact from "../contact/Home1Contact";
import Header1 from "../header/Header1";

const MainLayout = ({ children }) => {
  const pathname = usePathname(); // Get the current pathname

  const hideBreadcrumbRoutes = [
    "/shop",
    "/cechkout",
    "/cart",
    "/product-details",
  ]; // Add the routes where you want to hide the breadcrumb

  const shouldRenderBreadcrumb = !hideBreadcrumbRoutes.some(
    (route) => route === pathname
  );

  return (
    <>
      <Header1 />
      {children}

      {shouldRenderBreadcrumb && <Home1Contact />}
      <Footer />
    </>
  );
};

export default MainLayout;
