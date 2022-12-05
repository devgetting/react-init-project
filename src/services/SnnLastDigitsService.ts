import { TextFieldDTO } from "models/dto/TextFieldDTO";

export interface SnnLastDigitsService {
  changeInputValue(value: string): void;
  validateOnFocus(): void;
  switchToSecondStep(): void;
  getTextField(): TextFieldDTO;
}
