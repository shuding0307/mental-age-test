import {create} from "zustand";

interface Store {
    resultAge: number;
    age: number;
    userName: string;
    userAge: number;
    setResultAge: (result: number) => void;
    setAge: (newAge: number) => void;
    setUserName: (inputName: string) => void;
    setUserAge: (inputAge: number) => void;
}

const useStore = create<Store>((set) => ({
    resultAge: 0,
    age: 0,
    userName: "익명",
    userAge: 20,
    setAge: (newAge: number) => {set({age: newAge})},
    setResultAge: (result: number) => {set({resultAge: result})},
    setUserName: (inputName: string) => {set({userName: inputName})},
    setUserAge: (inputAge: number) => {set({userAge: inputAge})},
}));

export default useStore;