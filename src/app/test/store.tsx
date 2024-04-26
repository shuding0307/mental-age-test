import {create} from "zustand";

interface Store {
    resultAge: number;
    age: number;
    userName: string;
    setResultAge: (result: number) => void;
    setAge: (newAge: number) => void;
    setUserName: (name: string) => void;
}

const useStore = create<Store>((set) => ({
    resultAge: 0,
    age: 0,
    userName: "익명",
    setAge: (newAge: number) => {set({age: newAge})},
    setResultAge: (result: number) => {set({resultAge: result})},
    setUserName: (name: string) => {set({userName: name})},
}));

export default useStore;