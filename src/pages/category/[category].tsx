import HomePage from '@/containers/HomePage';
import { countAllPosts } from '@/data/posts/count-all-posts';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticPaths, GetStaticProps } from 'next';

export type CategoryProps = {
  posts: PostData[];
  category: string;
};

export default function Category({ posts, category }: CategoryProps) {
  return <HomePage category={category} posts={posts} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const numberOfPosts = await countAllPosts();
  const posts = await getAllPosts(
    `/?populate=*&pagination[start]=0&pagination[pagesize]=${numberOfPosts}`,
  );

  return {
    paths: posts.map((post) => {
      return {
        params: {
          category: post.attributes.category.data.attributes.name,
        },
      };
    }),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const urlQuery = `/?populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=30&filters[category][name][$containsi]=${ctx.params?.category}`;
  const posts = await getAllPosts(urlQuery);

  return {
    props: { posts, category: ctx.params?.category },
  };
};
