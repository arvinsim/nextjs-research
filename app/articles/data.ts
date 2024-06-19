import { atom } from "jotai";

type Article = {
  title: string;
  slug: string;
  description: string;
  content: string;
  isViewed: boolean;
};

const articles: Article[] = [];
for (let i = 0; i < 10; i++) {
  const article = {
    title: `Article Title ${i + 1}`,
    slug: `article-title-${i + 1}`,
    description: `This is the description for Article Title ${i + 1}`,
    content: `This is the content for Article Title ${i + 1}`,
    isViewed: false,
  };
  articles.push(article);
}

export const baseArticles = atom<Article[]>(articles);

export const allArticles = atom(
  (get) => get(baseArticles),
  (get, set, newValue) => set(baseArticles, newValue) // Update the base atom
);

export const viewedArticles = atom((get) =>
  get(allArticles).filter((article) => article.isViewed)
);
