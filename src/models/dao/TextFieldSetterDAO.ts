export interface TextFieldSetterDAO {
  setValue(value: string): void;
  setIsError(isError: boolean): void;
  setErrorMessage(errorMessage: string): void;
}
