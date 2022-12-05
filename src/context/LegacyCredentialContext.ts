import { LegacyCredentialSteps } from "consts";
import { HomeObserver } from "models/observers/HomeObserver";

export class LegacyCredentialContext {
  private static instance: LegacyCredentialContext;

  public step: LegacyCredentialSteps;

  private constructor() {
    this.step = LegacyCredentialSteps.LAST_FOUR_DIGITS;
  }

  public static getInstance(): LegacyCredentialContext {
    if (!this.instance) {
      this.instance = new LegacyCredentialContext();
    }

    return this.instance;
  }

  public setStep(step: LegacyCredentialSteps) {
    this.step = step;

    HomeObserver.observable().update();
  }
}
