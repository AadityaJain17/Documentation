import React from "react";
// import { CodeBlock, dracula } from "react-code-blocks";
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

export default function Topic(props) {
  const { img_src, title, desc, codesnippet } = props;

  console.log(title);
  console.log(desc);
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="language logo"
          height={40}
          radius="sm"
          src={img_src}
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">{title}</p>
        </div>
      </CardHeader>
      <Divider />
      <CardBody>
        <p>{desc}</p>
      </CardBody>
      <Divider />
      <CardFooter>
        <Code>
          <CodeBlock language="javascript" text={codesnippet} />
        </Code>
      </CardFooter>
    </Card>
  );
}
