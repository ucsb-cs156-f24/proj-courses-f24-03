import React, { useState } from "react";

import SingleSubjectDropdown from "main/components/Subjects/SingleSubjectDropdown";
import {
  oneSubject,
  threeSubjects,
  allTheSubjects,
} from "fixtures/subjectFixtures";

export default {
  title: "components/Subjects/SingleSubjectDropdown",
  component: SingleSubjectDropdown,
};

const Template = (args) => {
  const [subjects, setSubject] = useState(args.subjects[0]);

  return (
    <SingleSubjectDropdown
      subjects={subjects}
      setSubject={setSubject}
      controlId={"SampleControlId"}
      label={"Subject"}
      {...args}
    />
  );
};

export const OneSubject = Template.bind({});
OneSubject.args = {
  subjects: oneSubject,
};

export const ThreeSubjects = Template.bind({});
ThreeSubjects.args = {
  subjects: threeSubjects,
};

export const AllTheSubjects = Template.bind({});
AllTheSubjects.args = {
  subjects: allTheSubjects,
};

export const OneSubjectShowAll = Template.bind({});
OneSubjectShowAll.args = {
  subjects: oneSubject,
  showAll: true,
};

export const ThreeSubjectsShowAll = Template.bind({});
ThreeSubjectsShowAll.args = {
  subjects: threeSubjects,
  showAll: true,
};

export const AllTheSubjectsShowAll = Template.bind({});
AllTheSubjectsShowAll.args = {
  subjects: allTheSubjects,
  showAll: true,
};
