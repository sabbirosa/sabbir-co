import Link from "next/link";
// import SiteLogo from "/public/sabbir-co.svg";
import SiteLogo from "@/app/favicon.ico";
import Image from "next/image";
export const Header = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10 gap-2">
      <div className="p-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/">
          <>
            {/* <SiteLogo className="size-8 fill-[url(#site-logo-gradient)]" />

            <svg className="size-0 absolute">
              <linearGradient id="site-logo-gradient">
                <stop offset="0%" stopColor="#3B82F6" />
                <stop offset="100%" stopColor="#6366F1" />
              </linearGradient>
            </svg> */}
            <Image src={SiteLogo} alt="Sabbir" width={32} height={32} />
          </>
        </Link>
      </div>

      <nav className="flex gap-1 p-1 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        {navItems.map((item, index) => {
          return index === navItems.length - 1 ? (
            <Link
              className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
              key={index}
              href={item.href}
            >
              {item.label}
            </Link>
          ) : (
            <Link className="nav-item" key={index} href={item.href}>
              {item.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};
