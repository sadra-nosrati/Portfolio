import TimelineBoxs from "./TimelineBoxs";
import TimelineHeader from "./TimelineHeader";

function ProjectTimeline() {
  return (
    <section id="projects" className="mx-auto mt-32 w-full max-w-7xl px-4">
      <TimelineHeader />

      <div className="relative">
        <TimelineBoxs />
      </div>
    </section>
  );
}

export default ProjectTimeline;
