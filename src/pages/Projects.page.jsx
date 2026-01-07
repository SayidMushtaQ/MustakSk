import { useState, useMemo } from "react";
import { projects } from "../db/projects.data";
import { PortfolioCard } from "../components/PortFolioCard";

const TABS = ["All", "Web", "DS", "ML"];
const PROJECTS_PER_PAGE = 6;

const ProjectsPage = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [page, setPage] = useState(1);

  // 🔥 Sort latest first
  const sortedProjects = useMemo(() => {
    return [...projects].sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  }, []);

  // 🎯 Filter by tab
  const filteredProjects = useMemo(() => {
    if (activeTab === "All") return sortedProjects;
    return sortedProjects.filter(
      (p) => p.category === activeTab
    );
  }, [activeTab, sortedProjects]);

  // 📄 Pagination
  const startIndex = (page - 1) * PROJECTS_PER_PAGE;
  const paginatedProjects = filteredProjects.slice(
    startIndex,
    startIndex + PROJECTS_PER_PAGE
  );

  const totalPages = Math.ceil(
    filteredProjects.length / PROJECTS_PER_PAGE
  );

  return (
    <div className="px-4 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <h1 className="text-3xl sm:text-4xl font-bold text-slate-100 text-center">
        My Projects
      </h1>
      <p className="mt-3 text-slate-400 text-center max-w-2xl mx-auto">
        A journey through web development, data science, and machine learning.
      </p>

      {/* Tabs */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setPage(1);
            }}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition
              ${
                activeTab === tab
                  ? "border-sky-400 text-sky-400"
                  : "border-slate-600 text-slate-300 hover:border-slate-400"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginatedProjects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-10 flex justify-center gap-4">
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className="px-4 py-2 rounded-md border border-slate-600 text-slate-300 disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-slate-400 text-sm self-center">
            Page {page} of {totalPages}
          </span>

          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="px-4 py-2 rounded-md border border-slate-600 text-slate-300 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;
