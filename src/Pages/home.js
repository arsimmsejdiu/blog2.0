import React from "react";
import Hero from "../Sections/Hero";
import BlogPost from "../components/BlogPosts";
import LargeCard from "../components/LargeCard";

const Home = () => {
  return (
    <div>
      <Hero />
      <BlogPost />
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
      />
    </div>
  );
};

export default Home;
