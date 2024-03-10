export const AuthorContentSkeleton = () => {
    return (
        <div className="bg-neutral-900 p-5 rounded-lg shadow-xl animate-pulse">
            <div className="text-2xl md:text-4xl pb-5">
                <div className="h-2.5  rounded-full bg-neutral-700 w-48 mb-4"></div>
            </div>
            <div className="flex items-center">
                <div className="w-7 h-7 rounded-full p-3 mr-2 bg-neutral-700"></div>
                <div className="h-2.5 mr-2 rounded-full bg-neutral-700 w-6 mb-4"></div>
                <div className="h-2.5  rounded-full bg-neutral-700 w-6 mb-4"></div>
            </div>

        </div>
    )
}