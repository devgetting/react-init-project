import { ProgressBarController } from "controller/ProgressBarController";
import React from "react";

const controller = new ProgressBarController();

const ProgressBar = () => {
  return (
    <div
      className="progress mt-5 mb-5"
      style={{
        height: 4,
      }}
    >
      <div
        className="progress-bar"
        style={{
          width: `${controller.percentage}%`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
