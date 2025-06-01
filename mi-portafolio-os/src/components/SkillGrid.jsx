import "../styles/skills.css";
import SkillTag from "./SkillTag";

const tools = [
    {
        name:"Git & Github",
        src:"https://www.svgrepo.com/show/303615/github-icon-1-logo.svg"
    },
    {
        name: "Docker",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
    },
    {
        name: "Android",
        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
    },
    {
        name:"VS Code",
        src:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
    },
    {
        name:"Jira",
        src:"https://www.svgrepo.com/show/353935/jira.svg"
    },
    {
        name:"Canva",
        src:"https://www.svgrepo.com/show/515418/canva.svg"
    },
    {
        name:"Figma",
        src:"https://www.svgrepo.com/show/448222/figma.svg"
    }
]

const dev = [
{
    name: "Python",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
  },
  {
    name: "Java",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
  },
  {
    name:"PHP",
    src:"https://www.svgrepo.com/show/452088/php.svg"
  },
  {
    name:"SQL",
    src:"https://www.svgrepo.com/show/331760/sql-database-generic.svg"
  },
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
  },

  {
    name: "Vue.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
  },
  {
    name: "Laravel",
    src: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg"
  },
  {
    name:"React",
    src:"https://www.svgrepo.com/show/452092/react.svg"
  },
  {
    name:"PostgreSQL",
    src:"https://www.svgrepo.com/show/354200/postgresql.svg"
  },
  {
    name:"MySQL",
    src:"https://www.svgrepo.com/show/355133/mysql.svg"
  }
];

function SkillGrid() {
  return (
    <div className="skills-wrapper">
      <div className="skills-column">
        <h3>TOOLS</h3>
        <div className="skills-grid">
          {tools.map((tool, i) => (
            <SkillTag key={i} label={tool} noteIndex={i + 1} />
          ))}
        </div>
      </div>

      <div className="skills-column">
        <h3>DEVELOPMENT</h3>
        <div className="skills-grid">
          {dev.map((tech, i) => (
            <SkillTag key={i} label={tech} noteIndex={i + tools.length + 1} />
          ))}
        </div>
      </div>
    </div>

  );
}

export default SkillGrid;