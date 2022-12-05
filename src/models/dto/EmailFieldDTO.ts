import { TextFieldDTO } from "./TextFieldDTO";

export class EmailFieldDTO extends TextFieldDTO {
  constructor() {
    super();
    this.value = "";
  }

  private validateEmail(value: string) {
    return value.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  }

  override setValue(value: string): void {
    this.value = value;

    if (!this.validateEmail(value)) {
      this.setIsError(true);
      this.setErrorMessage("Please insert a valid email");
      return;
    }

    this.setIsError(false);
    this.setErrorMessage("");
  }
}
