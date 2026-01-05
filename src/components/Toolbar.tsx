import React from 'react';

interface ToolbarProps {
    onCopyMarkdown: () => void;
    onCopyHtml: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onCopyMarkdown, onCopyHtml }) => {
    return (
        <div className="toolbar">
            <button onClick={onCopyMarkdown}>Copy Markdown</button>
            <button onClick={onCopyHtml}>Copy Rich Text</button>
        </div>
    );
};

export default Toolbar;