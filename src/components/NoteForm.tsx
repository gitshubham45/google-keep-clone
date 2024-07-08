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
    const [selectedColor, setSelectedColor] = useState<string>('#ffffff');

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (content.trim()) {
            dispatch(addNote({ title, content, id: Date.now() , color: selectedColor }));
            setTitle('');
            setContent('');
            setIsExpanded(false);
            setSelectedColor('#ffffff');
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

    // handling the click outside event
    const handleClickOutside = (e: MouseEvent) => {
        if (formRef.current && !formRef.current.contains(e.target as Node)) {
            if (content.trim()) {
                dispatch(addNote({ title, content, id: Date.now() , color: selectedColor }));
                setTitle('');
                setContent('');
                setSelectedColor('#ffffff');
            }
            setIsExpanded(false);
        }
    };

    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
    };

    // capturing the outside click event
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [content, title, selectedColor]); // Add dependencies to useEffect

    return (
        <form ref={formRef} onSubmit={handleSubmit} className="note-form" style={{ borderColor: selectedColor }}>
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
                <>
                    <div className="color-picker">
                        <label>
                            <input type="radio" name="note-color" value="#fff8c4" checked={selectedColor === '#fff8c4'} onChange={handleColorChange} />
                            <span className="color-swatch" style={{ backgroundColor: '#fff8c4' }}></span>
                        </label>
                        <label>
                            <input type="radio" name="note-color" value="#ffc4c4" checked={selectedColor === '#ffc4c4'} onChange={handleColorChange} />
                            <span className="color-swatch" style={{ backgroundColor: '#ffc4c4' }}></span>
                        </label>
                        <label>
                            <input type="radio" name="note-color" value="#c4ffca" checked={selectedColor === '#c4ffca'} onChange={handleColorChange} />
                            <span className="color-swatch" style={{ backgroundColor: '#c4ffca' }}></span>
                        </label>
                        <label>
                            <input type="radio" name="note-color" value="#c4e4ff" checked={selectedColor === '#c4e4ff'} onChange={handleColorChange} />
                            <span className="color-swatch" style={{ backgroundColor: '#c4e4ff' }}></span>
                        </label>
                    </div>
                    <button type="submit" className="add-button">
                        <IoMdAddCircle />
                    </button>
                </>

            )}
        </form>
    );
};

export default NoteForm;
