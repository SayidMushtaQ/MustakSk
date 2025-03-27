import "../styles/Project.style.css";

const PortfolioCard = ({ title, description, image, link }) => {
  return (
    <div className="portfolio-card">
      <img src={image} alt={title} className="portfolio-image" />
      <div className="portfolio-content">
        <h3 className="portfolio-title">{title}</h3>
        <p className="portfolio-description">{description}</p>
        <div className="portfolio-button-container">
          <a href={link} target="_blank" rel="noopener noreferrer" className="portfolio-button">
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const projects = [
    {
      title: "AI-Powered Code Assistant",
      description: "An intelligent coding assistant that provides real-time code suggestions and debugging support.",
      image: "https://w.wallhaven.cc/full/d6/wallhaven-d69eom.jpg",
      link: "#",
    },
  ];

  return (
    <div className="projects-page">
      <h1 className="projects-title">My Projects - A Journey Through Code & Innovation</h1>
      <p className="projects-description">Explore a collection of my projects spanning web development, machine learning, data science, and more.</p>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <PortfolioCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
