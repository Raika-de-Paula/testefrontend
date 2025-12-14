import React from 'react';
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Teacher from '../components/footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Cards />
      <Teacher />
    </main>
  )
}