import ProgressBar from "components/common/ProgressBar";
import { LegacyCredentialSteps } from "consts";
import React from "react";
import AccountAccess from "views/AccountAccess";
import SnnLastDigits from "views/SnnLastDigits";
import HomePage from "./HomePage";

function Home(this: HomePage) {
  const legacyCredentialSteps = {
    [LegacyCredentialSteps.LAST_FOUR_DIGITS]: SnnLastDigits,
    [LegacyCredentialSteps.ACCOUNT_ACCESS]: AccountAccess,
  };

  const Legacy = legacyCredentialSteps[this.step];

  return (
    <div className="container">
      <ProgressBar />
      <Legacy />
    </div>
  );
}

export default Home;
