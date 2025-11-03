import { useEffect } from "react";

export default function ResetPasswordBridge() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (!hash) {
      alert("Invalid reset link. Please try again.");
      return;
    }

    const deepLink = `debtfreedisciple://ResetPassword#${hash}`;
    console.log("Redirecting to deep link:", deepLink);

    window.location.replace(deepLink);

    const fallback = setTimeout(() => {
      window.location.href = "/open/app-instructions";
    }, 2000);

    return () => clearTimeout(fallback);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "4rem" }}>
      <h2>Opening DebtFreeDisciple App...</h2>
      <p>
        If nothing happens,{" "}
        <a href="debtfreedisciple://ResetPassword">tap here</a>.
      </p>
    </div>
  );
}
