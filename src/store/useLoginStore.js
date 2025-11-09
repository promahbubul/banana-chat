import { create } from "zustand";

const useLoginStore = create((set) => ({
  isChecked: false,
  setIsChecked: (data) => set({ isChecked: data }),
}));

export default useLoginStore;
