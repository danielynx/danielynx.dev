import { create } from "zustand";

interface ProfileIntersectionStoreType {
    intersectionRatio: number;
    setIntersectionRatio: (intersectionRatio: number) => void;
    isProfileHidden: () => boolean;
}

const useProfileIntersectionStore = create<ProfileIntersectionStoreType>(
    (set, get) => ({
        intersectionRatio: 1,
        setIntersectionRatio: (intersectionRatio: number) =>
            set({ intersectionRatio }),
        isProfileHidden: () => get().intersectionRatio < 0.5,
    }),
);

export { useProfileIntersectionStore, type ProfileIntersectionStoreType };
