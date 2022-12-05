import { TextFieldDAO } from "models/dao/TextFieldDAO";
import { TextFieldDTO } from "models/dto/TextFieldDTO";
import React from "react";
import SecondPage from "./SecondPage";

export function Second(this: SecondPage) {
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: TextFieldDAO
  ) => {
    this.changeValue(field as TextFieldDTO, e.target.value);
  };

  const handleAddField = () => {
    this.addField();
  };

  const handleRemoveField = () => {
    this.removeField();
  };

  const handleRedirect = () => {
    this.redirectToLegacy();
  };

  const emailFields = this.emailFields.map((field) => (
    <div className="row mb-4">
      <div className="col-12">
        <input
          type="text"
          className={`form-control ${field.isError ? "is-invalid" : ""}`}
          placeholder="Insert an email here"
          onChange={(e) => handleChange(e, field)}
          onBlur={() => this.alertOnBlur(field as TextFieldDTO)}
        />
        {field.isError && (
          <div className="invalid-feedback">{field.errorMessage}</div>
        )}
      </div>
    </div>
  ));

  return (
    <div className="container mt-5 mb-5">
      <div className="row justify-content-center">
        <div className="col-md-4">{emailFields}</div>
      </div>
      <div className="row justify-content-center mb-4">
        <div className="col-md-2">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={handleAddField}>
              Add Email
            </button>
          </div>
        </div>
        <div className="col-md-2">
          <div className="d-grid gap-2">
            <button className="btn btn-danger" onClick={handleRemoveField}>
              Remove Email
            </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="d-grid gap-2">
            <button
              className="btn btn-outline-success"
              onClick={handleRedirect}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
