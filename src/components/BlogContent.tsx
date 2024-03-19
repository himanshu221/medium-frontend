interface BlogContentType {
    title: string,
    content: string,
    publishDate: string
}
const intDateFormat = new Intl.DateTimeFormat('default',{
    year: "numeric", month: "long", day: "numeric"
});
export const BlogContent = ({title, content, publishDate }: BlogContentType) => {
    return (
        <div className="text-white bg-neutral-900 p-5 rounded-lg">
            <div className="font-bold text-3xl  md:text-5xl pb-4">
                {title}
            </div>
            <div className="text-zinc-500 pb-10">
                {`Posted on ${intDateFormat.format(new Date(publishDate))}`}
            </div>
            <div className="prose prose-invert text-md md:text-lg">
                {content}
            </div>
        </div>
    )
}