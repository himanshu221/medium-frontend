import { EditorContent, useEditor } from '@tiptap/react'
import { StarterKit} from '@tiptap/starter-kit'
import { MenuBar } from './EditorMenuBar'
import { useRecoilState } from 'recoil'
import { contentAtom } from '../store/atoms/blog'


export const Editor = () => {
    const [content, setContent] = useRecoilState(contentAtom)

    const editor = useEditor({
        autofocus: true,
        extensions: [StarterKit],
        content: content,
        onUpdate: ({editor}) => {
            setContent(editor.getHTML())
        }
    })
    return (
       <div className='bg-neutral-900  p-5 rounded-lg border'>
            {editor && <MenuBar editor={editor}/>}
            <div className='prose prose-invert mt-3 ml-3 overflow-y-auto'>
                <EditorContent editor={editor} />
            </div>
       </div>
    )
}

