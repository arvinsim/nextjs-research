import React from "react";
import {Heading, Container, Flex, Box} from "@radix-ui/themes";
import Link from "next/link";

function DashboardLayout({children, users, links}: { children: any, links: any, users: any}) {

  return (
    <div className={"bg-gray-800 text-stone-50 h-screen"}>
      <Container>
        <Box className={'bg-red-600'}>Navbar</Box>
        <Flex direction="row" gap="3">
          <Box className={'bg-blue-600'}>
            <Heading>Dashboard</Heading>
            {links}
            {users}
          </Box>
          <Box width="9" className={'bg-green-600'}>{children}</Box>
        </Flex>
      </Container>
    </div>
  );
}

export default DashboardLayout;
