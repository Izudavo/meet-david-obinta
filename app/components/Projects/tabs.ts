export const tabs = [
  { key: "uiux", label: "UI/UX" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "cloud", label: "Cloud" },
] as const;

export type TabKey = (typeof tabs)[number]["key"];