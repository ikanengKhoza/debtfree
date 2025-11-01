import { useEffect, useState } from "react";

export default function ResetPassword() {
  const [error, setError] = useState("");
  const [deepLink, setDeepLink] = useState("");
  const [redirecting, setRedirecting] = useState(true);

  useEffect(() => {
    redirectToApp();
  }, []);

  const redirectToApp = () => {
    try {
      const hash = window.location.hash.substring(1);

      if (!hash) {
        setError("No authentication parameters found in URL");
        setRedirecting(false);
        return;
      }

      const hashParams = new URLSearchParams(hash);
      const access_token = hashParams.get("access_token");
      const refresh_token = hashParams.get("refresh_token");
      const type = hashParams.get("type");

      if (!access_token || !refresh_token) {
        setError(
          "Missing authentication tokens. Please use the link from your email."
        );
        setRedirecting(false);
        return;
      }

      const appDeepLink = `debtfreedisciple://auth/callback#access_token=${access_token}&refresh_token=${refresh_token}&type=${
        type || "recovery"
      }`;

      setDeepLink(appDeepLink);
      window.location.href = appDeepLink;

      setTimeout(() => {
        setRedirecting(false);
      }, 2000);
    } catch (err) {
      setError("Failed to redirect: " + err.message);
      setRedirecting(false);
    }
  };

  const handleManualRedirect = () => {
    if (deepLink) {
      window.location.href = deepLink;
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {redirecting ? (
          <>
            <div style={styles.spinner}></div>
            <h1 style={styles.title}>Opening Debt Free Disciple App...</h1>
            <p style={styles.subtitle}>
              You will be redirected to the app automatically.
            </p>
            <p style={styles.note}>
              If nothing happens, make sure the app is installed on your device.
            </p>
          </>
        ) : (
          <>
            <h1 style={styles.title}>Open the App</h1>
            {error ? (
              <div style={styles.errorBox}>
                <p style={styles.errorText}>❌ {error}</p>
              </div>
            ) : (
              <>
                <p style={styles.subtitle}>
                  The app didn't open automatically. Click the button below:
                </p>
                <button onClick={handleManualRedirect} style={styles.button}>
                  🚀 Open Debt Free Disciple App
                </button>
                <div style={styles.infoBox}>
                  <p style={styles.infoText}>
                    <strong>App not installed?</strong>
                    <br />
                    Download the Debt Free Disciple app from your device's app
                    store first.
                  </p>
                </div>
              </>
            )}
          </>
        )}
      </div>

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        button:hover {
          transform: scale(1.05);
          box-shadow: 0 8px 20px rgba(50, 143, 60, 0.3);
        }
        button:active {
          transform: scale(0.98);
        }
      `}</style>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #328F3C 0%, #1a5a23 100%)",
    padding: "20px",
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif',
  },
  content: {
    textAlign: "center",
    maxWidth: "500px",
    width: "100%",
    background: "rgba(255, 255, 255, 0.98)",
    backdropFilter: "blur(10px)",
    padding: "50px 40px",
    borderRadius: "20px",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  spinner: {
    border: "4px solid rgba(50, 143, 60, 0.2)",
    borderTop: "4px solid #328F3C",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    animation: "spin 1s linear infinite",
    margin: "0 auto 30px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "16px",
    color: "#1a1a1a",
  },
  subtitle: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "20px",
    lineHeight: "1.6",
  },
  note: {
    fontSize: "14px",
    color: "#999",
    fontStyle: "italic",
  },
  button: {
    backgroundColor: "#328F3C",
    color: "#fff",
    padding: "16px 40px",
    borderRadius: "50px",
    border: "none",
    fontSize: "18px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    marginBottom: "20px",
    width: "100%",
  },
  errorBox: {
    backgroundColor: "#fee",
    border: "2px solid #fcc",
    borderRadius: "12px",
    padding: "20px",
    marginBottom: "20px",
  },
  errorText: {
    color: "#c00",
    margin: 0,
    fontSize: "16px",
  },
  infoBox: {
    backgroundColor: "#e7f3ff",
    border: "1px solid #b3d9ff",
    borderRadius: "12px",
    padding: "16px",
    marginTop: "20px",
  },
  infoText: {
    color: "#0066cc",
    margin: 0,
    fontSize: "14px",
    lineHeight: "1.6",
  },
};
