import { useState } from "react";

interface Work {
  id: number;
  description: string[];
  startDate: string;
  endDate: string;
  currentJob: boolean;
  role: string;
  location: string;
  company: string;
  createdAt: string;
  updatedAt: string;
}

interface WorkSectionProps {
  work: Work[];
}

function WorkSection({ work }: WorkSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const activeWork = work[activeTab];

  return (
    <section id="work" className="section work">
      <h2 className="numbered-section">02. Work</h2>

      <div className="work-tabs-wrapper">
        <div className="work-tabs">
          {work.map((item, index) => {
            let cx = "work-tab-button";
            if (index === activeTab) {
              cx = `${cx} active`;
            }
            return (
              <button
                key={item.id}
                className={cx}
                onClick={() => setActiveTab(index)}
              >
                {item.company}
              </button>
            );
          })}
        </div>
        <div className="work-tab-content">
          <h3 className="m-0">
            {activeWork.role} @ {activeWork.company}
          </h3>
          <p className="text-soft">
            {activeWork.startDate + " - " + activeWork.endDate}
          </p>
          <ul className="work-resposibilities">
            {activeWork.description.map((item, index) => (
              <li
                className="work-resposibilities-item text-soft"
                key={index}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
