import { AccountAccessController } from "controller/AccountAccessController";
import React, { useMemo } from "react";

const AccountAccess = () => {
  const controller = useMemo(() => new AccountAccessController(), []);

  const handleRedirect = () => {
    controller.redirectTo("/testing-page/second-page");
  };

  const renderCard = (list: number) => {
    const listElement = Array.from(Array(list), (_, k) => (
      <li className="list-group-item" key={k}>
        {k + 1} - User list
      </li>
    ));

    return (
      <div className="card">
        <div className="card-header">Account Access</div>
        <ul className="list-group list-group-flush">{listElement}</ul>
      </div>
    );
  };

  const card = renderCard(5);
  const rightCard = renderCard(10);

  return (
    <>
      <div className="row justify-content-center mb-4">
        <div className="col-md-4">{card}</div>
        <div className="col-md-4">{rightCard}</div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-4">
          <div className="d-grid gap-2">
            <button className="btn btn-primary" onClick={handleRedirect}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountAccess;
