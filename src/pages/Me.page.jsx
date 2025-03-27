import React from "react";
import '../styles/Me.style.css'
export default function Me() {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <img
        src="https://res.cloudinary.com/ddpvlh9he/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_white,b_rgb:262c35/v1741238678/qvlybhmdthibimftetgb.jpg"
        alt="Mustak"
        className="profile-image"
      />
      <p>
        I'm <strong>Mustak</strong>! 👨‍💻 Passionate about coding from an early
        age, I’m currently pursuing a <strong>BCA</strong> at{" "}
        <strong>MAKAUT University</strong> 🎓. My journey in technology is
        driven by a deep curiosity and love for problem-solving. I aspire to
        further my expertise by pursuing an <strong>MCA in Data Science</strong>
        , where I can merge analytical thinking with innovation to create
        impactful solutions.
      </p>
      <div className="social-links">
        <a
          href="https://github.com/SayidMushtaQ"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          href="https://www.youtube.com/@mustak_085"
          target="_blank"
          rel="noopener noreferrer"
        >
          YouTube
        </a>
        <a
          href="https://x.com/sayid_Mustak"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>
      </div>
    </div>
  );
}
