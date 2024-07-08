import React, { useState, ChangeEvent, FormEvent, useRef, useEffect } from 'react';
import { useAppDispatch } from '../hooks';
import { addNote } from '../redux/actions';
import { IoMdAddCircle } from "react-icons/io";

const NoteForm: React.FC = () => {
    const [title, setTitle] = useState<string>('');
    const [content, setContent] = useState<string>('');
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const dispatch = useAppDispatch();
    const formRef = useRef<HTMLFormElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content.trim()) {
            dispatch(addNote({ title, content, id: Date.now() }));
            setTitle('');
            setContent('');
            setIsExpanded(false);
        }
    };

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setContent(e.target.value);
    };

    const handleClickOutside = (e: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            if (content.trim()) {
                dispatch(addNote({ title, content, id: Date.now() }));
                setTitle('');
                setContent('');
            }
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [content, title]); // Add dependencies to useEffect

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="note-form">
            {isExpanded && (
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={handleTitleChange}
                    className="note-title"
                />
            )}
            <textarea
                placeholder={isExpanded ? "Take a note..." : "Take a Note..."}
                value={content}
                onChange={handleContentChange}
                onClick={handleExpand}
                required
                className="note-content"
            ></textarea>
            {isExpanded && (
                <button type="submit" className="add-button">
                    <IoMdAddCircle />
                </button>
            )}
        </form>
    );
};

export default NoteForm;
