import React from 'react';
import { SlSocialYoutube, SlSocialInstagram, SlSocialLinkedin, SlSocialVkontakte, SlSocialTwitter } from 'react-icons/sl';
import styles from "./Socials.module.scss";

const socialMenu = {
   youtube: SlSocialYoutube,
   instagram: SlSocialInstagram,
   linkedin: SlSocialLinkedin,
   vk: SlSocialVkontakte,
   twitter: SlSocialTwitter
}

const Socials = ({ socials }) => {

  if (!socials) {
    return null;
  }

  return (
    <ul className={styles.socials}>
      {socials && socials.map(({ id, icon, path }) => {
         const Icon = socialMenu[icon]
         return (
            <li key={id}>
               <a href={path} target="_blank" rel="noopener noreferrer">
                  <Icon />
               </a>
            </li>
         )
      })}
    </ul>
  );
}

export default Socials;