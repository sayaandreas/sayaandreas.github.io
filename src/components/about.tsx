import me from "../assets/me.png";

interface Skill {
  skillType: string;
  skillValues: string[];
  createdAt: string;
  updatedAt: string;
}

interface AboutProps {
  skills: Skill[];
}
function About({ skills }: AboutProps) {
  return (
    <section id="about" className="section about">
      <h2 className="numbered-section">01. About Me</h2>

      <div className="about-content">
        <div className="about-desc text-soft">
          <p>
            Hi! I'm Andreas, and I love building apps that make life easier. My
            passion for software development began in 2017 during my university
            internship, where I created an application that helps an aircraft
            maintenance company monitors their mechanic licenses. Even though
            not too complex, being able solving the problem and seeing the
            business owner's happiness brought me satisfaction. That's when I
            knew this was what I wanted to do.
          </p>

          <p>
            And since then, I've gained about 5 years of professional experience
            building various applications. Currently at OCBC, I'm responsible
            maintaining a CMS using Strapi that helps centralizing our asset
            management to reduce duplication and storage costs. Additionally, I
            have experience with Go and React, having used it to build
            relationship manager and file sharing web apps in a previous
            project.
          </p>

          <p>Here are a few of the tech stacks I enjoy working with:</p>

          <div className="about-stacks">
            {skills.map((skill) => {
              return (
                <div key={skill.skillType}>
                  <p className="m-0 text-dark">
                    <strong
                      style={{ textTransform: "capitalize" }}
                    >{`${skill.skillType} :`}</strong>
                  </p>
                  <div className="text-soft">
                    {skill.skillValues.join(" | ")}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="about-img">
          <img alt="me" loading="lazy" width="300" height="300" src={me} />
        </div>
      </div>
    </section>
  );
}

export default About;
