import React from "react";

interface NamePageProps {
  params: { name: string };
}

function NamePage(props: NamePageProps) {
  const { params } = props;

  return <div>Hi, my name is {params.name}</div>;
}

export default NamePage;
