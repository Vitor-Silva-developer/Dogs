import React from "react";
import Feed from "../Feed/Feed";
import Head from "../Helper/Head";
const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Photos"
        description="the website home with a feed of photos"
      />
      <Feed />
    </section>
  );
};

export default Home;
