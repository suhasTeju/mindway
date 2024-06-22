export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + NextUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Products",
      href: "/products",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
    whatsapp: "https://wa.me/+919731370710"
  },
  logo: {
    transparent: "/footer-logo.png"
  },
  hero: {
    header: "Leading the Way",
    headerHighlightText : "in Diagnostic Innovation",
    subheader: "High-Quality Biomedical Equipment to Empower Your Diagnostic Center",
    review: {
      review1: {
        by: "From Industry Experts",
        from: "100+"
      },
      review2: {
        by: "From Customers",
        from: "100+"
      }
    },
    action: {
      primary: {
        text: "Get Started"
      } ,
      secondary: {
        text: "Contact Us"
      }
    }
  },
  

};
