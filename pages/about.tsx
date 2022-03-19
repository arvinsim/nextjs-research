import React from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";

function About(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { message } = props;

  return (
    <div>
      <div>About Page</div>
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

export default About;
