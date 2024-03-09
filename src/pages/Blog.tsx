import { useParams } from "react-router-dom"
import { AppBar } from "../components/AppBar"
import { BlogContent } from "../components/BlogContent"
import { useRecoilValueLoadable } from "recoil"
import { blogAtom } from "../store/atoms/blog"
import { AuthorContent } from "../components/AuthorContent"
import toast from "react-hot-toast"

export const Blog = () => {
    const { id } = useParams() 

    const blog = useRecoilValueLoadable(blogAtom(id))

    switch (blog.state) {
        case 'hasError': 
            toast.error("Error occured while fetching blogs")
            return null
        case 'hasValue':
            return (
                <div className="h-full w-full bg-dot-white/[0.2] relative bg-neutral-800 flex flex-col items-center justify-center overflow-auto">
                        <AppBar/>
                        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                        <div className="flex my-20  w-[95%] md:w-[90%]">
                            <div className="w-[60%]">
                                <BlogContent title={blog.getValue().title} content={blog.getValue().content} publishDate={blog.getValue().publishDate} />
                            </div>
                            <div className="w-full">
                                <AuthorContent firstname={blog.getValue().author.firstname} lastname={blog.getValue().author.lastname} />
                            </div>
                        </div>
                </div>
            )
    }
}