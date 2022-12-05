import { progressSteps } from "consts";
import { LegacyCredentialContext } from "context/LegacyCredentialContext";

const TOTAL_STEPS = 4;

export class ProgressBarController {
  private context: LegacyCredentialContext;

  constructor() {
    this.context = LegacyCredentialContext.getInstance();
  }

  get percentage() {
    return (progressSteps[this.context.step].step * 100) / TOTAL_STEPS;
  }
}
