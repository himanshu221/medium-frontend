import { useParams } from "react-router-dom"
import { AppBar } from "../components/AppBar"
import { BlogContent } from "../components/BlogContent"
import { useRecoilValueLoadable } from "recoil"
import { blogAtom } from "../store/atoms/blog"
import { AuthorContent } from "../components/AuthorContent"
import toast from "react-hot-toast"
import { BlogContentSkeleton } from "../components/BlogContentSkeleton"
import { AuthorContentSkeleton } from "../components/AuthorContentSkeleton"

export const Blog = () => {
    const { id } = useParams() 

    const blog = useRecoilValueLoadable(blogAtom(id))

    switch (blog.state) {
        case 'hasError': 
            toast.error("Error occured while fetching blogs")
            return null
        case 'loading' :
            return (
                <div className="h-full md:h-screen w-full bg-dot-white/[0.2] px-10 relative bg-neutral-800 flex justify-center overflow-auto">
                        <AppBar/>
                        {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div> */}
                        <div className="flex my-32 w-[95%] md:w-[90%]">
                            <div className="grow text-white bg-neutral-900 p-5 rounded-lg">
                                <BlogContentSkeleton />
                            </div>
                            <div className="ml-8 text-white">
                                <AuthorContentSkeleton />
                            </div>
                        </div>
                </div>
            )
        case 'hasValue':
            return (
                <div className="h-100dvh w-full bg-dot-white/[0.2] px-10 relative bg-neutral-800 flex justify-center overflow-auto">
                        <AppBar/>
                        <div className="flex my-32 w-[95%] md:w-[90%]">
                            <div className="grow">
                                <BlogContent title={blog.getValue().title} content={blog.getValue().content} publishDate={blog.getValue().publishDate} />
                            </div>
                            <div className="ml-8 text-white">
                                <AuthorContent firstname={blog.getValue().author.firstname} lastname={blog.getValue().author.lastname} />
                            </div>
                        </div>
                </div>
            )
    }
}