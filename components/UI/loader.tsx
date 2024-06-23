"use client"
import React from "react";
import "@/styles/globals.css";
import { ThemeSwitch } from "../theme-switch";

export const Loader = () => {
  return <div className="flex justify-center items-center h-screen">
    <ThemeSwitch className="hidden" />
  <div className="rounded-full h-20 w-20 bg-violet-800 animate-ping"></div>
</div>;
};
