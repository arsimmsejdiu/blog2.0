import React from "react";
import Hero from "../Sections/Hero";
import BlogPost from "../components/BlogPosts";
import LargeCard from "../components/LargeCard";
import Category from '../components/Category';

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <BlogPost />
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Blog Technology Info"
        description="Wishlists curated by Leutrim Olluri"
        buttonText="I'm flexible"
      />
    </div>
  );
};

export default Home;
