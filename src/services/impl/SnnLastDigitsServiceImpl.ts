import { LegacyCredentialSteps } from "consts";
import { LegacyCredentialContext } from "context/LegacyCredentialContext";
import { TextFieldDTO } from "models/dto/TextFieldDTO";
import { HomeObserver } from "models/observers/HomeObserver";
import { SnnLastDigitsService } from "services/SnnLastDigitsService";

export class SnnLastDigitsServiceImpl implements SnnLastDigitsService {
  private textField: TextFieldDTO;

  constructor() {
    this.textField = new TextFieldDTO();
    this.textField.setValue("");
  }

  private isInvalidNumber(value: string) {
    return isNaN(value as unknown as number);
  }

  changeInputValue(value: string): void {
    if (this.isInvalidNumber(value) || value.length > 4) return;

    this.textField.setValue(value);

    HomeObserver.observable().update();
  }

  private validate(): void {
    if (this.textField.value.length < 4) throw "Please insert the 4 digits";
  }

  private cleanError() {
    this.textField.setIsError(false);
    this.textField.setErrorMessage("");
  }

  private setError(message: string) {
    this.textField.setIsError(true);
    this.textField.setErrorMessage(message);
  }

  validateOnFocus(): void {
    try {
      this.validate();

      this.cleanError();
    } catch (e: unknown) {
      this.setError(e as string);
    }

    HomeObserver.observable().update();
  }

  switchToSecondStep(): void {
    try {
      this.validate();

      LegacyCredentialContext.getInstance().setStep(
        LegacyCredentialSteps.ACCOUNT_ACCESS
      );
    } catch (e: unknown) {
      this.setError(e as string);
    }

    HomeObserver.observable().update();
  }

  public getTextField() {
    return this.textField;
  }
}
