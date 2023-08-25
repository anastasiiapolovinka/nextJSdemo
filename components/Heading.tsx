import React, { FC } from "react";
import { ElementType } from "react";

interface HeadingProps {
   tag?: ElementType | string
   text: string
}

const Heading: FC<HeadingProps> = ({tag, text}) => {
   const Tag = tag || 'h1';
   return <Tag>{text}</Tag>
}
export default Heading; 