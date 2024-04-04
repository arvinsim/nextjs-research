import { format } from 'date-fns';
export async function GET() {
    const t = format(new Date(), 'hh:mm aa');

    return Response.json({ message: `Hello, World at ${t}!` });
}
