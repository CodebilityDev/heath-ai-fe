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
        className="overflow-hidden p-0 px-4 w-full sm:w-auto"
        side="left"
      >
        {children}
      </SheetContent>
    </Sheet>
  );
}
