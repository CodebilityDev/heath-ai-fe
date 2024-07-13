import { twMerge } from "tailwind-merge";
import Button from "../core/Button";
import Container from "../core/Container";

const Header = () => {
  return (
    <div className="h-16 flex w-full">
      <Container className=" flex items-center justify-between px-4">
        <img src="/images/logo.png" alt="logo" width={150} className="" />
        <div className="flex gap-x-8">
          {[
            { label: "Home", active: true },
            { label: "About" },
            { label: "Technology" },
            { label: "Service" },
          ].map((item, index) => (
            <a
              href="#"
              key={`key-nav-${index}`}
              className={twMerge(
                "hover:text-primary hover:opacity-60 transition",
                item.active && "text-primary"
              )}
            >
              {item.label}
            </a>
          ))}
        </div>
        <Button className="py-3 text-white w-auto bg-primary rounded-md px-6">
          Book a cell
        </Button>
      </Container>
    </div>
  );
};

export default Header;
