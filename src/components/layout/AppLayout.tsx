import { Outlet } from "react-router-dom";
import { Sidebar } from "./AppSidebar";
import { SheetSidebar } from "../common/SidebarSheet";
import { TemplateContextProvider } from "@/providers/Template-Provider";

export const AppLayout = () => {
  return (
    <TemplateContextProvider>
      <div className="flex justify-end w-full">
        <Sidebar className="w-[350px] hidden lg:flex" />
        <div className="flex-1 h-screen overflow-y-auto no-scrollbar">
          <div className="sticky top-0 left-0 z-50 flex justify-between w-full px-8 bg-white header-container">
            <p className="text-2xl font-bold">
              Federal<span className="text-2xl text-primary">Plans</span>
            </p>
            <span className="block lg:hidden">
              <SheetSidebar>
                <Sidebar className="flex border-none shadow-none" />
              </SheetSidebar>
            </span>
          </div>
          <Outlet />
        </div>
      </div>
    </TemplateContextProvider>
  );
};
