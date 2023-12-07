"use client";
import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/react";
export default async function Home() {
  return (
    <NextUIProvider>
      <div>
        Hello!
        <Button color="primary">Press me!</Button>
      </div>
    </NextUIProvider>
  );
}
