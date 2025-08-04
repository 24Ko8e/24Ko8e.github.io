import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {[{
            title: "Twinmaster Building",
            category: "Design",
            brief: "Real-time simulation and analysis solution for buildings.",
            tools: "Unreal Engine, C++, Datasmith",
            image: "/images/placeholder.webp",
            video: "https://www.youtube.com/embed/WbCtwdlFf0M"
          },
          {
            title: "TechuOnTheChair - Game",
            category: "Gaming",
            brief: "Competitive 2-player card game where the goal is to acquire most slots on a 5x5 board.",
            tools: "Unity, C#, Photon PUN 2, Playfab",
            image: "/images/placeholder.webp",
            video: "#"
          },
          {
            title: "Sepax C-Pro VR Training Module",
            category: "Medical",
            brief: "Train medical professionals to operate Sepax C-Pro Cell Processing Instrument in an interactive VR space.",
            tools: "Unity, C#",
            image: "/images/placeholder.webp",
            video: "#"
          },
          {
            title: "Floor Configurator",
            category: "Configurator",
            brief: "Configure your complete flooring tile-by-tile with different variations and sizing as per the customers' choice.",
            tools: "Unity, C#",
            image: "/images/placeholder.webp",
            video: "#"
          },
          {
            title: "ArchViz",
            category: "Visualization",
            brief: "Visualize home interiors in an immersive virtual space with a VR headset.",
            tools: "Unreal Engine, C++",
            image: "/images/placeholder.webp",
            video: "#"
          },
          {
            title: "Game Character Controller Toolkit",
            category: "Tool",
            brief: "A fully customizable toolkit for developers to immediate start exploring their virtual worlds without having to program a character everytime they start a project.",
            tools: "Unity, C#",
            image: "/images/placeholder.webp",
            video: "#"
          }].map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Brief</h4>
                <p>{item.brief}</p>
                <br></br>
                <h4>Tools</h4>
                <p>{item.tools}</p>
              </div>
              <WorkImage image={item.image} alt={item.title} video={item.video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
