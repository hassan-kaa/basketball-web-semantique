"use client";
import { Button } from "@nextui-org/button";
import { NextUIProvider } from "@nextui-org/react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
  return (
    <NextUIProvider>
      <AnimatePresence>
        <div className="min-h-[100vh] sm:min-h-screen w-screen flex flex-col   font-inter overflow-hidden">
          <svg
            style={{ filter: "contrast(125%) brightness(110%)" }}
            className="fixed z-[1] w-full h-full opacity-[35%]"
          >
            <filter id="noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency=".7"
                numOctaves="3"
                stitchTiles="stitch"
              ></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix>
            </filter>
            <rect width="100%" height="100%" filter="url(#noise)"></rect>
          </svg>
          <main className="mainClass flex flex-col items-center justify-center h-[80%] static md:fixed w-screen overflow-hidden  z-[100] pt-[30px] pb-[320px] px-4 md:px-20 md:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className=" md:ml-[-10px] md:mb-[37px] font-extrabold text-[16vw] md:text-[130px] text-center font-inter text-inherit leading-[0.9] tracking-[-2px] z-[100]"
            >
              Projet <br />
              Web <span className="text-[#407BBF]">Semantique </span>
              <span className="font-inter text-[#407BBF]">.</span>
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.15,
                duration: 0.95,
                ease: [0.165, 0.84, 0.44, 1],
              }}
              className="flex flex-row justify-center z-20 mx-0 mb-0 mt-8 md:mt-0 md:mb-[35px] max-w-4xl px-4 md:space-x-8"
            >
              <div className="w-1/2 gap-2 flex flex-col">
                <h2 className="flex items-center font-semibold text-[1em] text-inherit">
                  Le projet Basketball-Semantique
                </h2>
                <p className="text-[16px] leading-[24px] text-inherit font-normal">
                  se concentre sur la représentation sémantique des données
                  liées au basketball en utilisant une ontologie spécifique.
                  Cette ontologie définit des classes telles que "Joueur,"
                  "Équipe," "Match," "Stade," et "Entraîneur," avec des
                  propriétés et des relations définies entre elles
                </p>
              </div>
              <div className="w-1/2 gap-2 flex flex-col">
                <h2 className="flex items-center font-semibold text-[1em] text-inherit">
                  La partie Web est developpee en NextJs 🤩 🚀
                </h2>
                <p className="text-[16px] leading-[24px] text-inherit font-normal">
                  Cette approche basée sur le web sémantique ouvre la voie à des
                  requêtes SPARQL avancées pour extraire des informations
                  significatives et enrichir l'expérience d'analyse des données
                  liées au basketball.
                </p>
              </div>
            </motion.div>

            <div className="flex gap-[15px] mt-8 md:mt-0">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.55,
                  duration: 0.55,
                  ease: [0.075, 0.82, 0.965, 1],
                }}
              >
                <Link
                  href="https://github.com/hassan-kaa/basketball-web-semantique"
                  target="_blank"
                  className="group rounded-full pl-[8px] min-w-[180px] pr-4 py-2 text-[13px] font-semibold transition-all flex items-center justify-center bg-[#1E2B3A] text-white hover:[linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), #0D2247] no-underline flex gap-x-2  active:scale-95 scale-100 duration-75"
                  style={{
                    boxShadow:
                      "0px 1px 4px rgba(13, 34, 71, 0.17), inset 0px 0px 0px 1px #061530, inset 0px 0px 0px 2px rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <span className="w-5 h-5 rounded-full bg-[#407BBF] flex items-center justify-center">
                    <svg
                      className="w-[16px] h-[16px] text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.75 7.75C4.75 6.64543 5.64543 5.75 6.75 5.75H17.25C18.3546 5.75 19.25 6.64543 19.25 7.75V16.25C19.25 17.3546 18.3546 18.25 17.25 18.25H6.75C5.64543 18.25 4.75 17.3546 4.75 16.25V7.75Z"
                      ></path>
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5.5 6.5L12 12.25L18.5 6.5"
                      ></path>
                    </svg>
                  </span>
                  Star on Github
                </Link>
              </motion.div>
            </div>
            <div className="mt-5 text-center flex flex-col gap-2 items-center justify-center">
              <p className="text-lg font-light">Realise par :</p>
              <p className="text-2xl font-bold text-[#407BBF]">
                Hassan Kaabechi
              </p>
            </div>
          </main>
        </div>
      </AnimatePresence>
    </NextUIProvider>
  );
}
