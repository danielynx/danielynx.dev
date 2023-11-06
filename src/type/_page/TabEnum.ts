export const TabEnum = {
  OVERVIEW: 'Overview',
  PROJECTS: 'Projects',
  COURSES: 'Courses',
} as const;

export type TabEnum = (typeof TabEnum)[keyof typeof TabEnum];
