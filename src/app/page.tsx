"use client";

import Head from "next/head";
import React, { useEffect } from "react";
import Image from "next/image";
import { registerKeyPressHandler } from "./script/main";

export default function Home() {
  useEffect(() => {
    const cleanup = registerKeyPressHandler(); // Call the function to register the key press handler
    return cleanup;
  }, []);

  return <div className="Home"></div>;
}
