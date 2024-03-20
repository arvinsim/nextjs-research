type MockData = {
    message: string;
    timestamp: string;
};

export async function GET() {
    // Delay for 5 seconds (5000 milliseconds)
    await new Promise(resolve => setTimeout(resolve, 5000));

    // The mock data you want to return
    const mockData: MockData = {
        message: "This is a delayed response",
        timestamp: new Date().toISOString(),
    };

    return Response.json(mockData)
}

