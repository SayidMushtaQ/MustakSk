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
      title: "📊 Pizza Sales Analysis: Key Insights & Business Strategies 🍕",
      description: "Analyzing 49,574 pizza sales records to uncover trends in size, type, price, and peak sales times. Discover the most popular pizza sizes, top-selling price ranges, and peak business hours. Gain data-driven recommendations to optimize pricing, promotions, and customer preferences for increased sales. 🚀",
      image: "https://res.cloudinary.com/ddpvlh9he/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1743074919/DALL_E_2025-03-27_16.57.20_-_A_visually_engaging_cover_image_for_a_pizza_sales_analysis_report._The_image_features_a_dynamic_data-driven_theme_with_elements_representing_sales_ins_lnsxwe.webp",
      link: "https://github.com/SayidMushtaQ/PizzaSales",
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
