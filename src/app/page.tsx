"use client";

import Head from "next/head";
import Image from "next/image";
//import "./script/main";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleKeyPress = (e: any) => {
      if (e.key === "s" || e.key === "S") {
        console.log("The A key was pressed!123");
        count++;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
  }, []);

  return <div className="Home"></div>;
}
