import { PropsWithChildren, useEffect } from "react";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";

export const WaitParam = (props: { paramToWait: string }) => {
  // wait for params to be ready

  const params = useParams();

  if (!params[props.paramToWait]) {
    return <></>;
  }

  return (
    <>
      <Outlet />
    </>
  );
};
