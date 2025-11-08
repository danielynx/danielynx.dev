"use client";

import { useCallback, useContext, useMemo } from "react";

import { ColorSchemeEnum } from "@/type/_layout/ColorSchemeEnum";
import {
	ColorSchemeContext,
	type ColorSchemeContextType,
} from "@/context/_layout/ColorSchemeProvider";

interface UseColorSchemeType extends ColorSchemeContextType {
	isColorSchemeDark: boolean;
	toggleColorScheme: () => void;
}

function useColorScheme(): UseColorSchemeType {
	const context = useContext(ColorSchemeContext);

	if (!context) {
		throw new Error("useColorScheme must be used within a ColorSchemeProvider");
	}

	const { colorScheme, setColorScheme } = context;

	const isColorSchemeDark = useMemo(
		() => colorScheme === ColorSchemeEnum.DARK,
		[colorScheme],
	);

	const toggleColorScheme = useCallback(() => {
		setColorScheme(
			isColorSchemeDark ? ColorSchemeEnum.LIGHT : ColorSchemeEnum.DARK,
		);
	}, [isColorSchemeDark, setColorScheme]);

	return {
		...context,
		isColorSchemeDark,
		toggleColorScheme,
	};
}

export { useColorScheme, type UseColorSchemeType };
