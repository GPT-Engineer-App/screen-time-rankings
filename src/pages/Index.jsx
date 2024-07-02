import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-8">
      <header className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Welcome to Acme Inc</h1>
        <p className="text-lg text-muted-foreground">
          Your one-stop solution for all your needs. Discover our features and get started today!
        </p>
      </header>
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