import React from 'react';

interface MarkdownInputProps {
    value: string;
    onChange: (value: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    return (
        <div className="markdown-input-container">
            <h3>Markdown Input</h3>
            <textarea
                className="markdown-input"
                value={value}
                onChange={handleChange}
                placeholder="Enter Markdown text here..."
            />
        </div>
    );
};

export default MarkdownInput;