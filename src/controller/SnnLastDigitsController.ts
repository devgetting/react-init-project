import { TextFieldDAO } from "models/dao/TextFieldDAO";
import { SnnLastDigitsServiceImpl } from "services/impl/SnnLastDigitsServiceImpl";
import { SnnLastDigitsService } from "services/SnnLastDigitsService";

export class SnnLastDigitsController {
  private snnLastDigitsService: SnnLastDigitsService;

  constructor() {
    this.snnLastDigitsService = new SnnLastDigitsServiceImpl();
  }

  get field(): TextFieldDAO {
    return this.snnLastDigitsService.getTextField();
  }

  changeInputValue(value: string) {
    this.snnLastDigitsService.changeInputValue(value);
  }

  onFocusValidation() {
    this.snnLastDigitsService.validateOnFocus();
  }

  switchView() {
    this.snnLastDigitsService.switchToSecondStep();
  }
}
