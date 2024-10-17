import ProjectCard from "./ProjectCard";
import { project } from "./project";
function projects() {
  return (
    <div>
      <div>
        <title>Priyanshu Arya | Projects</title>
      </div>
      <div className=" bg-mainBg p-8">
        <h1 className="pb-5 text-3xl text-textColor">
          Stuff I&apos;ve Built So Far
        </h1>
        <div className=" grid gap-y-5 md:grid-cols-2 md:gap-x-5 xl:grid-cols-4">
          {project.map((p) => {
            return (
              <ProjectCard
                key={p.title}
                title={p.title}
                desc={p.description}
                img={p.image}
                srcCode={p.sourceCode}
                demo={p.demo}
                tags={p.tags}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default projects;
