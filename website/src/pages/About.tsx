import { Header } from "../header/Header";
import { AboutSections } from "../AboutSections";
import warhammer from "../assets/warhammer.webp";
import shoes from "../assets/shoes.jpg";
import knives from "../assets/knives.webp";
import snowboard from "../assets/snowboard.jpeg";
import reading from "../assets/reading.webp";
import gaming from "../assets/gaming.jpg";
import coding from "../assets/coding.avif";

export const About = () => {
  return (
    <div className="bg-gray-100 h-full pb-20">
      <Header />
      <AboutSections
        title="Coding"
        image={coding}
        paragraph="I have been coding for just over a year now, working with languages such as JavaScript, TypeScript, C#, HTML, and CSS and using multiple different frameworks consisting of React, Svelte, Astro, Vite and Tailwind. I enjoy the problem solving aspect of it and building SPA and MPA styled websites."
      />
      <AboutSections
        title="Miniature painting"
        image={warhammer}
        paragraph="Three years ago, I embarked on a journey into the world of miniature painting, and it has since become a source of solace for me. It's in these quiet moments, lost in the intricate details, that I find a refuge from the chaos of the world."
      />
      <AboutSections
        title="Running"
        image={shoes}
        paragraph="After leaving the physically demanding world of hospitality, I recently rediscovered the joy of running. As I pound the pavement, I find myself processing ideas with clarity, and it's here that I push my boundaries, both physically and mentally."
      />
      <AboutSections
        title="Cooking"
        image={knives}
        paragraph="Cooking has held a special place in my heart for as long as I can remember. When I made the leap to Australia, I arrived with nothing more than a suitcase and a trusty frying pan. "
      />
      <AboutSections
        title="Snowboarding"
        image={snowboard}
        paragraph="Skiing has been a part of my life since the age of three, and at thirteen, I ventured into the world of snowboarding. During my two years in Boulder, Colorado, my passion for snowboarding thrived. When my family moved back to NZ, I found myself in Queenstown, where I spent an incredible year after completing my studies. What draws me to these snowy heights is the unmatched sense of freedom and the feeling of almost dancing as I descend. It's a thrilling experience that has shaped my love for the mountains and the joy of gliding through their pristine, snow-covered terrain."
      />
      <AboutSections
        title="Reading"
        image={reading}
        paragraph="Reading has always been a profound love of mine, a passion that's been with me throughout my life. Allowing my internal movie to unfold with each turn of the page is nothing short of magical.  The world of books imparts boundless knowledge and deep understanding, painting vivid landscapes of imagination and insight."
      />
      <AboutSections
        title="Gaming"
        image={gaming}
        paragraph="I love the challenge that video games bring me and the sheer variety of them. Its also a great way to stay connected with all of my friends back in NZ"
      />
    </div>
  );
};
