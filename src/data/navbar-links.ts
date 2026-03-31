export type NavbarLink = {
  title: string;
  path?: string;
};

export const navbarLinks: NavbarLink[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Catalog",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];