'use client'
import Image from 'next/image'
import { motion } from "framer-motion";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import { useState, useRef, useEffect } from "react";

export function Details(
{  name,
  description,
  dimensions,
  price,
  artImage}
){
    const list = {
        visible: { 
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { 
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      };
    
      const item = {
        visible: { 
          opacity: 1,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { 
          opacity: 0,
          transition: {
            when: "afterChildren",
          },
        },
      };

      const listitem = {
        visible: { 
          opacity: 1,
          y: 0,
          transition: {
            when: "beforeChildren",
            staggerChildren: 0.3,
          },
        },
        hidden: { 
          opacity: 0,
          y: 200,
          transition: {
            when: "afterChildren",
          },
        },
      };
      
  return (
        <div className="flex flex-col max-w-5xl px-4 bg-heidibg">
            <motion.div 
                layout
                initial="hidden"
                animate="visible"
                variants={item} className=" mr-auto relative z-30">
                <h2 className=" relative text-left p-5 md:text-4xl">{name}</h2>
              </motion.div>
            <motion.div layout
                initial="hidden"
                animate="visible"
                variants={list}
                className=" md:pr-2 pb-2 md:mb-12 ">
              <div className="flex flex-col gap-10 pt-6 px-5 pb-6"> 
                    <div className="flex flex-col gap-8">
                        <div className="relative overflow-hidden px-1 md:px-5 ">
                          <div className="grid grid-cols-1">
                          {artImage.map((artImage) => (
                          <Image  
                          src={artImage.image.asset.url} 
                          width={artImage.image.asset.metadata.dimensions.width} 
                          height={artImage.image.asset.metadata.dimensions.width} 
                          alt={artImage.alt} 
                          sizes="(max-width: 768px) 100vw,
                          (max-width: 1200px) 50vw,
                          33vw"/>
                          ))}
                          </div>
                        </div>
                        <div className="flex flex-col justify-evenly">
                        <div className="max-w-xl overflow-auto pb-5">
                        <h3 className="font-bold">Dimensions</h3>
                        <h4>
                            {dimensions}
                        </h4>
                        </div><div className="max-w-xl overflow-auto">
                        <h3 className="font-bold">Price</h3>
                        <h4 className="text-red-500">
                            {price}
                        </h4>
                        </div>
                        </div>
                      </div>
              <div className="mx-auto max-w-xl overflow-auto">
                <h3 className="font-bold">Details</h3>
              <ReactMarkdown className="paragraph line-break list-inside text-left text-black dark:text-white" remarkPlugins={[remarkGfm, remarkBreaks]}>
                {description}
                </ReactMarkdown>
              </div>
              </div>
            </motion.div>
            </div>
    )
}




export function Artwork(
 {
  name,
children,
  price,
 artImage}
){
  const coverimage = artImage[0]
  const projectref = useRef();
  const [isModalOpen, setModalOpen] = useState(false)
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  useOnClickOutside(projectref, () => setModalOpen(false));

  const dropIn = {
      hidden: {
          opacity: 0,
          scale: 0,
          transition: {
            duration: 3,
            type: "spring",
            damping: 40,
            stiffness: 300,
          },
      },
      visible: {
          opacity: 1,
          scale: 1,
          transition: {
              duration: 2,
              type: "spring",
              damping: 40,
              stiffness: 300,
          }
      },
      exit: {
          opacity: 0,
          scale:0
      },
  };
  const item = {
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.4,
      },
    },
    hidden: { 
      opacity: 0,
      scale: 0,
      y:-100,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.4,
      },
    },
    exit: {
      opacity: 0,
  },
  }

  function useOnClickOutside(ref, handler) {
    useEffect(
      () => {
        const listener = (event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }
 if (isModalOpen) return (
<motion.div
    layout
    key={name} 
    variants={item}
    className="fixed top-0 left-0 w-full grow bg-black bg-opacity-50 z-50 mx-auto place-content-center pt-20 overscroll-contain"
    >
                  <motion.div
                  layout
                  ref={projectref} 
                  onClick={close}
                  className="relative flex mx-auto justify-center content-center items-center overscroll-contain"
                  variants={dropIn}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  >
                {children}
                </motion.div>
                </motion.div>
                )
else return (
  <motion.div
    layout
    key={name} 
    variants={item}
    className="relative flex-col grow shrink overscroll-contain overflow-hidden"
    >
                <motion.button 
                initial="visible"
                animate="hidden"
                exit="exit"
                layout
                whileTap={{scale: 0.95}}
                className="save-button overflow-hidden"
                onClick={!isModalOpen ? open : close }>
                <div className="rounded-lg bg-white mx-auto p-5">
                <Image 
                  key={coverimage._key}
                  src={coverimage.image.asset.url}
                  width={coverimage.image.asset.metadata.dimensions.width}
                  height={coverimage.image.asset.metadata.dimensions.height}
                  sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
                  alt={coverimage.alt} 
                  className="mx-auto"
                  />
                  </div>
                  <div>
                      <div className="flex justify-evenly py-3">
                  <p>
                  {name}
                  </p>
                  <p>
                  {price}
                  </p>
                  </div>
                  </div>
              </motion.button>
              </motion.div>
                )
              }

