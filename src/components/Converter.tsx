import React, { useState, useEffect } from 'react';
import MarkdownInput from './MarkdownInput';
import RichTextOutput from './RichTextOutput';
import Toolbar from './Toolbar';
import { markdownToHtml } from '../utils/markdownToHtml';
import { htmlToMarkdown } from '../utils/htmlToMarkdown';

const Converter: React.FC = () => {
    const [markdown, setMarkdown] = useState<string>('');
    const [html, setHtml] = useState<string>('');
    const [lastEdited, setLastEdited] = useState<'markdown' | 'html'>('markdown');
    const [isFullWidth, setIsFullWidth] = useState<boolean>(false);
    const [leftPanelWidth, setLeftPanelWidth] = useState<number>(50); // Percentage
    const containerRef = React.useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (lastEdited === 'markdown') {
            const convert = async () => {
                const convertedHtml = await markdownToHtml(markdown);
                setHtml(convertedHtml);
            };
            convert();
        }
    }, [markdown, lastEdited]);

    useEffect(() => {
        if (lastEdited === 'html') {
            const convertedMarkdown = htmlToMarkdown(html);
            setMarkdown(convertedMarkdown);
        }
    }, [html, lastEdited]);

    const handleMouseDown = (e: React.MouseEvent) => {
        e.preventDefault();
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent) => {
        if (containerRef.current) {
            const containerRect = containerRef.current.getBoundingClientRect();
            const newLeftWidth = ((e.clientX - containerRect.left) / containerRect.width) * 100;
            if (newLeftWidth > 10 && newLeftWidth < 90) {
                setLeftPanelWidth(newLeftWidth);
            }
        }
    };

    const handleMouseUp = () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
    };

    const handleMarkdownChange = (newMarkdown: string) => {
        setLastEdited('markdown');
        setMarkdown(newMarkdown);
    };

    const handleHtmlChange = (newHtml: string) => {
        setLastEdited('html');
        setHtml(newHtml);
    };

    const handleCopyMarkdown = () => {
        navigator.clipboard.writeText(markdown);
        alert('Markdown copied to clipboard!');
    };

    const handleCopyHtml = () => {
        const item = new ClipboardItem({
            'text/html': new Blob([html], { type: 'text/html' }),
            'text/plain': new Blob([htmlToMarkdown(html)], { type: 'text/plain' })
        });
        navigator.clipboard.write([item]).then(() => {
            alert('Rich Text copied to clipboard!');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            alert('Failed to copy rich text.');
        });
    };

    return (
        <div className={`converter ${isFullWidth ? 'full-width' : 'constrained-width'}`}>
            <Toolbar 
                onCopyMarkdown={handleCopyMarkdown} 
                onCopyHtml={handleCopyHtml}
                isFullWidth={isFullWidth}
                onToggleFullWidth={() => setIsFullWidth(!isFullWidth)}
            />
            <div className="panels-container" ref={containerRef}>
                <MarkdownInput 
                    value={markdown} 
                    onChange={handleMarkdownChange} 
                    style={{ width: `${leftPanelWidth}%`, flex: 'none' }}
                />
                <div className="resizer" onMouseDown={handleMouseDown} />
                <RichTextOutput 
                    value={html} 
                    onChange={handleHtmlChange} 
                    style={{ width: `${100 - leftPanelWidth}%`, flex: 'none' }}
                />
            </div>
        </div>
    );
};

export default Converter;