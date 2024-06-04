import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Code,
  Image,
} from "@nextui-org/react";

import { CodeBlock } from "react-code-blocks";

export default function Topic({ img_src, title, desc, codesnippet }) {
  console.log(title);
  console.log(desc);
  return (
    <Card className="max-w-[400px] ">
      <CardHeader className="flex gap-3">
        <Image
          alt="language logo"
          height={40}
          radius="sm"
          src={img_src}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md font-semibold">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody className="font-extralight">
        <p>{desc}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        {/* <Code> */}
        <CodeBlock language="javascript" text={codesnippet} />
        {/* </Code> */}
      </CardFooter>
    </Card>
  );
}
