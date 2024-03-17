import { AppBar } from "../components/AppBar"

export const CreateBlog = () => {
    return (
        <div className="h-full md:h-screen w-full bg-dot-white/[0.2] px-10 relative bg-neutral-800 flex justify-center overflow-auto">
                <AppBar/>
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>
                <div className="h-screen w-full flex flex-col items-center mt-32">
                    <div className="min-w-96 w-[70%]">
                        <input className=" outline-none p-3 w-full text-xl text-white bg-black rounded-lg" type="text" placeholder="Title" />

                    </div>
                </div>
        </div>
    )
}