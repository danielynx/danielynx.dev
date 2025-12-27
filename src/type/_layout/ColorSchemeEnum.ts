export const ColorSchemeEnum = {
    LIGHT: "Light",
    DARK: "Dark",
} as const;

export type ColorSchemeEnum =
    (typeof ColorSchemeEnum)[keyof typeof ColorSchemeEnum];
