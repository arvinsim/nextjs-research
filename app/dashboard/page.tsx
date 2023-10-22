import "../../styles/globals.css";

import React from "react";
import { Heading, Theme, Container } from "@radix-ui/themes";

function DashboardLayout() {
  return (
    <Theme>
      <div className={"bg-gray-800 text-stone-50"}>
        <Container>
          <Heading>Dashboard</Heading>
        </Container>
      </div>
    </Theme>
  );
}

export default DashboardLayout;
