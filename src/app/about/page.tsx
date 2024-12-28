import Link from "next/link";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";

function About() {
  return (
    <div className="px-6 mx-auto">
      <h1 className="py-4 text-center pb-12">About me</h1>
      <div className="flex flex-col gap-4 justify-center">
        <p className="mx-auto article">
          When I was still in high-school, my father bought a Commodore 64. 
          I remember using it to play video-games loaded through a cassett-tape,
          because it had very little memory.
          But it was also programmable, so he signed us up for an evening class learning Basic together. However, this was back 
          in the old &quot;DOS days&quot;, and it didn&apos;t really amount to anything.
          <br /><br />However, when Windows 95 was launched and the internet started to catch on, 
          my interest in computers really picked up.  
          By the early 2000&apos;s, 
          I had bought a desktop computer and a lifetime subscription at{" "}
          <Link href={"https://learnvisualstudio.com"}>
            Learn Visual Studio
          </Link>
          . Following the curriculum, 
          I worked with C# and SQL programming for some years. There was also a course in Javascript, and that&apos;s how I got into
          webdesign. I followed several online tutorials in HTML, CSS and
          Javascript at{" "}
          <Link href={"https://https://www.linkedin.com/learning/"}>
            LinkedIn Learning
          </Link>
          , before discovering the{" "}
          <Link href={"https://www.noroff.no/"}>Noroff University</Link>, where
          I studied Frontend Development from 2020-24.
        </p>
        <img
          src="images/software.png"
          alt="web design image"
          width="130"
          height="130"
          className="flex my-5 mx-auto mt-6 animate-slide mt-10"
        />
          <Link href="https://www.flaticon.com/free-icons/cms"
            className="text-sm flex justify-center animate-slide"
          >
            Cms icons created by Freepik - Flaticon
          </Link>
          <h2 className="text-2xl mt-6 text-center">Technologies I know</h2>
          <ul className="flex flex-col justify-center items-center mx-auto max-w-md">
            <li className="flex items-center gap-1">
              <FaHtml5 />
              HTML
            </li>
            <li className="flex items-center gap-1">
              <FaCss3 />
              CSS
            </li>
            <li className="flex items-center gap-1">
              <FaJs />
              Javascript
            </li>
            <li className="flex items-center gap-1">
              <FaReact />
              React
            </li>
          </ul>
      </div>
    </div>
  );
}
export default About;
