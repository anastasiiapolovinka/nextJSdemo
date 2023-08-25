'use client'
import { useRouter } from "next/navigation";
import Link from "next/link"
import styles from "./NavBar.module.scss"
import Image from "next/image";


const navigation = [
   {id: 1, title: "Home", path: "/"},
   {id: 2, title: "Posts", path: "/posts"},
   {id: 3, title: "Contacts", path: "/contacts"}
];
const NavBar = () => {
   const {pathname} = useRouter();
   return (
      <nav className={styles.nav}>
         <div className={styles.logo}>
            <Image src="/logo.png" width={80} height={80} alt="A.Polovinka"/>
         </div>
         <div className={styles.link}>
            {navigation.map(({id, title, path}) => (
               <Link key={id} href={path} className={pathname === path ? styles.active : null}>{title}</Link>
            ))}
         </div>
      </nav>
   )
}

export default NavBar;