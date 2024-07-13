import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <main className="relative flex min-h-screen">
      <Outlet />
      {/* <span className="fixed flex items-center justify-center font-semibold text-white bg-black rounded-full bottom-2 left-2 size-8">
        <p className="block text-sm sm:hidden">xs</p>
        <p className="hidden text-sm sm:block md:hidden">sm</p>
        <p className="hidden text-sm md:block lg:hidden">md</p>
        <p className="hidden text-sm lg:block xl:hidden">lg</p>
        <p className="hidden text-sm xl:block 2xl:hidden">xl</p>
        <p className="hidden text-sm 2xl:block">2xl</p>
      </span> */}
    </main>
  );
};

export default MainLayout;
