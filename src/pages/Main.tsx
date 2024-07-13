// import Sidebar from "@components/pages/main/Sidebar";
// import Content from "@components/pages/main/Content";
import Loader from "@components/common/Loader";
import { appStateAtom } from "@/state/AppState";
import { useRecoilState } from "recoil";
import { AppStateInterface } from "@/types/AppState";

const Main = () => {
  const [appState, setAppState] =
    useRecoilState<AppStateInterface>(appStateAtom);
  return (
    <>
      <div className="flex justify-end w-full">
        <div className=" fixed left-[-325px] lg:left-[0px] bg-white h-full w-[325px] lg:flex hidden">
          {/* <Sidebar /> */}
        </div>
        <div className="lg:w-[calc(100%-325px)] w-full">
          {/* <Content /> */}
        </div>
      </div>
      <Loader isLoading={appState.isLoading} />
    </>
  );
};

export default Main;
