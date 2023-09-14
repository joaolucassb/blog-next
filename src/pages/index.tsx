import HomePage from '@/containers/HomePage';
import { getAllPosts } from '@/data/posts/get-all-posts';
import { PostData } from '@/domain/posts/post';
import { GetStaticProps } from 'next';

export type HomeProps = {
  posts: PostData[];
};

export default function Home({ posts }: HomeProps) {
  return <HomePage posts={posts}></HomePage>;
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = await getAllPosts(
    '/?populate=*&sort=id:desc&pagination[start]=0&pagination[limit]=10',
  );

  return {
    props: { posts },
  };
};
