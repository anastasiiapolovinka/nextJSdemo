import Head from "next/head";
import Heading from "../../components/Heading";
import Link from "next/link";

const getData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
 }

const Posts = async () => {
    const posts = await getData()
    return (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <Heading text="Posts list:"/>
        <ul>
            {posts && posts.map(({ id, title }) => (
                <li key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                </li>)
            )} 
        </ul>
    </>
    );
 };
 
 export default Posts;