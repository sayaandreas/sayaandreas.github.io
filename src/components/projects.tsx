import { Github, SquareArrowOutUpRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  keywords: string[];
  url: string;
  source: string;
  sortOrderId: number;
  resumeId: number;
  createdAt: string;
  updatedAt: string;
}

interface ProjectsProps {
  projects: Project[];
}

function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects" className="section projects">
      <h2 className="numbered-section">03. Projects</h2>

      <p className="text-soft">
        Here's some of my work that I can share, either both the code and the
        application URL or just one of them.
      </p>

      <div className="projects-list">
        {projects.map((project) => {
          return (
            <div
              key={project.url}
              className="card projects-card"
              style={{ flex: "0 1 250px" }}
            >
              <div className="projects-card-actions">
                {project.source ? (
                  <a href={project.source}>
                    <Github />
                  </a>
                ) : (
                  <span />
                )}

                {project.url ? (
                  <a href={project.url}>
                    <SquareArrowOutUpRight />
                  </a>
                ) : (
                  <span />
                )}
              </div>
              <h3 className="m-0">{project.name}</h3>
              <p className="text-soft">{project.description}</p>
              <div className="text-soft">{project.keywords.join(", ")}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
