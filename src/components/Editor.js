import React from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import Document from '@tiptap/extension-document'
import Paragraph from '@tiptap/extension-paragraph'
import Text from '@tiptap/extension-text'
import ListItem from '@tiptap/extension-list-item'

import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import BulletList from '@tiptap/extension-bullet-list'
import OrderedList from '@tiptap/extension-ordered-list'
import History from '@tiptap/extension-history'
import '../styling/editor.css'


const Editor = () => {

    const editor = useEditor({
        extensions: [
            Document,
            Paragraph,
            Text,
            Bold,
            Italic,
            Underline,
            ListItem,
            BulletList,
            OrderedList,
            History,
        ],
        content: `<p>start here...</p>`
    })

    if (!editor) {
        return null
    }

    return (
        <div className='main-editor'>
            <div className="toolbar">

                {/* bold button */}
                <button onClick={() => { editor.chain().focus().toggleBold().run() }}
                    className={editor.isActive('bold') ? 'is-active editor-btn' : 'editor-btn'}>Bold</button>

                {/* Italic buttton */}
                <button onClick={() => { editor.chain().focus().toggleItalic().run() }}
                    className={editor.isActive('italic') ? 'is-active editor-btn' : 'editor-btn'}>Italic</button>

                {/* Underline button */}
                <button onClick={() => { editor.chain().focus().toggleUnderline().run() }}
                    className={editor.isActive('underline') ? 'is-active editor-btn' : 'editor-btn'}>Underline</button>

                {/* list items button */}
                <button
                    onClick={() => editor.chain().focus().toggleBulletList().run()}
                    className={editor.isActive('bulletList') ? 'is-active editor-btn' : 'editor-btn'}
                >
                    Bullet List
                </button>
                <button
                    onClick={() => editor.chain().focus().toggleOrderedList().run()}
                    className={editor.isActive('orderedList') ? 'is-active editor-btn' : 'editor-btn'}
                >
                    Ordered List
                </button>

                {/* undo redo button */}
                <button
                    onClick={() => editor.chain().focus().undo().run()}
                    className={editor.isActive('undo') ? 'is-active editor-btn' : 'editor-btn'}
                >
                    undo
                </button>
                <button
                    onClick={() => editor.chain().focus().redo().run()}
                    className={editor.isActive('redo') ? 'is-active editor-btn' : 'editor-btn'}
                >
                    redo
                </button>
            </div>

            <div className="writting-area">
                <EditorContent editor={editor} className="default-editor" />
                <div className="text-count">

                </div>
            </div>

        </div>
    )
}

export default Editor