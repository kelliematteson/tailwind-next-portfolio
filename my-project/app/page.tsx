import Image from "next/image";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import kellie from '../public/images/kellie.png';


export default function Home() {
  return (
      <main className="bg-white px-10">
        <section className="min-h-screen">
        <nav className="py-10 pb-12 flex justify-between">
          <h1 className="text-xl font-burtons">Developed By Kellie</h1>
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
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin/>
            <AiFillGithub/>
          </div>
          <div className="relative rounded-full h-80 w-80 mx-auto">
            <Image alt='kellie' layout="fill" objectFit="cover" src={kellie} />
          </div>
        </section>
      </main>
  );
}
