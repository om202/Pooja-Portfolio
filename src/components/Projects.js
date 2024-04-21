import BigWrapper from "./BigWrapper";
import ProductCard from "./ProductCard";

const Projects = () => {
  const projects = [
    {
      title: "Mero Shop: Online Shopping",
      id: "mero_shop",
      description:
        "Mero Shop is a e-commerce digital storefront that shows list of products that buyers can buy. It also has an admin managed page where they can list and configure their products.",
      technologies: ["HTML", "CSS", "JS", "MySQL", "PHP"],
      github: "https://github.com/Poojasah77/Mero_shop",
    },
    {
      title: "Pooja: Personal Portfolio Website",
      id: "pooja_portfolio",
      description:
        "I made this portfolio website to tell about myself to the world. This website showcases my skills and helps contact potential customers willing to hire me.",
      technologies: ["ReactJS", "Tailwind CSS", "HTML5", "Javascript"],
      github: "https://github.com/Poojasah77/Portfolio-website",
    },
    {
      title: "Business Model: Helps add business record",
      id: "business_model",
      description:
        "I made this website just to learn CRUD operations. User can enter business name and information and click submit to add the business on their record..",
      technologies: ["ReactJS", "Tailwind CSS", "HTML5", "Javascript"],
      github: "https://github.com/Poojasah77/Business_modal",
    },
    {
      title: "Instagram Clone: A pure ReactJS Instagram Clone",
      id: "insta_clone",
      description:
        "I made this website to to learn UI development with ReactJS.",
      technologies: ["ReactJS", "Tailwind CSS", "HTML5", "Javascript"],
      github: "https://github.com/Poojasah77/Insta_page",
    },
  ];
  return (
    <BigWrapper>
      <div id="projects_page">
        <h1 className="text-2xl font-bold text-violet-500 mb-4">Projects</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((item) => {
            return <ProductCard data={item} key={item.id} />;
          })}
        </div>
      </div>
    </BigWrapper>
  );
};

export default Projects;
