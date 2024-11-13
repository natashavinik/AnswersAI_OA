# AnswersAi Frontend Engineer Take-Home Assessment

## Overview

This project is a simplified version of Brilliant's learning platform (https://brilliant.com), focusing on the landing page, authentication flow, and course dashboard. The goal is to showcase my ability to implement modern web interfaces while demonstrating expertise in React, TypeScript, and state management.

## Setup and Development Instructions

1. **Clone the Repository**

   ```bash
   git clone [YOUR_REPOSITORY_URL]
   cd brilliant-clone
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the root directory and add the following:

   ```
   VITE_FIREBASE_API_KEY=your_firebase_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. **Start the Development Server**
   ```bash
   npm run dev
   ```
   By default, the application will be running on http://localhost:5173/. If you've configured a different port, please check your terminal output for the correct address!

## Features Implemented

1. **Landing Page**

   - Hero section with "Learn by doing" headline and iPad visual.
   - Category icons row (Math, Data Analysis, Computer Science, etc.).
   - Social proof section with user count and ratings.
   - Navigation header with a login button.
   - Hover states and smooth transitions for interactive elements.

2. **Authentication Flow**

   - Simple authentication using Google OAuth and email/password options.
   - Registration form with required fields.
   - Error state handling for authentication errors.
   - Loading states during authentication.
   - Redirect to dashboard after successful authentication.

3. **Course Dashboard**

   - Welcome section with a progress indicator.
   - "Jump back in" section to continue the current course.
   - Course recommendation cards for new courses.
   - Course catalog view with category filter tabs (Math, Data, Computer Science, Science) and course cards with "New" badges.

4. **Responsive Design**
   - Implemented a desktop-first approach with mobile and tablet adaptations.
   - Utilized Tailwind CSS for responsive layouts and spacing.

## Technical Decisions and Trade-offs

1. **React & TypeScript**: The project was built using React 18+ and TypeScript to ensure type safety and easy maintenance.

2. **State Management with Redux Toolkit**: I chose Redux Toolkit for state management to manage user authentication, course data, and category filters efficiently. While simpler solutions like React Context could have worked, Redux Toolkit provided a more scalable and maintainable solution for future extension.

3. **Tailwind CSS for Styling**: Tailwind CSS was used for rapid and consistent styling throughout the project. It allowed for flexible, utility-first styles that made it easy to match the Figma designs precisely.

4. **Firebase for Authentication**: Firebase was chosen for authentication (using Google OAuth and email/password) as it provides a simple way to manage user auth and offers a straightforward integration with React.

## Known Limitations

1. **Limited Features**: Due to the time constraints, only the core functionality of the platform was implemented. Additional features like course progress tracking or more complex interactions are not fully realized.

2. **UI Simplifications**: Some design aspects were simplified to prioritize functionality over exact visual matches, as indicated by the Figma designs.

3. **No Real Backend**: The project relies on dummy data for courses and Firebase for user authentication. There is no backend to store or manage user progress persistently.

4. **Loading States**: Basic loading states were implemented for authentication, but further UI polish could be added to enhance the user experience.

## Time Spent

- **Total Time**: Approximately 5 hours.

## Additional Notes

- **Dummy Data**: All course content is dummy data as requested in the brief.
- **Consistency**: Maintained consistent loading/error states throughout.
- **Edge Cases**: Considered edge cases like invalid login attempts or accessing protected routes without authentication.

## Questions?

If you have any questions or need further clarification, please feel free to email me or reach out via LinkedIn. Thank you for the opportunity to work on this project!
