"use client";
import React from "react";

export default function NotWorkingPage() {
  throw new Error("This page is not working");

  return (
    <div>
        You should not be seeing this message
    </div>
  );
}
