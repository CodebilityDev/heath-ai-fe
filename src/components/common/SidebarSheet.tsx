import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";

export function SheetSidebar({ children }: { children: React.ReactNode }) {
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
      <SheetContent
        className="overflow-y-auto sm:py-12 px-4 sm:px-12"
        side="left"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
