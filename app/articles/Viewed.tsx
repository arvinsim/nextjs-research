import {useAtom} from "jotai";
import {viewedArticles} from "@/articles/data";

export default function Viewed() {
    const [articles, _] = useAtom(viewedArticles)

    return (
        <div>
            <h1>Viewed</h1>
            <div>
                {articles.map((article, index) => (
                    <div key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}