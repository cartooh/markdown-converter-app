import React, { useRef } from 'react';

interface MarkdownInputProps {
    value: string;
    onChange: (value: string) => void;
    style?: React.CSSProperties;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange, style }) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        onChange(event.target.value);
    };

    const insertText = (before: string, after: string = '') => {
        const textarea = textareaRef.current;
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const text = textarea.value;
        const selectedText = text.substring(start, end);

        const newText = text.substring(0, start) + before + selectedText + after + text.substring(end);
        onChange(newText);

        // Restore selection/cursor position
        setTimeout(() => {
            textarea.focus();
            textarea.setSelectionRange(start + before.length, end + before.length);
        }, 0);
    };

    return (
        <div className="markdown-input-container" style={style}>
            <div className="panel-header">
                <h3>Markdown Input</h3>
                <div className="editor-toolbar">
                    <button onClick={() => insertText('**', '**')} title="Bold">B</button>
                    <button onClick={() => insertText('*', '*')} title="Italic">I</button>
                    <button onClick={() => insertText('~~', '~~')} title="Strikethrough">S</button>
                    <button onClick={() => insertText('# ')} title="Heading 1">H1</button>
                    <button onClick={() => insertText('## ')} title="Heading 2">H2</button>
                    <button onClick={() => insertText('- ')} title="Unordered List">UL</button>
                    <button onClick={() => insertText('1. ')} title="Ordered List">OL</button>
                    <button onClick={() => insertText('> ')} title="Quote">""</button>
                    <button onClick={() => insertText('[', '](url)')} title="Link">Link</button>
                    <button onClick={() => insertText('```\n', '\n```')} title="Code Block">Code</button>
                    <button onClick={() => insertText('| Header | Header |\n| --- | --- |\n| Cell | Cell |')} title="Table">Table</button>
                </div>
            </div>
            <textarea
                ref={textareaRef}
                className="markdown-input"
                value={value}
                onChange={handleChange}
                placeholder="Enter Markdown text here..."
            />
        </div>
    );
};

export default MarkdownInput;