import { useEffect } from "react";

export default function ResetPasswordBridge() {
  useEffect(() => {
    const hash = window.location.hash.substring(1);
    if (!hash) return;

    const deepLink = `debtfreedisciple://auth/ResetPassword#${hash}`;
    console.log("Redirecting to app:", deepLink);
    window.location.href = deepLink;

    setTimeout(() => {
      window.location.href =
        "https://play.google.com/store/apps/details?id=com.yourcompany.debtfreedisciple";
    }, 2000);
  }, []);

  return <p>Opening Debt Free Disciple app...</p>;
}
