import BigWrapper from "./BigWrapper";
import IconBadge from "./IconBadge";

const Skills = () => {
  const skills = [
    "ReactJS",
    "NodeJS",
    "HTML5",
    "CSS3",
    "JavaScript",
    "Dot Net",
    "PHP",
    "C",
    "C++",
    "MySQL",
    "GitHub",
  ];
  return (
    <BigWrapper>
      <div id="technologies_page">
        <h1 className="text-2xl font-bold text-violet-500 mb-4">
          Technologies
        </h1>
        <div className="flex gap-8 flex-wrap">
          {skills.map((val) => {
            return <IconBadge name={val} key={val} />;
          })}
        </div>
      </div>
    </BigWrapper>
  );
};

export default Skills;
