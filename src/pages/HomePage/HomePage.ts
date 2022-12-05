import { View } from "@devgetting/react-init";
import { LegacyCredentialContext } from "context/LegacyCredentialContext";
import { HomeObserver } from "models/observers/HomeObserver";
import Home from "./Home";

@View({
  component: Home,
  baseUrl: "/testing-page",
})
class HomePage {
  get step() {
    return LegacyCredentialContext.getInstance().step;
  }

  constructor() {
    HomeObserver.observable().registerObserver(this);
  }
}

export default HomePage;
