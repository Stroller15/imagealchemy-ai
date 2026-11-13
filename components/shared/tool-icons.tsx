import {
  Coins,
  Eraser,
  Expand,
  History,
  LayoutGrid,
  Palette,
  Scissors,
  UserRound,
  type LucideIcon,
} from "lucide-react";

/** One line icon per transformation type. */
export const toolIcons: Record<string, LucideIcon> = {
  restore: History,
  fill: Expand,
  remove: Eraser,
  recolor: Palette,
  removeBackground: Scissors,
};

/** Icons for every sidebar route. */
export const routeIcons: Record<string, LucideIcon> = {
  "/home": LayoutGrid,
  "/transformations/add/restore": History,
  "/transformations/add/fill": Expand,
  "/transformations/add/remove": Eraser,
  "/transformations/add/recolor": Palette,
  "/transformations/add/removeBackground": Scissors,
  "/profile": UserRound,
  "/credits": Coins,
};

/** Grouped navigation, built from the existing navLinks. */
export const navGroups = (
  links: { label: string; route: string }[]
) => [
  { label: null, items: links.slice(0, 1) },
  { label: "Tools", items: links.slice(1, 6) },
  { label: "Account", items: links.slice(6) },
];
