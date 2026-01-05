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
        <div className="converter">
            <Toolbar onCopyMarkdown={handleCopyMarkdown} onCopyHtml={handleCopyHtml} />
            <div className="panels-container">
                <MarkdownInput value={markdown} onChange={handleMarkdownChange} />
                <RichTextOutput value={html} onChange={handleHtmlChange} />
            </div>
        </div>
    );
};

export default Converter;