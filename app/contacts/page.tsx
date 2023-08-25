import Heading from "../../components/Heading";
import Head from "next/head";
import Link from "next/link";

const getData = async () => {
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   return await response.json();
}


const Contacts = async () => {
   const contacts = await getData()
   return (
   <>
      <Head>
         <title>Contacts</title>
      </Head>
      <Heading text="Contacts list:"/>
      <ul>
         {contacts && contacts.map(({id, name, email}) => (
            <li key={id}><Link href={`/contacts/${id}`}>{name}</Link></li>
         ))}
      </ul>
   </>
   )
};
export default Contacts;