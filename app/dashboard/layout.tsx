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
          <ul>
            <li>
              <Link href={"/dashboard/"}>Dashboard</Link>
              <Link href={"/dashboard/message"}>Message</Link>
              <Link href={"/dashboard/profile"}>Profile</Link>
            </li>
          </ul>
        </div>
        <div>{children}</div>
      </Container>
    </div>
  );
}

export default DashboardLayout;
