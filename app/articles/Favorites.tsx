import { useAtom } from 'jotai'
import { allArticles } from './data'
export default function Favorites() {
    const [articles, setArticles] = useAtom(allArticles)

    return (
        <div>
            <h1>Favorites</h1>
            <div>
                {articles.map((article, index) => (
                    <div key={index}>
                        <h2>{article.title}</h2>
                        <p>{article.description}</p>
                        {article.isViewed ? <p className="text-blue-00">viewed</p> : <p className={"text-red-400"}>not viewed</p>}
                        <button
                            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full px-4 py-2"
                            onClick={() => {
                                const newArticles = [...articles]
                                newArticles[index].isViewed = !article.isViewed
                                setArticles(newArticles)
                            }}
                        >
                            Toggle Viewed
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}