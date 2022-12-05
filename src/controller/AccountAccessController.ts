import { routing, Routing } from "@devgetting/react-init";
import { LegacyCredentialSteps } from "consts";
import { LegacyCredentialContext } from "context/LegacyCredentialContext";
import { HomeObserver } from "models/observers/HomeObserver";

export class AccountAccessController {
  @routing
  public route: Routing;

  redirectTo(path: string) {
    LegacyCredentialContext.getInstance().setStep(
      LegacyCredentialSteps.LAST_FOUR_DIGITS
    );

    HomeObserver.observable().update();
    this.route.redirect(path);
  }
}
