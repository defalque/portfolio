import NavLinks from "./nav-links";
import LocaleSwitcher from "../../locale-switcher";
import { ModeToggle } from "../../mode-toggle";

function Navbar() {
  return (
    <div className="bg-background/70 sticky top-0 z-50 backdrop-blur-sm">
      <header className="mx-auto flex w-full items-center justify-between px-(--spacing-x) py-3 [--md-spacing-x:--spacing(0)] [--sm-spacing-x:--spacing(10)] [--spacing-x:--spacing(5)] sm:px-(--sm-spacing-x) sm:py-4 md:max-w-2xl md:px-(--md-spacing-x) lg:max-w-4xl">
        <NavLinks />

        <div className="ml-auto flex items-center gap-3">
          <ModeToggle />
          <LocaleSwitcher />
        </div>
      </header>
    </div>
  );
}

export default Navbar;
