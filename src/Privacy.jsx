import React from "react";

function Privacy() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <h2 className="display-5 fw-bold text-success mb-4">
            Privacy Policy
          </h2>
          <div className="bg-light rounded p-4 mb-4">
            <p className="lead mb-0">
              Your privacy is important to us. This policy outlines how we
              collect, use, and protect your information.
            </p>
          </div>
          <div className="card border-0 shadow-sm">
            <div className="card-body p-4">
              <p className="text-muted">
                When you create an account with us, you guarantee that you are
                above the age of 18 (or the legal age of majority in your
                jurisdiction) and that the information you provide us is
                accurate, complete, and current at all times. Inaccurate,
                incomplete, or obsolete information may result in the immediate
                termination of your account on the Service. You are responsible
                for maintaining the confidentiality of your account and
                password, including but not limited to the restriction of access
                to your computer and/or account. You agree to accept
                responsibility for any and all activities or actions that occur
                under your account and/or password, whether your password is
                with our Service or a third-party service. You must notify us
                immediately upon becoming aware of any breach of security or
                unauthorized use of your account. You may not use as a username
                the name of another person or entity or that is not lawfully
                available for use, a name or trademark that is subject to any
                rights of another person or entity other than you without
                appropriate authorization, or a name that is otherwise
                offensive, vulgar, or obscene.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Privacy;
