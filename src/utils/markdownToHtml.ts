import { marked } from 'marked';
import DOMPurify from 'dompurify';

export const markdownToHtml = async (markdown: string): Promise<string> => {
  const rawHtml = await marked.parse(markdown);
  return DOMPurify.sanitize(rawHtml);
};