"use client";

import {
	createContext,
	type Dispatch,
	type PropsWithChildren,
	type SetStateAction,
	useMemo,
} from "react";
import { useBrowserColorScheme } from "@/hook/_layout/useBrowserColorScheme";
import { useSyncExternalLocalStorage } from "@/hook/useSyncExternalLocalStorage";
import { ColorSchemeEnum } from "@/type/_layout/ColorSchemeEnum";

type FunctionSetColorScheme = Dispatch<
	SetStateAction<ColorSchemeEnum | undefined>
>;

interface ColorSchemeContextType {
	colorScheme: ColorSchemeEnum | undefined;
	setColorScheme: FunctionSetColorScheme;
}

const ColorSchemeContext = createContext<ColorSchemeContextType | undefined>(
	undefined,
);

function ColorSchemeInternalProvider({
	children,
	initialValue,
}: PropsWithChildren<{ initialValue?: ColorSchemeEnum }>) {
	const {
		storageValue: storageColorScheme,
		setStorageValue: setStorageColorScheme,
	} = useSyncExternalLocalStorage<ColorSchemeEnum>("color-scheme");

	const browserColorScheme = useBrowserColorScheme();

	const colorScheme = useMemo<ColorSchemeEnum>(
		() => initialValue ?? storageColorScheme ?? browserColorScheme,
		[initialValue, storageColorScheme, browserColorScheme],
	);

	const value = useMemo<ColorSchemeContextType>(
		() => ({
			colorScheme,
			setColorScheme: setStorageColorScheme,
		}),
		[colorScheme, setStorageColorScheme],
	);

	return (
		<ColorSchemeContext.Provider value={value}>
			<div className={colorScheme === ColorSchemeEnum.DARK ? "dark" : ""}>
				{children}
			</div>
		</ColorSchemeContext.Provider>
	);
}

export {
	ColorSchemeContext,
	ColorSchemeInternalProvider,
	type ColorSchemeContextType,
};
