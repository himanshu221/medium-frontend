import { AppBar } from "../components/AppBar"
import { Editor } from "../components/Editor"

export const CreateBlog = () => {
    return (
        <div className="h-screen w-full bg-dot-white/[0.2] relative bg-neutral-800 flex flex-col items-center overflow-auto py-24">
                <AppBar/>
                <div className="w-[80%] md:w-[60%]">
                    <input className="outline-none p-3 w-full text-xl text-white bg-neutral-900 rounded-lg mb-10" type="text" placeholder="Title" />
                    <Editor />
                </div>
        </div>
    )
}