import {
  Home,
  LayoutGrid,
  Sparkles,
  FileText,
  DollarSign,
  Building2,
  Mail,
} from "lucide-react";

/* ---------------------------------- */
/* Main Navigation                    */
/* ---------------------------------- */

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Solutions",
    href: "#solutions",
  },
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Resources",
    href: "#resources",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

/* ---------------------------------- */
/* Mobile Navigation                  */
/* ---------------------------------- */

export const mobileNavItems = [
  {
    title: "Home",
    href: "#home",
    icon: Home,
  },
  {
    title: "Solutions",
    href: "#solutions",
    icon: LayoutGrid,
  },
  {
    title: "Features",
    href: "#features",
    icon: Sparkles,
  },
  {
    title: "Resources",
    href: "#resources",
    icon: FileText,
  },
  /*{
    title: "Pricing",
    href: "#pricing",
    icon: DollarSign,
  },*/
  {
    title: "About",
    href: "#about",
    icon: Building2,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

/* ---------------------------------- */
/* Call To Action                     */
/* ---------------------------------- */

export const ctaButton = {
  text: "Get Started",
  href: "#contact",
};

/* ---------------------------------- */
/* Company Information                */
/* ---------------------------------- */

export const company = {
  name: "Genesis Digital",
  slogan: "Videos that drive bookings",
  logo: "/logos/logo.png",
};
