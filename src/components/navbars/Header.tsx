import { useToggle } from "@hooks";
import { X, List } from "@icons";
import { ButtonLink } from "@components";
import { Link } from "react-router-dom";
import { Logo } from "@assets";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { useScroll } from "@hooks";
import { rootsData, headerData } from "@data";

function Header() {
  /* --- State and Function from MENU --- */
  const [isMenuOpen, handleToggle] = useToggle();

  /* --- Scroll State --- */
  const scrollY = useScroll();

  /* --- User --- */
  const user = false;

  return (
    <header
      className={twMerge(
        clsx(
          "absolute flex border-b-2 top-0 left-0 z-50 px-10 py-2 items-center justify-between w-full h-16 transition-all duration-500 ease-in-out transform",
          {
            "fixed bg-gray-50 translate-y-0 border-b shadow-md": scrollY > 400,
            "-translate-y-full": scrollY < 400 && scrollY > 300,
          }
        )
      )}
    >
      {/* Logo y Menu Icon */}
      <div className="flex gap-3 items-center">
        {/* Menu Icon */}
        <button
          type="button"
          onClick={handleToggle}
          className="border text-xl p-1 rounded-md hidden border-black"
        >
          {isMenuOpen ? <X /> : <List />}
        </button>

        {/* Logo */}
        <Link to={rootsData.index} className={``}>
          <Logo width={80} />
        </Link>
      </div>

      {/* NavLinks */}
      <nav className="flex gap-12">
        {headerData.links.map((item, index) => (
          <Link
            key={index}
            to={item.link}
            className={`relative text-base h-9 flex items-center gap-2 after:absolute after:h-1 after:w-0 after:bg-[#2F6B85] hover:text-[#2F6B85] hover:fill-[#2F6B85] after:bottom-0 hover:after:w-full after:transition-all after:duration-300`}
          >
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Opcion Access */}
      <nav className={`flex items-center gap-2`}>
        {user ? (
          ""
        ) : (
          <ButtonLink href={rootsData.register}>Registrate</ButtonLink>
        )}

        <ButtonLink
          href={user ? rootsData.dasboard : rootsData.login}
          className={clsx(
            "bg-transparent text-[#2F6B85] hover:bg-transparent hover:text-[#224e61]"
          )}
        >
          {user ? "Plataforma" : "Ingresar"}
        </ButtonLink>
      </nav>
    </header>
  );
}

export default Header;
