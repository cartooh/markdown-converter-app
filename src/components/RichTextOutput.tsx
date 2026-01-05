import React, { useEffect, useRef } from 'react';

interface RichTextOutputProps {
    value: string;
    onChange: (value: string) => void;
}

const RichTextOutput: React.FC<RichTextOutputProps> = ({ value, onChange }) => {
    const contentEditableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (contentEditableRef.current && contentEditableRef.current.innerHTML !== value) {
             if (document.activeElement !== contentEditableRef.current) {
                 contentEditableRef.current.innerHTML = value;
             }
        }
    }, [value]);

    const handleInput = () => {
        if (contentEditableRef.current) {
            onChange(contentEditableRef.current.innerHTML);
        }
    };

    return (
        <div className="rich-text-output-container">
            <h3>Rich Text Output (Editable)</h3>
            <div
                className="rich-text-output"
                contentEditable
                ref={contentEditableRef}
                onInput={handleInput}
            />
        </div>
    );
};

export default RichTextOutput;