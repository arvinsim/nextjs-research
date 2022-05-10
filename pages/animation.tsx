import React from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Chevron from "../components/Chevron";

function Animation(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div>
      <h1>Animation Test with Chevron</h1>
      <Chevron />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // will be passed to the page component as props
  return {
    props: {},
  };
};

export default Animation;
