import { Dropdown, Navbar } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import { NavbarBrand } from "flowbite-react/lib/esm/components/Navbar/NavbarBrand";
import { NavbarCollapse } from "flowbite-react/lib/esm/components/Navbar/NavbarCollapse";
import { NavbarLink } from "flowbite-react/lib/esm/components/Navbar/NavbarLink";
import { NavbarToggle } from "flowbite-react/lib/esm/components/Navbar/NavbarToggle";
import { useNavigate } from "react-router-dom";
export default function Mynavbar1(){
let Navigate=useNavigate();
    return(
        <>
        <Navbar
  fluid={true}
  rounded={true}
>
  <NavbarBrand
  onClick={()=>{Navigate("/Home")}}

    to="/navbars"
  >
    <img
      src="https://e7.pngegg.com/pngimages/665/792/png-clipart-black-wolf-illustration-dog-arctic-wolf-drawing-anime-wolf-blue-mammal.png"
      className="mr-3 h-6 sm:h-9"
      alt="PET SHOP"
    />
    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
      PET SHOP
    </span>
  </NavbarBrand>
  <NavbarToggle />
  <NavbarCollapse>
    <NavbarLink
     onClick={()=>{Navigate("/Home")}}
    >
      
      Home
    </NavbarLink>
    <NavbarLink
    onClick={()=>{Navigate("/About")}}
    >
      About
    </NavbarLink>
    <NavbarLink  onClick={()=>{Navigate("/Sevices")}}>
       Services
      
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