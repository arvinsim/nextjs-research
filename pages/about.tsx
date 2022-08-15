import React from "react";
import type { GetServerSideProps, InferGetServerSidePropsType } from "next";
import {getRandomlyGeneratedNumbers, getSum } from "../utilities";

function About(props: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { title, description } = props;

  return (
    <div>
      <div>About Page</div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const sum = getSum(getRandomlyGeneratedNumbers())

  // will be passed to the page component as props
  return {
    props: {
      title: "This is the about page title",
      sum,
    },
  };
};

export default About;
