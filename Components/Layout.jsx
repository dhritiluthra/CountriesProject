import React, { useContext, useState } from "react";
import Header from "./Header";
import { Outlet } from "react-router";
import { ThemeContextProvider } from "../contexts/ThemeContextProvider";
import Footer from "./Footer";

export default function Layout() {
  console.log("Rendering Layout component");
  return(
  <ThemeContextProvider>
    <Header/>
    <Outlet/>
    <Footer/>
  </ThemeContextProvider>);
}
