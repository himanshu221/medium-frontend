import { atom, selector, selectorFamily } from "recoil";
import { backend_host } from "../../config";
import axios from 'axios'

interface blogsType {
    id: number,
    title: string,
    content: string,
    publishDate: string,
    author: {
        firstname: string,
        lastname: string
    }
}

export const blogsAtom = atom<blogsType[]>({
    key: "blogsAtom",
    default: selector({
        key: "blogsAtomSelector",
        get: async () => {
            const resp = await axios.get(`https://${backend_host}/api/v1/blog/bulk`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            return resp.data.blogList
        }

    })
})

export const blogAtom = selectorFamily<blogsType,string|undefined>({
    key: "blogAtomSelector",
    get: (id) => async () => {
        const resp = await axios.get(`https://${backend_host}/api/v1/blog/${id}`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        return resp.data.blog
    }
})

export const contentAtom = atom({
    key: "contentAtom",
    default: ""
})

export const blogTitleAtom = atom({
    key: "blogTitleAtom",
    default: ""
})