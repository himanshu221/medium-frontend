import { atom, selector } from "recoil";

export const blogsAtom = atom({
    key: "blogsAtom",
    default: selector({
        key: "blogsAtomSelector",
        get: () => {
            
        }
    })
})