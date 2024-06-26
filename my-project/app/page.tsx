"use client";
import { useState } from "react";
import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BootstrapPlain, JavascriptOriginal, ReactOriginal, NextjsPlain, TypescriptPlain, Html5Plain, WordpressPlain, SlackOriginal, TailwindcssOriginal, GitOriginal, JiraOriginal, BrowserstackOriginal  } from 'devicons-react'
import kellie from '../public/images/kellie.png';



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <section className={darkMode ? 'dark' : ''}>
      <main className="bg-white px-10 md:px-20 dark:bg-gray-600">
        <section className="min-h-screen">
        <nav className="py-10 pb-12 flex justify-between">
          <h1 className="text-lg font-burtons">Developed By Kellie</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl"><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)}/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 ml-8 rounded" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Kellie Matteson</h2>
          <h3 className="text-2xl py-2">Software Engineer II</h3>
          <div className="text-4xl flex justify-center gap-6 py-3 text-gray-600 dark:text-white">
            <a href="https://www.linkedin.com/in/kelliematteson/">
            <AiFillLinkedin/>
            </a>
            <a href="https://github.com/kelliematteson">
            <AiFillGithub/>
            </a>
            <a href="mailto:kelliematteson@yahoo.com">
            <AiOutlineMail/>
            </a>
          </div>
          <div className="relative rounded-full h-80 w-80 mx-auto overflow-hidden">
            <Image alt='kellie' layout="fill" objectFit="cover" src={kellie} />
          </div>
          </div>
          <p className="text-md p-10 leading-8 text-gray-800 dark:text-white">I’m a Problem Solver. And I will not give up. This leaves me bleary eyed in front of my screen a little too often. Thankfully, I know when to pull away, go for a run and come back refreshed and eager to try a different approach. I love to build a full stack application. I love the challenge of a new framework and the excitement of seeing the magic it comes with. I also obsess over the little details of the front end, getting that heading in just the right spot or playing around with a little spring animation. My two little ones push me to keep learning and to stop everything and play hide and seek.</p>
          <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-lg rounded-3xl p-10 my-10 dark:bg-white">
            <div className="text-center py-10">
              <h1 className="text-2xl text-gray-800 py-4">Languages and Frameworks</h1>
                <div className="flex justify-center gap-12 py-3">
                  <div>
                    <BootstrapPlain size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Bootstrap</p>
                  </div>
                  <div>
                    <JavascriptOriginal size="100"/>
                    <p className="text-sm leading-6 text-gray-800">JavaScript</p>
                  </div>
                  <div>
                    <ReactOriginal size="100"/>
                    <p className="text-sm leading-6 text-gray-800">React</p>
                  </div>
                </div>
                <div className="flex justify-center gap-12 py-3">
                  <div>
                    <NextjsPlain size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Next.js</p>
                  </div>
                  <div>
                    <TypescriptPlain size="100"/>
                    <p className="text-sm leading-6 text-gray-800">TypeScript</p>
                  </div>
                  <div>
                    <Html5Plain size="100"/>
                    <p className="text-sm leading-6 text-gray-800">HTML5</p>
                  </div>
                </div>
            </div>
          </div>
          <div className="text-center shadow-lg rounded-3xl p-10 my-10 dark:bg-white">
            <div className="text-center py-10">
              <h1 className="text-2xl text-gray-800 py-4">Development Tools</h1>
                <div className="flex justify-center gap-12 py-3">
                  <div>
                    <WordpressPlain size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Wordpress</p>
                  </div>
                  <div>
                    <SlackOriginal size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Slack</p>
                  </div>
                  <div>
                    <TailwindcssOriginal size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Tailwind Css</p>
                  </div>
                </div>
                <div className="flex justify-center gap-12 py-3">
                  <div>
                    <GitOriginal size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Git</p>
                  </div>
                  <div>
                    <JiraOriginal size="100"/>
                    <p className="text-sm leading-6 text-gray-800">Jira</p>
                  </div>
                  <div>
                    <BrowserstackOriginal  size="100"/>
                    <p className="text-sm leading-6 text-gray-800">BrowserStack</p>
                  </div>
                </div>
            </div>
          </div>
          </div>
        </section>
        <section>
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Say Hello!</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-white"><a href="mailto:kelliematteson@yahoo.com">Email Me</a></p>
          </div>
        </section>
      </main>
      <footer className="bg-teal-600 text-white py-6 text-center" role="contentinfo">
            <p>© 2024 | Kellie Matteson</p>
          </footer>
    </section>
  );
}
