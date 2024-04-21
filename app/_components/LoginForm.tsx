'use client'
import React from "react";
import { redirect } from 'next/navigation'
import { log } from "console";

function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    let redirectPath: string | null = null; 
    try {
      const data = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      console.log('data:', data)
      console.log('data.status:', data.status)

      if (data.status !== 401) {
        redirectPath = '/profile'
      } else {
        alert('Invalid username or password')
      }
    } catch (error) {
        alert('There was an error while trying to log in')
    } finally {
        if (redirectPath) {
            redirect(redirectPath)
        }
    }
  };

return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <br />
            <input
                type="text"
                id="username"
                name="username"
                onChange={handleUsernameChange}
                className="border-2 border-black"
            />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
                type="password"
                id="password"
                name="password"
                onChange={handlePasswordChange}
                className="border-2 border-black"
            />
            <button type="submit" className={"bg-blue-600 text-amber-100 rounded"}>
                Log In
            </button>
        </form>
);
}

export default LoginForm;
