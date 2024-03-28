import React from 'react'

type BlogArticlePageProps = {
    params: {
        id: string;
    }
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
    const { id } = params;

  return <div>
      <h1>
        This is Blog { id }
      </h1>
      <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
  </div>;
}
