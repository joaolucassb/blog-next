import { remark } from 'remark';
import remarkhtml from 'remark-html';

export const markdownToHtml = async (content: string): Promise<string> => {
  const data = await remark().use(remarkhtml).process(content);
  return String(data.value);
};
