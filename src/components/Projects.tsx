import type { FC } from "react";

interface ProjectsProps {
  title: string;
  url: string;
}

const Projects: FC<ProjectsProps> = ({ title, url }) => {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="block my-10 ml-10 text-6xl tracking-wider text-[var(--color-dark-gray)]"
      >
        {title}
      </a>
      <hr className="w-[1040px] text-[var(--color-soft-gray)]" />
    </div>
  );
};

export default Projects;
