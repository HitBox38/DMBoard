import { create } from "zustand";
import { State } from "../interfaces/state";

export const useStore = create<State>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
}));
