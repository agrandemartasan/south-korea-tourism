export interface NavItem {
  labelKey: string;
  hasDropdown: boolean;
  href?: string;
}

export const navItems: NavItem[] = [
  { labelKey: "roots", hasDropdown: true },
  { labelKey: "culture", hasDropdown: true },
  { labelKey: "attractions", hasDropdown: true },
  { labelKey: "flavours", hasDropdown: true },
  { labelKey: "plan", hasDropdown: false, href: "/plan" }
];
