import Heading from "./Heading";

const getData = async (id) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
   return await response.json();
}

const PostInfo = async ({ post: { id } }) => {
   const post = await getData(id);
  const { title, body } = post || {};

  if (!post) {
    return <Heading tag="h3" text="Empty post" />
  }

  return (
    <>
      <Heading tag="h3" text={title} />
      <p>{body}</p>
    </>
  );
}

export default PostInfo;