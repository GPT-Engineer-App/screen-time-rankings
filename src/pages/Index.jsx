import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "user" && password === "password") {
      setIsLoggedIn(true);
    } else {
      alert("Invalid credentials");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Acme Inc</h1>
        <p className="text-lg text-muted-foreground">
          Your one-stop solution for all your needs. Discover our features and get started today!
        </p>
      </header>
      <Separator />
      {isLoggedIn ? (
        <div className="text-center space-y-4">
          <p className="text-lg">Welcome, {username}!</p>
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      ) : (
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
      )}
      <Separator />
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Feature One</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Discover the amazing benefits of our first feature.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature Two</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Explore how our second feature can help you achieve more.</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Feature Three</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Learn about the advantages of our third feature.</p>
          </CardContent>
        </Card>
      </section>
      <Separator />
      <footer className="text-center space-y-4">
        <Button size="lg">Get Started</Button>
        <p className="text-muted-foreground">Join us today and make the most out of our services.</p>
      </footer>
    </div>
  );
};

export default Index;