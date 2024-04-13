import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { AnimatePresence, motion } from "framer-motion";
import { TagRole } from "../../atoms/TagRole";
import { cardVariants, titleVariants } from "./ProjectCard.const";

// const skeleton =
//   <div role="status" className="ProjectCard h-[64vh] max-h-[64vh] w-[74vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] animate-pulse">
//     <div class="h-2.5 bg-purple-light"></div>
//     <span class="sr-only">Loading...</span>
//   </div>

export const ProjectCard = ({
  title,
  missions,
  slug,
  thumbnail,
}) => {
  // TODO: Ajouter le loading avec un skeleton dans le composant ?
  return (
    <AnimatePresence>
      {/* TODO: Add animation on page loading */}
      <motion.div
        initial="initial"
        animate="end"
        exit={{ scale: 1, transition: { delay: 0.7, duration: 0.3 } }}
        variants={cardVariants}
        whileHover={{ scale: 1.05, transition: { when: "afterChildren" } }}
        className="ProjectCard h-[64vh] max-h-[64vh] cursor-pointer"
      >
        <Link
          to={slug}
          className="relative inline-block w-[74vw] md:w-[32vw] xl:w-[20vw] max-w-[480px] h-full"
        >
          {/* IMAGE */}
          <div className="ProjectCard__image absolute h-[62vh] w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] bg-purple-light">
            {/* {thumbnail && ( */}
              <figure className="h-full">
                {/* <GatsbyImage
                  image={thumbnail.node.gatsbyImage}
                  alt={thumbnail.node.altText}
                  width={thumbnail.node.width}
                  height={thumbnail.node.height}
                  className="w-full h-full object-cover"
                /> */}
              </figure>
            {/* )} */}
          </div>

          {/* TITLE */}
          <motion.h2
            variants={titleVariants}
            whileHover="hover"
            className="ProjectCard__title drop-shadow-lg absolute flex justify-center items-center h-full w-full md:w-[32vw] xl:w-[20vw] max-w-[480px] hover:backdrop-blur-xl text-[4.5vh] md:text-[3vh] xl:text-[2.8vw] font-black text-center uppercase font-brother text-white"
          >
            {title}
          </motion.h2>

          {/* MISSIONS */}
          <div className="ProjectCard__missions absolute flex flex-wrap items-start w-full gap-2 bottom-[6%] left-[4%] md:top-[64vh] md:left-0">
            {missions && missions.map((mission) => (
              <TagRole key={mission.slug} label={mission.name} slug={mission.slug} />
            ))}
          </div>
        </Link>
      </motion.div>
    </AnimatePresence>
  );
};
