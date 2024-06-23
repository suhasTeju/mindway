// components/Navbar.tsx
"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";
// import { useRouter } from "next/router";
import { IconChevronDown, IconChevronUp } from "@tabler/icons-react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, WhatsAppLogo } from "@/components/icons";
import { MegaMenu } from "./UI/mega-menu";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item:any) => {
    if (item.label === "Products") {
      setMegaMenuOpen(!megaMenuOpen);
    } else {
      setMenuOpen(false); // Close the menu when an item is clicked
    }
  };
  const handler = () => {
    setMenuOpen(false);
    setTimeout(() => {
      //@ts-ignore
      document.querySelector('button[data-open="true"]')?.click();
    }, 300);
  };

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="rounded-xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo width={140} />
          </NextLink>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              onClick={() => handleMenuItemClick(item)}
            >
              {!(item.label === "Products") ? (
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-semibold",
                    "font-semibold",
                    {
                      "pointer-events-none text-green-500":
                        pathname === item.href,
                    } // Disable item if current path matches href
                  )}
                  color="foreground"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              ) : (
                <div className="flex font-semibold items-center cursor-pointer">
                  {item.label}
                  <span className="ml-1">
                    {megaMenuOpen ? (
                      <IconChevronUp size={16} />
                    ) : (
                      <IconChevronDown size={16} />
                    )}
                  </span>
                </div>
              )}

              {item.label === "Products" && megaMenuOpen && <MegaMenu handler={handler} />}
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link
            isExternal
            aria-label="WhatsApp"
            href={siteConfig.links.whatsapp}
          >
            <WhatsAppLogo className="text-default-500" />
          </Link>
          <ThemeSwitch className="hidden" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="WhatsApp" href={siteConfig.links.whatsapp}>
          <WhatsAppLogo className="text-default-500" />
        </Link>
        <ThemeSwitch className="hidden" />
        <NavbarMenuToggle onClick={toggleMenu} />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              onClick={() => handleMenuItemClick(item)}
            >
              {item.label === "Products" ? (
                <div className="flex items-center font-semibold">
                  {item.label}
                  <span className="ml-1">
                    {megaMenuOpen ? (
                      <IconChevronUp size={16} />
                    ) : (
                      <IconChevronDown size={16} />
                    )}
                  </span>
                </div>
              ) : (
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  href={item.href}
                  size="lg"
                  className={clsx(
                    "font-semibold",
                    {
                      "pointer-events-none text-green-500":
                        pathname === item.href,
                    } // Disable item if current path matches href
                  )}
                  onClick={handler} // Ensure the menu closes when a link is clicked
                  isDisabled={pathname === item.href}
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
        {megaMenuOpen && (
          <NavbarMenuItem>
            <MegaMenu handler={handler} />
          </NavbarMenuItem>
        )}
      </NavbarMenu>
    </NextUINavbar>
  );
};
