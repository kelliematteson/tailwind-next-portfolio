import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BootstrapPlain, JavascriptOriginal, ReactOriginal, NextjsPlain, TypescriptPlain, Html5Plain, WordpressPlain, SlackOriginal, TailwindcssOriginal, GitOriginal, JiraOriginal, BrowserstackOriginal  } from 'devicons-react'
import kellie from '../public/images/kellie.png';



export default function Home() {

  return (
    <section>
      <main className="bg-white px-10 md:px-20 dark:bg-gray-600">
        <section className="min-h-screen">
        <nav className="py-10 pb-12 flex justify-between">
          <h1 className="text-lg font-burtons">Developed By Kellie</h1>
          <ul className="flex items-center">
            <li className="cursor-pointer text-2xl"><BsFillMoonStarsFill/></li>
            <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white py-2 px-4 ml-8 rounded" href="#">Resume</a></li>
          </ul>
        </nav>
        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">Kellie Matteson</h2>
          <h3 className="text-2xl py-2">Software Engineer II</h3>
          <p className="text-md py-5 leading-8 text-gray-800">I’m a developer with a constant curiosity to figure out a better solution to the problem at hand. I’m also a forever student, eager to learn more, embrace criticism and feedback and bring a positive, light energy to every team I’m on. </p>
        </div>
        <div className="text-4xl flex justify-center gap-6 py-3 text-gray-600">
            <AiFillLinkedin/>
            <AiFillGithub/>
            <AiOutlineMail/>
          </div>
          <div className="relative rounded-full h-80 w-80 mx-auto overflow-hidden">
            <Image alt='kellie' layout="fill" objectFit="cover" src={kellie} />
          </div>
          <div className="lg:flex gap-10 justify-center">
          <div className="text-center shadow-lg rounded-3xl p-10 my-10">
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
          <div className="text-center shadow-lg rounded-3xl p-10 my-10">
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
          <div>
            <h3 className="text-3xl py-1">Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800">Lorem ipsum dolor sit amet, <span className="text-teal-500">consectetur adipiscing</span> elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nam at lectus urna duis convallis convallis tellus id interdum. Fermentum iaculis eu non diam. Leo integer malesuada nunc vel risus commodo viverra. Dui id ornare arcu odio ut sem nulla. Massa massa ultricies mi quis hendrerit dolor magna.</p>
            <p className="text-md py-2 leading-8 text-gray-800">Sed libero enim sed faucibus turpis in. Sed adipiscing diam donec adipiscing tristique. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Purus <span className="text-teal-500">faucibus ornare</span> suspendisse sed nisi lacus sed viverra tellus. Lectus urna duis convallis convallis tellus id interdum. Laoreet non curabitur gravida arcu.</p>
          </div>
        </section>
      </main>
    </section>
  );
}
