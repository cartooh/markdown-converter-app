import { marked } from 'marked';
import DOMPurify from 'dompurify';

// Configure marked options for GFM support
marked.use({
  gfm: true,
  breaks: true, // Enable line breaks
});

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const rawHtml = await marked.parse(markdown);
  return DOMPurify.sanitize(rawHtml);
};