import Head from "next/head";
import ContactInfo from "../../../components/Contactinfo";


const getData = async ( id ) => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, { cache: 'no-store' });
   return await response.json();
}

const Contact = async ({ params: { id }}) => {
   const user = await getData(id)
   return (
   <>
      <Head>
         <title>Contacts</title>
      </Head>
      <ContactInfo contact={user} />
   </>
   )
};
  export default Contact;