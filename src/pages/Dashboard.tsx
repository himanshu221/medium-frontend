import { useRecoilValueLoadable } from "recoil";
import { AppBar } from "../components/AppBar"
import { HoverEffect } from "../components/HoverEffect";
import { blogsAtom } from "../store/atoms/blog";
import toast from "react-hot-toast";
import { HoverEffectSkeleton } from "../components/HoverEffectSkeleton";


export const Dashboard = () => {
    const blogs = useRecoilValueLoadable(blogsAtom)
    
    switch (blogs.state) {
        case 'hasError': 
            toast.error("Error occured while fetching blogs")
            return null
        case 'hasValue':
            return <div className="h-full w-full bg-dot-white/[0.2] relative bg-neutral-800 flex flex-col items-center justify-center overflow-auto">
                    <AppBar/>
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
                    <div className="my-20  w-[80%] md:w-[60%]">
                        <HoverEffect items={blogs.getValue()} />
                    </div>
                </div>
        case 'loading':
            return <div className="h-full w-full bg-dot-white/[0.2] relative bg-neutral-800 flex flex-col items-center justify-center overflow-auto">
                    <AppBar/>
                    <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black  [mask-image:radial-gradient(ellipse_at_center,transparent_40%,black)]"></div>
                    <div className="my-20  w-[80%] md:w-[60%]">
                        <HoverEffectSkeleton/>
                    </div>
                </div>
    }


}