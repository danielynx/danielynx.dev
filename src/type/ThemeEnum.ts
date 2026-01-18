export const ThemeEnum = {
    LIGHT: "light",
    DARK: "dark",
    SYSTEM: "system",
} as const;

export type ThemeEnum = (typeof ThemeEnum)[keyof typeof ThemeEnum];
