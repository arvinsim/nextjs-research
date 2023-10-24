import React from "react";
import { Heading, Container } from "@radix-ui/themes";
import Link from "next/link";

function DashboardLayout(props: { children: any }) {
  const { children } = props;

  console.log("DashboardLayout");

  return (
    <div className={"bg-gray-800 text-stone-50"}>
      <Container>
        <div>
          <Heading>This is the dashboard page.</Heading>
          <ul className={"list-disc"}>
            <li>
              <Link href={"/dashboard/"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/dashboard/message"}>Message</Link>
            </li>
            <li>
              <Link href={"/dashboard/name"}>Name</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </Container>
    </div>
  );
}

export default DashboardLayout;
