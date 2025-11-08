import { CourseFreeCodeCamp } from "./FreeCodeCamp";
import { CourseMongoDb } from "./MongoDb";
import { CourseRocketseat } from "./Rocketseat";
import { CourseRoot } from "./Root";
import { CourseSymfony } from "./Symfony";

export const AppCourse = {
    Root: CourseRoot,
    Symfony: CourseSymfony,
    Rocketseat: CourseRocketseat,
    MongoDb: CourseMongoDb,
    FreeCodeCamp: CourseFreeCodeCamp,
};
