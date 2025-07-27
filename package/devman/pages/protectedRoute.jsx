import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Account } from "appwrite";
import { client } from "../src/components/Appwrite"; // adjust as needed

const account = new Account(client);

const ProtectedRoute = (WrappedComponent) => {
  return function WithAuth(props) {
    const router = useRouter();
    const [checkingSession, setCheckingSession] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);

    useEffect(() => {
      const checkSession = async () => {
        try {
          await account.getSession("current");
          setIsAuthenticated(true);
        } catch (error) {
          setAuthFailed(true);
          setTimeout(() => {
            router.push("/admin-login");
          }, 3000); // wait 3 seconds before redirecting
        } finally {
          setCheckingSession(false);
        }
      };

      checkSession();
    }, []);

    if (checkingSession) {
      return <p className="text-center mt-4">Checking authentication...</p>;
    }

    if (authFailed) {
      return (
        <div className="text-center mt-5">
          <h3>Unauthorized Access</h3>
          <p>Redirecting to login page...</p>
        </div>
      );
    }

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default ProtectedRoute;
