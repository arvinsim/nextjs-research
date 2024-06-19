import { format } from "date-fns";
import { randomBytes } from "crypto";
import { NextRequest, NextResponse } from "next/server";

const accounts = [{ username: "arthur", password: "admin123" }];

export function generateCsrfToken() {
  return randomBytes(16).toString("base64");
}

function isValidAccount(username: string, password: string) {
  return accounts.some(
    (account) => account.username === username && account.password === password
  );
}

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();

  if (isValidAccount(username, password)) {
    const csrfToken = generateCsrfToken();
    const options: ResponseInit = {
      headers: {
        "Set-Cookie": [
          `auth=spamandeggs; HttpOnly; Path=/;`,
          `anotherCookie=anotherValue; HttpOnly; Path=/;`,
        ].join("; "), // Convert array to string,
      },
    };
    return new NextResponse("Login successful", options);
  } else {
    return new NextResponse("Invalid username or password", { status: 401 });
  }
}
