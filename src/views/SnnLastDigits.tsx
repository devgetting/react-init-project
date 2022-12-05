import { SnnLastDigitsController } from "controller/SnnLastDigitsController";
import React, { useMemo } from "react";

const SnnLastDigits = () => {
  const controller = useMemo(() => new SnnLastDigitsController(), []);

  const classnames = [
    "form-control",
    controller.field.isError ? "is-invalid" : "",
  ].join(" ");

  const handleOnFocus = () => {
    controller.onFocusValidation();
  };

  const handleChangeInputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    controller.changeInputValue(e.target.value);
  };

  const handleSwitchView = () => {
    controller.switchView();
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-4">
        <div className="row text-center mb-4">
          <div className="col-12">
            <h3>Please insert the last 4 digits</h3>
            <p>Please insert the last 4 digits present into your SSN card</p>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-12">
            <input
              type="text"
              className={classnames}
              value={controller.field.value}
              onBlur={handleOnFocus}
              onChange={handleChangeInputValue}
            />
            {controller.field.isError && (
              <div className="invalid-feedback">
                {controller.field.errorMessage}
              </div>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="d-grid gap-2">
              <button className="btn btn-primary" onClick={handleSwitchView}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SnnLastDigits;
