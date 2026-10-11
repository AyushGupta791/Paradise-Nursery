import React from 'react';
import { Heart, Leaf, Sprout } from 'lucide-react';

export default function AboutUs() {
  return (
    <main className="page-wrap about-page">
      <section className="about-hero">
        <p className="eyebrow">
          <Leaf size={15} />
          OUR LITTLE GREEN WORLD
        </p>

        <h1>
          Helping your home
          <br />
          <em>grow beautifully.</em>
        </h1>

        <p>
          At Paradise Nursery, we believe every room can feel
          calmer, brighter, and more alive with the right plant.
          We bring together a welcoming collection of indoor
          plants for new plant parents and experienced growers.
        </p>
      </section>

      <section className="about-grid">
        <article className="about-card">
          <span className="feature-icon">
            <Sprout size={24} />
          </span>
          <h2>Thoughtfully selected</h2>
          <p>
            We curate indoor plants for beginners, busy plant
            parents, and everyone in between.
          </p>
        </article>

        <article className="about-card">
          <span className="feature-icon">
            <Heart size={24} />
          </span>
          <h2>Care made simple</h2>
          <p>
            Our goal is to make plant ownership welcoming with
            approachable choices and clear product information.
          </p>
        </article>

        <article className="about-card">
          <span className="feature-icon">
            <Leaf size={24} />
          </span>
          <h2>A greener everyday</h2>
          <p>
            From a tiny succulent to a leafy statement plant,
            little green moments can make a home feel special.
          </p>
        </article>
      </section>

      <p className="about-signoff">
        Thank you for growing with us.{' '}
        <span>— The Paradise Nursery team</span>
      </p>
    </main>
  );
}
