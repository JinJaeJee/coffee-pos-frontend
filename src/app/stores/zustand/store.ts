import { create } from "zustand";

type Store = {
  isMenuOpen: boolean;
  toggleSideMenu: () => void;
};

const useStore = create<Store>((set) => ({
  isMenuOpen: true,
  toggleSideMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}));

export default useStore;
