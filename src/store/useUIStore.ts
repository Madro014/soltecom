import { create } from 'zustand';

interface UIStore {
  isTechnicalGuideOpen: boolean;
  setTechnicalGuideOpen: (open: boolean) => void;
}

export const useUIStore = create<UIStore>((set) => ({
  isTechnicalGuideOpen: false,
  setTechnicalGuideOpen: (open: boolean) => set({ isTechnicalGuideOpen: open }),
}));
