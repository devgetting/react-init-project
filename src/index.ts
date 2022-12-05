import { ReactApplication } from "@devgetting/react-init";
import { HomePage } from "pages/HomePage";
import { SecondPage } from "pages/SecondPage";

ReactApplication.run("root").view(HomePage).view(SecondPage).start();
