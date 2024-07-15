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
import {
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, SearchIcon, WhatsAppLogo } from "@/components/icons";
import { usePathname } from "next/navigation";
import { Dropdown } from "./UI/dropdown";
import ProductSearch from "./search-products";

export const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleMenuItemClick = (item: any) => {
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
        <div className="hidden lg:flex gap-4 justify-start ml-2 text-sm">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              onClick={() => handleMenuItemClick(item)}
            >
              {
                <NextLink
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-semibold text-sm",
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
              }
            </NavbarItem>
          ))}
          <Dropdown />
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-6">
          <ProductSearch />
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
        <Dropdown />
        <Link isExternal aria-label="WhatsApp" href={siteConfig.links.whatsapp}>
          <IconBrandWhatsapp className="text-default-500" />
        </Link>
        <ThemeSwitch className="hidden" />
        <NavbarMenuToggle onClick={toggleMenu} />
      </NavbarContent>

      <NavbarMenu>
      <div className="h-10 w-full p-6 m-2 flex items-center font-semibold">
        <ProductSearch />
        </div>
        <div className="mx-4 mt-2 flex flex-col gap-2 text-sm">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              onClick={() => handleMenuItemClick(item)}
            >
              <Link
                color={"primary"}
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
            </NavbarMenuItem>
          ))}
        </div>
        
      </NavbarMenu>
    </NextUINavbar>
  );
};
