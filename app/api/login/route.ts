import { format } from 'date-fns';

export async function POST(request: Request) {
    const { username, password } = await request.json();

    if (username === 'arthur' && password === 'admin123') {
        const options: ResponseInit = {
            headers: {
                'Set-Cookie': `auth=secret_token; HttpOnly; Path=/;`,
            },
        };
        return new Response('Login successful', options);
    } else {
        return new Response('Invalid username or password', { status: 401 });
    }
}
