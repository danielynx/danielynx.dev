"use client";

import {
	useSyncExternalStore,
	useEffect,
	useState,
	useCallback,
	type SetStateAction,
	type Dispatch,
} from "react";

interface UseSyncExternalLocalStorageType<T> {
	storageValue: T;
	setStorageValue: Dispatch<SetStateAction<T>>;
}

function hasLocalStorage(): boolean {
	return (
		typeof globalThis !== "undefined" && globalThis.localStorage !== undefined
	);
}

const getServerSnapshot = () => undefined;

function useSyncExternalLocalStorage<T>(
	key: string,
): UseSyncExternalLocalStorageType<T | undefined> {
	const [client, setClient] = useState(false);

	const subscribe = useCallback(
		(onStoreChange: () => void) => {
			if (!hasLocalStorage()) {
				return () => {};
			}

			// Execute callback only if the change was made in the subscribed key
			const handler = (event: StorageEvent) => {
				if (!event.key || event.key === key) onStoreChange();
			};

			// Add listener for color scheme changes
			globalThis.addEventListener("storage", handler);

			// Return cleanup function
			return () => globalThis.removeEventListener("storage", handler);
		},
		[key],
	);

	// Get current value (client-side) for a key
	const getSnapshot = useCallback(() => {
		if (!hasLocalStorage()) return undefined;

		const value = globalThis.localStorage.getItem(key);

		return value === null ? undefined : JSON.parse(value);
	}, [key]);

	const [storageValue, setStorageValue] = useState<T | undefined>(
		getSnapshot(),
	);

	const externalStorageValue = useSyncExternalStore<T | undefined>(
		subscribe,
		getSnapshot,
		getServerSnapshot,
	);

	useEffect(() => {
		if (client) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setStorageValue(externalStorageValue);
		}
	}, [externalStorageValue, client]);

	useEffect(() => {
		if (!hasLocalStorage()) return;

		if (storageValue === undefined) {
			globalThis.localStorage.removeItem(key);
		} else {
			globalThis.localStorage.setItem(key, JSON.stringify(storageValue));
		}

		globalThis.dispatchEvent(new StorageEvent("storage", { key }));
	}, [storageValue, key]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setClient(true);
	}, []);

	return {
		storageValue: client ? storageValue : externalStorageValue,
		setStorageValue,
	};
}

export { useSyncExternalLocalStorage };
