import { TextFieldDAO } from "models/dao/TextFieldDAO";
import { TextFieldSetterDAO } from "models/dao/TextFieldSetterDAO";

export class TextFieldDTO implements TextFieldDAO, TextFieldSetterDAO {
  errorMessage: string;
  isError: boolean;
  value: string;

  setErrorMessage(errorMessage: string) {
    this.errorMessage = errorMessage;
  }

  setIsError(isError: boolean): void {
    this.isError = isError;
  }

  setValue(value: string): void {
    this.value = value;
  }
}
