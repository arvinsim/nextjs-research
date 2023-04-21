import React from "react";
import { Helmet } from "react-helmet";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import FacebookLogin from "@greatsumini/react-facebook-login";

function SocialLogin(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Social Login</title>
      </Helmet>
      <h1 className="text-3xl font-bold">Social Login</h1>
      <FacebookLogin
        appId={process.env.NEXT_PUBLIC_FACEBOOK_ID || ""}
        onSuccess={(response) => {
          console.log("Login Success!", response);
        }}
        onFail={(error) => {
          console.log("Login Failed!", error);
        }}
        onProfileSuccess={(response) => {
          console.log("Get Profile Success!", response);
        }}
        style={{
          backgroundColor: "#4267b2",
          color: "#fff",
          fontSize: "16px",
          padding: "12px 24px",
          border: "none",
          borderRadius: "4px",
        }}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  // will be passed to the page component as props
  return {
    props: {},
  };
};

export default SocialLogin;
