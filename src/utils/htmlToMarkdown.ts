import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

// Use GFM plugin for tables and other GFM features
turndownService.use(gfm);

// Custom table rule to handle complex tables (like from Excel) better
turndownService.addRule('table', {
    filter: 'table',
    replacement: function (_content, node) {
        const element = node as HTMLElement;
        const rows = Array.from(element.querySelectorAll('tr'));
        if (rows.length === 0) return '';

        // Helper to convert cell content to markdown while preserving inline formatting
        const cellToMarkdown = (cell: Element) => {
            let content = turndownService.turndown(cell.innerHTML);
            // Remove newlines to ensure valid markdown table cell
            return (content || '').replace(/[\r\n]+/g, ' ').trim();
        };

        // Header processing (Always treat first row as header)
        const header = rows[0];
        let headerRow = '';
        const headerCells = header.querySelectorAll('td, th');
        for (const cell of Array.from(headerCells)) {
            headerRow += '| ' + cellToMarkdown(cell) + ' ';
        }
        let result = '\n' + headerRow + '|\n';

        // Separator processing
        // Use 2nd row for column count if available, otherwise header row
        const secondRow = rows.length > 1 ? rows[1] : rows[0];
        const numColumns = secondRow.querySelectorAll('td, th').length;
        result += '| --- '.repeat(numColumns) + '|\n';

        // Body processing
        for (const tr of rows.slice(1)) {
            let row = '';
            for (const td of Array.from(tr.querySelectorAll('td, th'))) {
                row += '| ' + cellToMarkdown(td) + ' ';
            }
            result += row + '|\n';
        }
        return result + '\n';
    }
});

export const htmlToMarkdown = (html: string): string => {
    return turndownService.turndown(html);
};