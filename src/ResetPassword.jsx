import { useEffect } from "react";

export default function ResetPasswordBridge() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    console.log("Bridge page hash:", hash);
    if (!hash) {
      alert("Invalid reset link – no tokens present.");
      return;
    }
    const deepLink = `myapp://ResetPassword#${hash}`;
    window.location.replace(deepLink);

    setTimeout(() => {
      window.location.href = "/open-app-instructions";
    }, 2000);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Opening app to reset password…</h2>
      <p>
        If nothing happens, please <a href="myapp://ResetPassword">tap here</a>.
      </p>
    </div>
  );
}
