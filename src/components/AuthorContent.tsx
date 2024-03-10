export const AuthorContent = ({firstname, lastname} : {firstname: string, lastname: string}) => {
    return (
        <div className="bg-neutral-900 p-5 rounded-lg shadow-xl">
            <div className="text-2xl md:text-4xl pb-5">
                Author
            </div>
            <div className="flex items-center">
                <div className="w-5 h-5 p-4 mr-4 text-black text-lg md:text-xl flex justify-center items-center bg-white rounded-full ">{firstname.toUpperCase()[0]}</div>
                <div className="tex-lg md:text-xl mr-2">{firstname}</div>
                <div className="text-lg md:text-xl">{lastname}</div>
            </div>

        </div>
    )
}