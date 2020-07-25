import React from "react";

import CameraComponent from "../components/CameraComponent";
import HeaderComponent from "../components/HeaderComponent";
import ResultComponent from "../components/result/ResultComponent";

export default function CameraScreen() {
  return (
    <>
      <HeaderComponent />
      <CameraComponent />
      <ResultComponent />
    </>
  );
}
