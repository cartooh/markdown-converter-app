import React, { useEffect, useRef } from 'react';

interface RichTextOutputProps {
    value: string;
    onChange: (value: string) => void;
    style?: React.CSSProperties;
}

const RichTextOutput: React.FC<RichTextOutputProps> = ({ value, onChange, style }) => {
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

    const execCommand = (command: string, value: string | undefined = undefined) => {
        document.execCommand(command, false, value);
        if (contentEditableRef.current) {
            onChange(contentEditableRef.current.innerHTML);
        }
    };

    return (
        <div className="rich-text-output-container" style={style}>
            <div className="panel-header">
                <h3>Rich Text Output (Editable)</h3>
                <div className="editor-toolbar">
                    <button onClick={() => execCommand('bold')} title="Bold">B</button>
                    <button onClick={() => execCommand('italic')} title="Italic">I</button>
                    <button onClick={() => execCommand('strikeThrough')} title="Strikethrough">S</button>
                    <button onClick={() => execCommand('formatBlock', 'H1')} title="Heading 1">H1</button>
                    <button onClick={() => execCommand('formatBlock', 'H2')} title="Heading 2">H2</button>
                    <button onClick={() => execCommand('insertUnorderedList')} title="Unordered List">UL</button>
                    <button onClick={() => execCommand('insertOrderedList')} title="Ordered List">OL</button>
                    <button onClick={() => execCommand('formatBlock', 'BLOCKQUOTE')} title="Quote">""</button>
                    <button onClick={() => {
                        const url = prompt('Enter link URL:');
                        if (url) execCommand('createLink', url);
                    }} title="Link">Link</button>
                    <button onClick={() => execCommand('insertHorizontalRule')} title="Horizontal Rule">HR</button>
                    <button onClick={() => execCommand('insertHTML', `
                        <table>
                            <thead>
                                <tr><th>Header 1</th><th>Header 2</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Cell 1</td><td>Cell 2</td></tr>
                                <tr><td>Cell 3</td><td>Cell 4</td></tr>
                            </tbody>
                        </table>
                    `)} title="Insert Table">Table</button>
                </div>
            </div>
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