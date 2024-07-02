import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "test" && password === "test") {
      onLogin(username);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Login to Acme Inc</h1>
        <p className="text-lg text-muted-foreground">
          Please enter your credentials to login.
        </p>
      </header>
      <Separator />
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
      <Separator />
      <footer className="text-center space-y-4">
        <p className="text-muted-foreground">Test credentials: Username: test, Password: test</p>
      </footer>
    </div>
  );
};

export default Login;