import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <li>
                    <PostLink title='Hello Next.js' />
                    <PostLink title='Learning Next.js is awesome' />
                    <PostLink title='Deploy apps with Zeit' />
                </li>
            </ul>
            <p>Hello Next.js</p>
        </Layout>
    );
}