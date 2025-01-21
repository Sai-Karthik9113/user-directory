# User Directory

This is a React-based application designed for managing a directory of users. The application allows users to be added, edited, and deleted. The app fetches data from a mock backend API to simulate a real-world environment.

## Purpose

This project demonstrates proficiency in:
- React concepts like state management and component structure.
- Working with APIs using Axios for data fetching.
- Implementing basic CRUD operations with form handling.
- Properly organizing and styling a React application with CSS Modules and Material UI.

## Features

- **Add a New User:** Allows the creation of a new user by providing a form with name, email, and company information.
- **Edit User:** Edit existing users by clicking on their details and updating the form.
- **Delete User:** Removes a user from the directory upon deletion.
- **Loading State:** Displays a loading spinner while waiting for the API to return user data.
- **Input Validation:** Ensures valid email addresses are entered before submitting forms.

## Setup Instructions

### 1. Clone the repository:

```bash
git clone https://github.com/Sai-Karthik9113/user-directory.git
cd user-directory
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the application:

```bash
npm start
```

Visit `http://localhost:3000` in your browser to interact with the app.

## Application Workflow

1. The app fetches existing users from an external API at the start.
2. A user can be added through a form, and on submit, a new user object is sent to the backend.
3. A user can be updated using a form, which is pre-filled with existing data if editing.
4. Users can be deleted by clicking the trash icon next to their name.

## Technologies Used

- **React.js:** JavaScript framework for building interactive user interfaces.
- **Axios:** HTTP client used for making API requests.
- **CSS Modules:** Provides localized CSS for styling.
- **Material UI:** Enhances the UI with circular loaders while fetching data.

## API Integration

The app integrates with **JSONPlaceholder** to manage user data:
- `GET /users`: Fetches all users.
- `POST /users`: Adds a new user.
- `PUT /users/{id}`: Updates an existing user.
- `DELETE /users/{id}`: Deletes a user.

## Purpose of this Assignment

This assignment was built to demonstrate my ability to build a small but functional CRUD app. By completing this, I was able to practice several aspects of React, handle backend API integration, and properly manage state in a single-page application.

## Usage

**View**: A list of users will be shown on the homepage.
**Add**: Click "Add User" to open a form for submitting new user details.
**Edit**: Click "Edit" next to a user to modify their details.
**Delete**: Click "Delete" to remove a user.

## Error Handling

- If the API fails, an error message will appear.
- Fields on the form are validated for empty values before submission.

## Challenges & Reflections

- The main challenge was handling state properly for dynamically updating users.
- Given more time, I would have enhanced the client-side validation by removing any pronouns or initials at the beginning or end of the name, and extracting only the first name and last name (if available).
- I would have further improved the UI by refining it for a better mobile experience.

## License

This project is licensed under the MIT License.