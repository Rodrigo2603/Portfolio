import React from "react";

import ProjectsGrid from "../ProjectsGrid";
import SectionContainer from "../SectionContainer";

export default function MoreProjects() {
  return (
    <SectionContainer id="projetos" name="projetos" headerText="Projetos" useHeaderStyle>
      <ProjectsGrid />
    </SectionContainer>
  );
}
