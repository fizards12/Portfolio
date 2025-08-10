import { create } from "zustand";
import createAppStates from "./app";

export const useStore = create((...a)=>({
    ...createAppStates(...a),
}))