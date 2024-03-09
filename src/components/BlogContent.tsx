interface BlogContentType {
    title: string,
    content: string,
    publishDate: string
}

export const BlogContent = ({title, content, publishDate }: BlogContentType) => {
    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                {`Posted on ${publishDate}`}
            </div>
            <div>
                {content}
            </div>
        </div>
    )
}