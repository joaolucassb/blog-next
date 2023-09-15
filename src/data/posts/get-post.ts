import { POSTS_URL } from '@/config/app-config';
import { PostData } from '@/domain/posts/post';
import { fetchJson } from '@/utils/fetch-json';
import { markdownToHtml } from '@/utils/markdown-to-html';

export const getPost = async (
  slug: string | string[] | undefined,
): Promise<PostData[]> => {
  const slugString = Array.isArray(slug) ? slug[0] : slug;
  const url = `${POSTS_URL}/?populate=*&filters[slug][$eq]=${slugString}`;
  const jsonPost = await fetchJson<PostData[]>(url);
  const content = await markdownToHtml(jsonPost[0].attributes.content);
  const finalContent = { ...jsonPost[0] };
  finalContent.attributes.content = content;
  return [finalContent];
};
