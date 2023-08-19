"use client"
import React from 'react'
import Scene from "@/components/3D/Scene";
import Footer from "@/components/Footer";

export default function Home() {
    return (
      <main className="flex h-screen flex-col items-center justify-between p-0">
        <Scene />
        <Footer />
      </main>
    );
  }