import Heading from "./Heading";

const ContactInfo = ( {contact} ) => {
   const { name, email, address} = contact || {};
   const { street, suite, sity, zipecode } = address || {};

   if (!contact) {
      return (
      <Heading tag="h3" text="Empty contact" />
      )
   }
   return (
      <>
         <Heading tag="h3" text={name}/>
         <div>
            <strong>Email:</strong>
            {email}
         </div>
         <div>
            <strong>Address:</strong>
            {`${street}, ${suite}, ${sity}, ${zipecode}`}
         </div>
      </>
   )
}

export default ContactInfo;