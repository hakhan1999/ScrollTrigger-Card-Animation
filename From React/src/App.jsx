import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React from "react";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    document.querySelectorAll(".card").forEach((card) => {
      gsap.to(card, {
        scale: 0.7,
        opacity: 0,
        scrollTrigger: {
          trigger: card,
          start: "top 15%",
          end: "bottom 15%",
          scrub: true,
        },
      });
    });
  });

  const cards = [
    {
      id: "1",
      imageUrl: "src/images/1.png",
      lightHeading: "The",
      darkHeading: "Algorithm",
      description: "The algorithm workings are shrouded in complexity.",
    },
    {
      id: "2",
      imageUrl: "src/images/2.png",
      lightHeading: "The",
      darkHeading: "Dogma",
      description:
        "Enshrining the principles of conformity and reinforcing the status quo.",
    },
    {
      id: "3",
      imageUrl: "src/images/3.png",
      lightHeading: "The",
      darkHeading: "Architects",
      description:
        "The elusive entities, lacking human form, operate in the shadows.",
    },
    {
      id: "4",
      imageUrl: "src/images/4.png",
      lightHeading: "The",
      darkHeading: "Wasteland",
      description:
        "This overlooked realm, a consequence of algorithmic judgments.",
    },
    {
      id: "5",
      imageUrl: "src/images/5.png",
      lightHeading: "The",
      darkHeading: "Narrative",
      description: "The collective story sculpted by the architects.",
    },
    {
      id: "6",
      imageUrl: "src/images/6.png",
      lightHeading: "The",
      darkHeading: "Opulence",
      description: "The cognitive elite's wealth in the algorithmic society.",
    },
  ];
  return (
    <main className="w-full flex flex-col gap-4 items-center py-[15vh] text-white">
      {cards.map((card) => (
        <div
          key={card.id}
          className="card card-1 sticky top-[15vh] flex flex-col gap-[1.5rem] items-center justify-center bg-[#42382e] px-[2rem] py-[3rem] w-[50vh] h-[80vh] rounded-[1rem]"
        >
          <img
            className="w-[auto] h-[35%] aspect-square"
            src={card.imageUrl}
            alt="Image"
          />
          <div className="heading flex justify-center">
            <h1 className="uppercase leading-[4rem] text-[4rem] text-center font-thin">
              {card.lightHeading}{" "}
              <span className="font-bold">{card.darkHeading}</span>
            </h1>
          </div>
          <p className="w-[80%] text-center text-[1.125rem] font-extralight">
            {card.description}
          </p>
        </div>
      ))}
    </main>
  );
};

export default App;
