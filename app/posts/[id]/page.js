import Head from "next/head";
import PostInfo from "../../../components/PostInfo";

const getData = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   return await response.json();
}

export async function generateStaticParams() {
   const data = await getData();
   return data.map(({ id }) => ({
      id: id.toString()
   }));
}


const Post = ({ params: post }) => {
   return(
      <>
         <Head>
            <title>Contact page</title>
         </Head>
         <PostInfo post={post}/>
      </>
   )
};

export default Post;