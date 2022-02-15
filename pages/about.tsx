import React from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import styled from "styled-components";

function About(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { message } = props;

  return (
    <div>
      <AboutText>About Page</AboutText>
      <div>{message}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // will be passed to the page component as props
  return {
    props: {
      message: "A message from our sponsors",
    },
  };
};

const AboutText = styled.p`
  font-weight: bold;
`;

export default About;
