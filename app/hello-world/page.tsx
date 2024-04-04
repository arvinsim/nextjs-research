async function fetchMessage() {
    const response = await fetch("http://localhost:9999/api/hello-world", {
        next: {
            revalidate: 120
        }
    });
    const data = await response.json();
    return data.message;
}
export default async function HelloWorldPage() {
    const message = await fetchMessage()

    return <div>
        Show Message: {message}
    </div>
}
