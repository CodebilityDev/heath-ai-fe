import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IoMdClose } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

export function SheetSidebar({
  children,
  sheetContentClassName,
}: {
  children: React.ReactNode;
  sheetContentClassName?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
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
        className={twMerge(
          "overflow-hidden p-0 px-4 w-full sm:w-sm",
          sheetContentClassName
        )}
        side="left"
      >
        <SheetTitle className="sr-only">Sidebar</SheetTitle>
        <SheetDescription className="sr-only"></SheetDescription>
        {children}
      </SheetContent>
    </Sheet>
  );
}
