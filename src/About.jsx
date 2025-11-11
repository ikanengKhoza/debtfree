import React from "react";

function About() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="display-5 fw-bold text-success mb-4">About</h2>
          <div className="bg-light rounded p-4 mb-4">
            <p className="lead mb-0">
              Debt Free Disciple is designed to simplify your journey to
              financial freedom. Take control of your finances with tools that
              help you:
            </p>
          </div>
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <h4 className="fw-bold text-success mb-3">Track Your Debts</h4>
              <p>
                List all your debts in one place and monitor your progress as
                you pay them down
              </p>
              <br></br>
              <h4 className="fw-bold text-success mb-3">Create A Budget</h4>
              <p>
                Build a realistic budget that keeps you on track and aligned
                with your financial goals
              </p>
              <br></br>

              <h4 className="fw-bold text-success mb-3">Eliminate Debt</h4>
              <p>
                Stay focused on becoming debt-free with clear insights and
                actionable plans
              </p>
              <br></br>
              <h4 className="fw-bold text-success mb-3">Build Wealth</h4>
              <p>
                Shift from surviving to thriving as you move from debt
                elimination to wealth creation Whether you're just starting your
                financial journey or ready to accelerate your progress, Debt
                Free Disciple gives you the clarity and tools you need to
                achieve lasting financial freedom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
