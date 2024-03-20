import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

interface BlogContentType {
    title: string,
    content: string,
    publishDate: string
}
const intDateFormat = new Intl.DateTimeFormat('default',{
    year: "numeric", month: "long", day: "numeric"
});
export const BlogContent = ({title, content, publishDate }: BlogContentType) => {
    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit],
        content: content,
        editable: false
    })
    return (
        <div className="text-white prose prose-invert bg-neutral-900 p-5 pb-10 rounded-lg">
            <div className="font-bold text-3xl  md:text-5xl pb-4">
                {title}
            </div>
            <div className="text-zinc-500 pb-5">
                {`Posted on ${intDateFormat.format(new Date(publishDate))}`}
            </div>
            <div className="overflow-y-auto">
                <EditorContent editor={editor} />
            </div>
        </div>
    )
}