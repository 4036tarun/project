import { Dropdown, Navbar } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import { NavbarCollapse } from "flowbite-react/lib/esm/components/Navbar/NavbarCollapse";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle";

export default function Mynavbar1(){

    return(
        <>
        <Navbar
  fluid={true}
  rounded={true}
>
  <NavbarBrand
    // as={{
    //   $$typeof: Symbol(react.forward_ref),
    //   render: LinkWithRef
    // }}
    to="/navbars"
  >
    <img
      src="https://e7.pngegg.com/pngimages/665/792/png-clipart-black-wolf-illustration-dog-arctic-wolf-drawing-anime-wolf-blue-mammal.png"
      className="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      PET SHOP
    </span>
  </NavbarBrand>
  <NavbarToggle />
  <NavbarCollapse>
    <NavbarLink
      href="/home"
      active={true}
    >
      Home
    </NavbarLink>
    <NavbarLink
    //   as={{
    //     $$typeof: Symbol(react.forward_ref),
    //     render: LinkWithRef
    //   }}
    // to="/navbars"
      href="/about"
    >
      About
    </NavbarLink>
    <NavbarLink href="/services">
      {/* Services */}
      <Dropdown
  label="Services"
  inline={true}
>
  <DropdownItem>
    Buying
  </DropdownItem>
  <DropdownItem>
    Selling
  </DropdownItem>
</Dropdown>
    </NavbarLink>
    <NavbarLink href="/pricing">
      Pricing
    </NavbarLink>
    <NavbarLink href="/contact">
      Contact
    </NavbarLink>
    <NavbarLink href="/medical-help">
      Medical Help
    </NavbarLink>
  </NavbarCollapse>
</Navbar>
        </>
    )
}