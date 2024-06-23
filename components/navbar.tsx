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
import { useState } from "react";
import { IconChevronDown, IconChevronUp } from '@tabler/icons-react';
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { Logo, WhatsAppLogo } from "@/components/icons";
import { MegaMenu } from "./UI/mega-menu";

export const Navbar = () => {
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  return (
    <NextUINavbar maxWidth="xl" position="sticky" className="rounded-xl">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo width={140} />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem
              key={item.href}
              onClick={() =>
                item.label === "Products" && setMegaMenuOpen(!megaMenuOpen)
              }
            >
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-semibold",
                  "font-semibold"
                )}
                color="foreground"
                href={item.label === "Products" ? "/" :item.href}
              >
                {item.label} {item.label === "Products" && (
                <span className="ml-1">
                    {megaMenuOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
                  </span>
              )}
              </NextLink>
              {item.label === "Products" && megaMenuOpen && <MegaMenu />}
              
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.whatsapp}>
            <WhatsAppLogo className="text-default-500" />
          </Link>
          <ThemeSwitch className="hidden" />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.whatsapp}>
          <WhatsAppLogo className="text-default-500" />
        </Link>
        <ThemeSwitch className="hidden" />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem
              key={`${item}-${index}`}
              onClick={() =>
                item.label === "Products" && setMegaMenuOpen(!megaMenuOpen)
              }
            >
              {item.label === "Products" ? (
                <div className="flex items-center font-semibold">
                  {item.label}

                  <span className="ml-1">
                    {megaMenuOpen ? <IconChevronUp size={16} /> : <IconChevronDown size={16} />}
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
                  href="#"
                  size="lg"
                  className="font-semibold"
                >
                  {item.label}
                </Link>
              )}
            </NavbarMenuItem>
          ))}
        </div>
        <NavbarMenuItem>{megaMenuOpen && <MegaMenu />}</NavbarMenuItem>
      </NavbarMenu>
    </NextUINavbar>
  );
};
