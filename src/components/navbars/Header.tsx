import { useToggle } from "@hooks";
import { X, List } from "@icons";
import { ButtonOne, LinkItemTwo } from "@components";
import { Link } from "react-router-dom";
import { Logo } from "@assets";
import { twMerge } from "tailwind-merge";
import { clsx } from "clsx";
import { useScroll } from "@hooks";
import { headerData } from "@data";

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
                        "fixed bg-gray-50 translate-y-0 border-b shadow-md":
                            scrollY > 400,
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
                <Link to={headerData.index} className={``}>
                    <Logo width={80} />
                </Link>
            </div>

            {/* NavLinks */}
            <nav className="flex gap-12">
                {headerData.links.map((item, index) => (
                    <LinkItemTwo key={index} link={item.link}>
                        {item.title}
                    </LinkItemTwo>
                ))}
            </nav>

            {/* Opcion Access */}
            <nav className={`flex items-center gap-2`}>
                {user ? (
                    ""
                ) : (
                    <ButtonOne href={headerData.register.link}>
                        {headerData.register.title}
                    </ButtonOne>
                )}

                <ButtonOne
                    href={
                        user ? headerData.dashboard.link : headerData.login.link
                    }
                    className={clsx(
                        "bg-transparent text-[#2F6B85] hover:bg-transparent hover:text-[#224e61]"
                    )}
                >
                    {user ? headerData.dashboard.title : headerData.login.title}
                </ButtonOne>
            </nav>
        </header>
    );
}

export default Header;
