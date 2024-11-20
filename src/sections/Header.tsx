import Link from "next/link";

export const Header = () => {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-10">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
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
    </div>
  );
};
