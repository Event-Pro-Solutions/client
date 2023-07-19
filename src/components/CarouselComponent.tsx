import React from "react";
import { Carousel, initTE } from "tw-elements";

const resources = [
  {
    title: "Find me on Mastodon",
    link: "https://indieweb.social/@kendalmintcode",
    url: require("../../utils/images/Texas Rangers Image.jpg"),
  },
  {
    title: "Find me on Mastodon",
    link: "https://indieweb.social/@kendalmintcode",
    url: require("../../utils/images/Color Run Image.jpg"),
  },
  {
    title: "Find me on Mastodon",
    link: "https://indieweb.social/@kendalmintcode",
    url: require("../../utils/images/concert.webp"),
  },
  {
    title: "Find me on Mastodon",
    link: "https://indieweb.social/@kendalmintcode",
    url: require("../../utils/images/park.webp"),
  },
  {
    title: "Find me on Mastodon",
    link: "https://indieweb.social/@kendalmintcode",
    url: require("../../utils/images/soccer.webp"),
  },
];

export const CarouselComponent = () => {
  return (
    <>
      <h1>Hello</h1>
      <p>Placeholder Carousel</p>
      {/* <div key={index} className="...">
        <a
          href={resources.link}
          className="..."
          style={{ backgroundImage: `url(${resources.url || ""})` }}
        >
          <img
            src={resources.url || ""}
            alt={resources.title}
            className="..."
          />
        </a>
        <a href={resources.link} className="...">
          <h3 className="...">{resources.title}</h3>
        </a>
      </div> */}
    </>
  );
};
