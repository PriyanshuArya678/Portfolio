import react_icon from "../../assets/icons/react_icon.svg";
import html_icon from "../../assets/icons/html_icon.svg";
import css_icon from "../../assets/icons/css_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import tailwind_icon from "../../assets/icons/tw-icon.svg";
import cpp_icon from "../../assets/icons/cpp_icon.svg";
import nodejs_icon from "../../assets/icons/nodejs_icon.svg";
import mongodb_icon from "../../assets/icons/mongodb_icon.svg"
import mysql_icon from "../../assets/icons/mysql.svg"
import dart_icon from "../../assets/icons/dart_icon.svg"
import myImage from "./myPic.jpg";
function About() {
  const techStack = [
    js_icon,
    react_icon,
    cpp_icon,
    html_icon,
    css_icon,
    tailwind_icon,
    nodejs_icon,
    mongodb_icon,
    mysql_icon,
    dart_icon
  ];

  return (
    <div>
      <div>
        <title>Priyanshu Arya | About</title>
      </div>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className=" xl:order-2">
            <div >
            <img src={myImage} className="box border-4 border-accentColor xl:h-[300px] xl:w-[300px] object-cover"  alt=""/>

            </div>
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
              Full-Stack <br /> Developer
            </h1>
            <h2 className="text-xl max-sm:hidden">
              Hi, I'm Priyanshu Arya. A passionate Full-Stack Developer <br />{" "}
              based in Delhi,India. 📍
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
            "I'm a final year student at IIIT Ranchi, and a full stack developer with a passion for all things tech. I’ve got the Knight title on Leetcode and love diving deep into computer science concepts. Always up for learning something new and leveling up my skills!"
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Tech Stack{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
