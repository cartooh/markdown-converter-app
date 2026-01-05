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
            <div className="toolbar-spacer"></div>
            <div className="toolbar-center">
                <button onClick={onCopyMarkdown}>Copy Markdown</button>
                <button onClick={onCopyHtml}>Copy Rich Text</button>
            </div>
            <div className="toolbar-right">
                <button 
                    onClick={onToggleFullWidth} 
                    className="icon-button" 
                    title={isFullWidth ? 'Limit Width' : 'Full Width'}
                >
                    {isFullWidth ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M4 12h6"/>
                            <path d="M7 9l3 3-3 3"/>
                            <path d="M20 12h-6"/>
                            <path d="M17 9l-3 3 3 3"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 12H4"/>
                            <path d="M7 9l-3 3 3 3"/>
                            <path d="M14 12h6"/>
                            <path d="M17 9l3 3-3 3"/>
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default Toolbar;