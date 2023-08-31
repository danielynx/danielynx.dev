export const TabEnum = {
  OVERVIEW: 'Overview',
  SKILLS: 'Skills',
  COURSES: 'Courses',
} as const;

export type TabEnum = (typeof TabEnum)[keyof typeof TabEnum];
