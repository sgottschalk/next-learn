import Layout from '../components/MyLayout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        {/*href is the page of the page in the pages folder. as is the url to show in the address bar*/}
        <Link href='/p/[id]' as={`p/${props.id}`}>
            <a>{props.id}</a>
        </Link>
    </li>
);

export default function Blog() {
    return (
        <Layout>
            <h1>My Blog</h1>
            <ul>
                <li>
                    <PostLink id='hello-nextjs' />
                    <PostLink id='learn-nextjs' />
                    <PostLink id='deploy-nextjs' />
                </li>
            </ul>
            <p>Hello Next.js</p>
        </Layout>
    );
}