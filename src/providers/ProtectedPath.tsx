import { AUTHSTORE } from "@graphql/authStorage";
import { apolloClient } from "@graphql/client";
import { GetMe } from "@graphql/declarations/geMe";
import { PropsWithChildren, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const redirectToIfUnauthenticated = "/sign-in";

export const ProtectedPath = (props: PropsWithChildren) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const checkAuth = async () => {
    const token = AUTHSTORE.get();
    if (!token) {
      navigate(redirectToIfUnauthenticated);
    }

    // check if token is valid
    apolloClient
      .query({
        query: GetMe,
      })
      .catch(() => {
        navigate(redirectToIfUnauthenticated);
      });
  };

  useEffect(() => {
    checkAuth();
  }, [pathname]);

  return <>{props.children}</>;
};
