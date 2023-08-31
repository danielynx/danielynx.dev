import { CoursesRoot } from './Root';
import { CoursesSymfony } from './Symfony';
import { CoursesRocketseat } from './Rocketseat';
import { CoursesMongoDb } from './MongoDb';
import { CoursesFreeCodeCamp } from './FreeCodeCamp';

export const BodyCourses = {
  Root: CoursesRoot,
  Symfony: CoursesSymfony,
  Rocketseat: CoursesRocketseat,
  MongoDb: CoursesMongoDb,
  FreeCodeCamp: CoursesFreeCodeCamp,
};
