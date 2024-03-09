export const AuthorContent = ({firstname, lastname} : {firstname: string, lastname: string}) => {
    return (
        <div>
            <div>
                Author
            </div>
            <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-neutral-900"></div>
                <div>{firstname}</div>
                <div>{lastname}</div>
            </div>

        </div>
    )
}