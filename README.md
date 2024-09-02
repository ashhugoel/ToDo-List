# Task Tracker

The Task Tracker is a powerful web application designed to help you efficiently manage and organize your tasks. Built using React and Material-UI, it offers a modern and intuitive interface for creating, editing, deleting, and searching tasks. The application is carefully structured with a component-based architecture, ensuring modularity and ease of maintenance. Its responsive design adapts seamlessly to various devices and screen sizes, providing a smooth and consistent user experience whether you're on a desktop, tablet, or mobile device. With features aimed at enhancing productivity and task management, the Task Tracker is the perfect tool for staying organized and on top of your to-dos.

Demo Video Link : https://drive.google.com/file/d/1FYgejRSXxDh6bZTS8ptHHK9gLl1aInc2/view


## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Components](#components)
- [Future Enhancements](#future-enhancements)

## Installation

Instructions on how to install and run this project.

**Clone the repository:**

```sh
git clone https://github.com/ashhugoel/ToDo-List.git
  ```

**Navigate into the project directory**
```sh
cd ToDo-List
```

**Install dependencies**
```sh
npm install
cd Backend/
npm install
  ```
**To start**
```sh
npm run dev
cd Backend/
nodemon index.js 
  ```

## Features

- **Add Task:** Create new tasks with details including title, description, due date, and priority. The form is dynamically displayed upon user interaction, allowing for easy and intuitive task creation.
- **Edit Task:** Modify existing tasks with a user-friendly interface. Users can update all task details and save changes, ensuring that task information is always current and accurate.
- **Delete Task:** Remove tasks with a single click. This feature helps keep the task list current and relevant by allowing users to easily delete tasks that are no longer needed.
- **Search Tasks:** Utilize a search bar to filter tasks by title. This feature helps users quickly find specific items in the task list, enhancing usability and efficiency.
- **Due Dates:** Assign due dates to tasks and view them in a user-friendly format. This helps users keep track of deadlines and manage their tasks effectively.
- **Priority Levels:** Set task priorities (Low, Medium, High) to help users prioritize their tasks. The priority levels are displayed clearly, assisting in task management and organization.
- **Responsive Design:** The application is designed to be responsive, providing a seamless experience across different devices and screen sizes. This ensures that users can access and use the application comfortably on any device.

## Components

### `App`
* **Description:** The main component that wraps the entire application, including the router and main layout. It serves as the entry point and integrates various parts of the application.

### `Header`
* **Description:** Displays the application title and includes the search bar for filtering tasks. It provides a consistent header across all pages.

### `SearchBar`
* **Description:** Allows users to input search terms to filter the list of tasks. This component provides real-time search functionality to help users find specific tasks quickly.

### `Form`
* **Description:** Provides a form for adding new tasks or editing existing ones. It includes fields for title, description, due date, and priority, allowing users to manage task details effectively.

### `Item`
* **Description:** Represents an individual task. It displays task details and provides options to edit or delete the task. Clicking on the task opens a detailed view for more information.

### `Detail`
* **Description:** Displays detailed information about a specific task in a modal view. It includes options to edit or delete the task, providing a focused view of task details.


## Future Enhancements

- **Authentication:** Implement user authentication and authorization features to secure the application and manage user permissions. This will enable different levels of access and protect sensitive data.

- **Pagination:** Add pagination to the task list to handle large datasets more efficiently. This will enhance performance and make it easier for users to navigate through extensive lists of tasks.

- **Export Data:** Develop functionality to export task data as CSV or Excel files. This will allow users to easily share and report their tasks outside the application.

- **Notifications:** Introduce notifications to alert users about important actions, such as the addition or modification of tasks. This will provide real-time feedback and improve user engagement.

- **Dashboard:** Create a comprehensive dashboard to offer insights and statistics about tasks. This feature will enhance data visualization and support better decision-making by providing an overview of task trends and metrics.
