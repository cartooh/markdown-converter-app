import TurndownService from 'turndown';
import { gfm } from 'turndown-plugin-gfm';

const turndownService = new TurndownService({
    headingStyle: 'atx',
    codeBlockStyle: 'fenced'
});

turndownService.use(gfm);

export const htmlToMarkdown = (html: string): string => {
  return turndownService.turndown(html);
};