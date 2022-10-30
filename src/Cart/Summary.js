import React from 'react';

const Summary = () => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 border-0 shadow bg-body">
        <div className="card-header bg-white py-3">
          <h5 className="mb-0">The total amount of</h5>
        </div>
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>$53.98</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span>
                <strong>$53.98</strong>
              </span>
            </li>
          </ul>

          <button type="button" className="btn btn-primary btn-lg btn-block w-100 rounded-1">
            Go to checkout
          </button>
        </div>
      </div>
      <div className="card border-0 shadow bg-body">
        <div className="card-body">
          <select className="form-select border-0" aria-label=".form-select-lg example">
            <option selected>Add a checkout code [optional]</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Summary;
