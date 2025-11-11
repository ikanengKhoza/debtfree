import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-3">
          Welcome to Debt Free Disciple
        </h1>
        <p className="lead text-muted">
          Your trusted companion for financial freedom and smart budgeting
        </p>
      </div>

      <div className="row g-4 mb-5">
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="text-success mb-3">
                <i className="bi bi-graph-up" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Track Your Debt Progress</h5>
              <p className="card-text text-muted">
                Monitor your financial journey with intuitive budgeting tools
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="text-success mb-3">
                <i
                  className="bi bi-shield-check"
                  style={{ fontSize: "3rem" }}
                ></i>
              </div>
              <h5 className="card-title fw-bold">Secure & Private</h5>
              <p className="card-text text-muted">
                Your financial data is protected with industry-standard security
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body text-center p-4">
              <div className="text-success mb-3">
                <i className="bi bi-lightbulb" style={{ fontSize: "3rem" }}></i>
              </div>
              <h5 className="card-title fw-bold">Create A Budget</h5>
              <p className="card-text text-muted">
                Track every penny and understand where your money is going
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-light rounded p-5 text-center">
        <h3 className="fw-bold mb-3">Legal Information</h3>
        <p className="text-muted mb-4">
          Please review our policies to understand how we protect your data and
          outline our service terms
        </p>
        <div className="d-flex gap-3 justify-content-center flex-wrap">
          <Link to="/Privacy" className="btn btn-success btn-lg">
            Privacy Policy
          </Link>
          <Link to="/TermsOfUse" className="btn btn-outline-success btn-lg">
            Terms of Use
          </Link>
          <Link to="/About" className="btn btn-outline-success btn-lg">
            About
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
