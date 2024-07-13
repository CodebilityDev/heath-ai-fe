import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import Sidebar from "../pages/main/Sidebar";
import { useState } from "react";

export function SheetDemo() {
  const [isOpen, setIsOpen] = useState(false);
  console.log(isOpen);
  return (
    <Sheet onOpenChange={setIsOpen} open={isOpen}>
      <SheetTrigger asChild>
        {!isOpen ? (
          <GiHamburgerMenu size={20} className="cursor-pointer" />
        ) : (
          <IoMdClose size={20} className="cursor-pointer" />
        )}
      </SheetTrigger>
      <SheetContent className="overflow-y-auto" side="left">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
}
