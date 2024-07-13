import { twMerge } from "tailwind-merge";
import Button from "../core/Button";
import Container from "../core/Container";

const Header = () => {
  return (
    <div className="flex w-full h-16">
      <Container className="flex items-center justify-between px-4 ">
        <img src="/images/logo.png" alt="logo" width={150} className="" />
        <div className="hidden gap-x-8 lg:flex">
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
        <Button
          className="w-auto px-6 py-3 text-white rounded-md bg-primary"
          onClick={() => {
            window.location.href = "/sign-in";
          }}
        >
          Go To Dashboard
        </Button>
      </Container>
    </div>
  );
};

export default Header;
