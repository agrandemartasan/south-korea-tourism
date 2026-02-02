export interface NavItem {
  label: string;
  hasDropdown: boolean;
}

export const navItems: NavItem[] = [
  { label: "Raízes da Coreia", hasDropdown: true },
  { label: "Cultura & Tradições", hasDropdown: true },
  { label: "Atrações", hasDropdown: true },
  { label: "Sabores da Coreia", hasDropdown: true },
  { label: "Planear", hasDropdown: false }
];
