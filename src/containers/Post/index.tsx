import Head from 'next/head';
import { Comments } from '@/Comments';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Heading } from '@/components/Heading';
import { MainContainer } from '@/components/MainContainer';
import { PostContainer } from '@/components/PostContainer';
import { PostCover } from '@/components/PostCover';
import { PostDetails } from '@/components/PostDetails';
import { PostData } from '@/domain/posts/post';
import { removeHtml } from '@/utils/remove-html';
import { SITE_NAME } from '@/config/app-config';

// myblog-AB5nMhtv1J.disqus.com

export type PostProps = {
  post: PostData;
};

export const Post = ({ post }: PostProps) => {
  const postTitle = `${post.attributes.title} - ${SITE_NAME}`;
  return (
    <>
      <Head>
        <title>{postTitle}</title>
        <meta
          name="description"
          content={removeHtml(post.attributes.content).slice(0, 150)}
        />
      </Head>
      <Header />
      <MainContainer>
        <Heading>{post.attributes.title}</Heading>
        <PostCover
          coverUrl={post.attributes.cover.data
            .map((element) => element.attributes.formats.large.url)
            .toString()}
          alt={post.attributes.title}
        />
        <PostDetails
          author={post.attributes.author.data.attributes.name}
          category={post.attributes.category.data.attributes.name}
          date={post.attributes.createdAt}
        />
        <PostContainer content={post.attributes.content} />
        <Comments title={post.attributes.title} slug={post.attributes.slug} />
      </MainContainer>
      <Footer />
    </>
  );
};
