import { create } from "zustand";

const useDashboardStore = create((set) => ({
  messages: [],
  message: "",
  setMessages: (data) => set({ messages: data }),
  setMessage: (data) => set({ message: data }),
}));

export default useDashboardStore;
