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
      github: "/",
    },
    {
      title: "Pooja: Personal Portfolio Website",
      id: "pooja_portfolio",
      description:
        "I made this portfolio website to tell about myself to the world. This website showcases my skills and helps contact potential customers willing to hire me.",
      technologies: ["ReactJS", "Tailwind CSS", "HTML5", "Javascript"],
      github: "/",
    },
  ];
  return (
    <BigWrapper>
      <h1 className="text-2xl font-bold text-violet-500 mb-4">Projects</h1>
      <div className="flex gap-8">
        {projects.map((item) => {
          return <ProductCard data={item} key={item.id} />;
        })}
      </div>
    </BigWrapper>
  );
};

export default Projects;
