import { Heading } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
interface HeaderProps {
  closeMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ closeMenu }) => {
  return (
    <Heading
      size='4'
      weight='regular'
      className='nav_name'
      asChild
      onClick={closeMenu}
    >
      <Link href='/'>kinich_barcelo </Link>
    </Heading>
  );
};

export default Header;
