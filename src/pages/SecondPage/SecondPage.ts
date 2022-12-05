import { action, routing, Routing, View } from "@devgetting/react-init";
import { EmailFieldDTO } from "models/dto/EmailFieldDTO";
import { TextFieldDTO } from "models/dto/TextFieldDTO";
import { Second } from "./Second";

@View({
  baseUrl: "/testing-page/second-page",
  component: Second,
})
class SecondPage {
  public emailFields: TextFieldDTO[] = [];

  @routing
  route: Routing;

  constructor() {
    this.emailFields.push(new EmailFieldDTO());
  }

  @action
  changeValue(field: TextFieldDTO, value: string) {
    field.setValue(value);
  }

  @action
  alertOnBlur(field: TextFieldDTO) {
    if (!field.value.length) {
      field.setIsError(false);
    }
  }

  @action
  addField() {
    if (this.emailFields.length === 5) return;

    this.emailFields.push(new EmailFieldDTO());
  }

  @action
  removeField() {
    if (this.emailFields.length === 1) return;

    this.emailFields.splice(-1);
  }

  redirectToLegacy() {
    this.route.redirect("/testing-page");
  }
}

export default SecondPage;
