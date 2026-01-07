import React from "react";
import "../styles/Me.style.css";
export default function Me() {
  return (
    <div className="flex justify-center pt-5 px-4">
      <div className="w-full max-w-4xl p-6 sm:p-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="https://res.cloudinary.com/ddpvlh9he/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_10px_solid_white,b_rgb:262c35/v1741238678/qvlybhmdthibimftetgb.jpg"
            alt="Mustak"
            className="w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-slate-600"
          />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-center text-2xl sm:text-3xl font-bold text-slate-100">
          Hi, I’m Mustak 👋
        </h2>

        {/* Description */}
        <p className="mt-6 text-sm sm:text-base leading-relaxed text-slate-300 text-center sm:text-left">
          I’m a{" "}
          <span className="font-semibold text-slate-100">
            Full Stack Developer
          </span>{" "}
          with a strong foundation in programming, mathematics, and logical
          problem-solving. I hold a
          <span className="font-semibold text-slate-100"> BCA</span> degree
          under
          <span className="font-semibold text-slate-100">
            {" "}
            MAKAUT University
          </span>{" "}
          🎓, where I built core skills in computer applications and software
          development.
          <br />
          <br />I began my journey as a
          <span className="font-semibold text-slate-100">
            {" "}
            front-end developer
          </span>{" "}
          and worked as a
          <span className="font-semibold text-slate-100"> freelancer</span>,
          building real-world web applications for clients. Over time, my
          curiosity and interest in system design led me to transition into a
          <span className="font-semibold text-slate-100"> full stack role</span>
          , where I now work across both frontend and backend to develop
          complete, scalable products.
          <br />
          <br />
          Alongside web development, I have a growing interest in
          <span className="font-semibold text-slate-100">
            {" "}
            Data Science and Machine Learning
          </span>
          . I actively explore data analysis, statistics, and ML fundamentals,
          and enjoy applying analytical thinking to understand patterns,
          optimize systems, and make data-driven decisions.
          <br />
          <br />I believe in learning deeply through
          <span className="font-semibold text-slate-100">
            {" "}
            projects, experimentation, and consistency
          </span>
          , and I’m continuously evolving by bridging software engineering with
          data-focused problem-solving.
        </p>

        {/* Social Links */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://github.com/SayidMushtaQ"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-400 hover:text-sky-400"
          >
            GitHub
          </a>
          <a
            href="https://www.youtube.com/@mustak_085"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-red-400 hover:text-red-400"
          >
            YouTube
          </a>
          <a
            href="https://x.com/sayid_Mustak"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-5 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-300 hover:text-sky-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}
