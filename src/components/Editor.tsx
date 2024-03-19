import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit} from '@tiptap/starter-kit'
import { useState } from 'react'
import { MenuBar } from './EditorMenuBar'


export const Editor = () => {
    const [content, setContent] = useState("")

    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit],
        content: content,
        onUpdate: ({editor}) => {
            setContent(editor.getHTML())
        }
    })
    return (
       <div className='bg-neutral-900 p-3 rounded-lg'>
            {editor && <MenuBar editor={editor}/>}
            <div className='prose lg:prose-xl mt-3 mx-5 overflow-auto'>
                <EditorContent editor={editor} />
            </div>
       </div>
    )
}

