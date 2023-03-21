import { Footer } from "flowbite-react";
import { FooterCopyright } from "flowbite-react/lib/esm/components/Footer/FooterCopyright";
import { FooterLink } from "flowbite-react/lib/esm/components/Footer/FooterLink";
import { FooterLinkGroup } from "flowbite-react/lib/esm/components/Footer/FooterLinkGroup";

export default function Myfooter1(){

    return(
        <>
        <Footer container={true}>
  <FooterCopyright
    href="#"
    by="Flowbite™"
    year={2022}
  />
  <FooterLinkGroup>
    <FooterLink href="#">
      About
    </FooterLink>
    <FooterLink href="#">
      Privacy Policy
    </FooterLink>
    <FooterLink href="#">
      Licensing
    </FooterLink>
    <FooterLink href="#">
      Contact
    </FooterLink>
  </FooterLinkGroup>
</Footer>

        </>
    )
}