import React from "react";

import CameraComponent from "../components/CameraComponent";
import HeaderComponent from "../components/HeaderComponent";
import ResultComponent from "../components/result/ResultComponent";
import InfoComponent from "../components/info/InfoComponent";

export default function CameraScreen() {
  return (
    <>
      <HeaderComponent />
      <InfoComponent />
      <CameraComponent />
      <ResultComponent />
    </>
  );
}
