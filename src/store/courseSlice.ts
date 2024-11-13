import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User, Course } from "../types";

// Define the state interface
interface CourseState {
  courses: Course[];
  selectedCategory: string;
  currentUser: User | null;
}

const initialState: CourseState = {
  courses: [
    {
      id: "1",
      title: "Scientific Thinking",
      category: "Science",
      isNew: true,
      image: "/images/courses/science.svg",
    },
    {
      id: "2",
      title: "Introduction to Probability",
      category: "Math",
      isNew: false,
      image: "/images/courses/math.svg",
    },
    {
      id: "3",
      title: "Data Structures",
      category: "Computer Science",
      isNew: true,
      image: "/images/courses/computer-science.svg",
    },
    {
      id: "4",
      title: "Machine Learning",
      category: "Computer Science",
      isNew: false,
      image: "/images/courses/ai.svg",
    },
    {
      id: "5",
      title: "Introduction to Data Analysis",
      category: "Data",
      isNew: false,
      image: "/images/courses/data.svg",
    },
    {
      id: "6",
      title: "Introduction to Physics",
      category: "Science",
      isNew: false,
      image: "/images/courses/math.svg",
    },
    {
      id: "7",
      title: "Introduction to Chemistry",
      category: "Science",
      isNew: false,
      image: "/images/courses/science.svg",
    },
    {
      id: "8",
      title: "Introduction to Biology",
      category: "Science",
      isNew: false,
      image: "/images/courses/science.svg",
    },
    {
      id: "9",
      title: "Introduction to Astronomy",
      category: "Science",
      isNew: false,
      image: "/images/courses/science.svg",
    },
  ],
  selectedCategory: "All",
  currentUser: null,
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setSelectedCategory: (state, action: PayloadAction<string>) => {
      state.selectedCategory = action.payload;
    },
    setCurrentUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    updateCourseProgress: (
      state,
      action: PayloadAction<{ courseId: string; progress: number }>
    ) => {
      const course = state.courses.find(
        (c) => c.id === action.payload.courseId
      );
      if (course) {
        course.progress = action.payload.progress;
      }
    },
  },
});

export const { setSelectedCategory, setCurrentUser, updateCourseProgress } =
  courseSlice.actions;
export default courseSlice.reducer;
