import {
  FaGithub,
  FaYoutube,
  FaLinkedinIn,
  FaItchIo,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;

      const rect = elem.getBoundingClientRect();
      let mouseX = rect.width / 2;
      let mouseY = rect.height / 2;
      let currentX = 0;
      let currentY = 0;

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        requestAnimationFrame(updatePosition);
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2;
          mouseY = rect.height / 2;
        }
      };

      document.addEventListener("mousemove", onMouseMove);

      updatePosition();

      return () => {
        elem.removeEventListener("mousemove", onMouseMove);
      };
    });
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a href="https://www.youtube.com/@kobe_24" target="_blank">
            <FaYoutube />
          </a>
        </span>
        <span>
          <a href="https://github.com/24Ko8e" target="_blank">
            <FaGithub />
          </a>
        </span>
        <span>
          <a href="https://ko8e.itch.io/" target="_blank">
            <FaItchIo />
          </a>
        </span>
        <span>
          <a href="https://www.linkedin.com/in/abhishek-m-727a15132/" target="_blank">
            <FaLinkedinIn />
          </a>
        </span>
      </div>
      <a className="resume-button" href="https://drive.google.com/file/d/1j8FZzUjTsFOCU5ZdYVR2Wk7KDiLl8dHy/view?usp=sharing" target="_blank">
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
