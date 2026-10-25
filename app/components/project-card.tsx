import type { Project } from "../projects";

export default function ProjectCard({ project }: { project: Project }) {
  const isScheduling = project.name === "Lurkk";

  return (
    <article className="project-card">
      <div className="project-preview" role="img" aria-label={`${project.name} interface concept`}>
        <div className="preview-panel">
          <div className="preview-topbar"><span className="preview-brand">{project.name.toLowerCase()}</span><span>{isScheduling ? "CALENDAR ASSISTANT" : "MY WORKSPACE"}</span><span aria-hidden="true">•••</span></div>
          <div className="preview-body">
            <span className="preview-label">{project.previewLabel}</span>
            <strong className="preview-title">{project.previewTitle}</strong>
            {isScheduling && <div className="calendar-strip"><span>MON <b>20</b></span><span>TUE <b>21</b></span><span className="day-selected">WED <b>22</b></span><span>THU <b>23</b></span><span>FRI <b>24</b></span></div>}
            {project.previewRows.map(([label, time], index) => isScheduling ? (
              <div className={index === 0 ? "meeting-request" : "meeting-result"} key={label}>
                {index === 0 ? <><small>YOU SAID</small>{label}</> : <><b>{label}</b><span>{time}</span></>}
              </div>
            ) : (
              <div className="preview-row" key={label}><i>{index === 0 ? "✓" : ""}</i><span>{label}</span><small>{time}</small></div>
            ))}
            <div className="preview-callout"><b>✳</b><span>{project.previewInsight}</span></div>
          </div>
        </div>
      </div>
      <div className="project-info">
        <div className="project-title-row"><h3>{project.name}</h3><span className="project-type">{project.type}</span></div>
        <p className="project-description">{project.description}</p>
        <ul className="stack-list" aria-label={`Technology stack for ${project.name}`}>
          {project.stack.map((technology) => <li key={technology}>{technology}</li>)}
        </ul>
      </div>
    </article>
  );
}