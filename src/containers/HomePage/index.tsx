import { PostData } from '@/domain/posts/post';
import { Container } from './styles';

export type HomePageProps = {
  posts: PostData[];
};

export default function HomePage({ posts }: HomePageProps) {
  return (
    <Container>
      {posts.map((post) => (
        <h2 key={post.attributes.slug}>{post.attributes.title}</h2>
      ))}
    </Container>
  );
}
