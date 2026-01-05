import React from 'react';

interface ToolbarProps {
    onCopyMarkdown: () => void;
    onCopyHtml: () => void;
    isFullWidth: boolean;
    onToggleFullWidth: () => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ onCopyMarkdown, onCopyHtml, isFullWidth, onToggleFullWidth }) => {
    return (
        <div className="toolbar">
            <div className="toolbar-group">
                <button onClick={onCopyMarkdown}>Copy Markdown</button>
                <button onClick={onCopyHtml}>Copy Rich Text</button>
            </div>
            <div className="toolbar-group">
                <button onClick={onToggleFullWidth}>
                    {isFullWidth ? 'Limit Width' : 'Full Width'}
                </button>
            </div>
        </div>
    );
};

export default Toolbar;