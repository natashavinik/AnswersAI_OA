export interface Course {
  id: string;
  title: string;
  category: "Math" | "Data" | "Computer Science" | "Science";
  isNew: boolean;
  image: string;
  progress?: number;
}

export interface User {
  email: string | null;
  displayName: string | null;
  name?: string;
  currentCourse?: Course;
}
