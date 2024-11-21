import Link from "next/link";

export const Header = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-center items-center fixed top-3 w-full z-10 gap-2">
      <div className="p-1.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <Link href="/">
          <p className="text-xl font-bold text-white">Co</p>
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
