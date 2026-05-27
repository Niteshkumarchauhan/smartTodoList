# 📝 Smart Todo App

A clean and feature-rich Todo application built with **React**, designed to help you stay organized and productive.

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat&logo=react&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat&logo=javascript&logoColor=black)
![CSS3](https://img.shields.io/badge/CSS3-Styled-1572B6?style=flat&logo=css3&logoColor=white)

---

## ✨ Features

- ✅ **Add Todos** — Quickly add tasks with a clean input form
- 🎯 **Priority Levels** — Assign Low 🟢, Medium 🟡, or High 🔴 priority to each task
- ✏️ **Edit Todos** — Inline editing with keyboard shortcuts (Enter to save, Escape to cancel)
- 🗑️ **Delete Todos** — Remove tasks you no longer need
- ☑️ **Toggle Completion** — Mark tasks as done with a single click
- 🔍 **Search** — Instantly search through your todos in real-time
- 🔽 **Filter** — Filter by All, Active, Completed, or by Priority level
- 📊 **Stats** — Live count of Total, Active, and Completed tasks
- 💾 **Persistent Storage** — Todos are saved in `localStorage` so they survive page refreshes

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/SmartTodoApp.git
   cd SmartTodoApp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Project Structure

```
SmartTodoApp/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── FilterBar.js     # Filter buttons (All, Active, Completed, Priority)
│   │   ├── SearchBar.js     # Real-time search input
│   │   ├── TodoForm.js      # Add new todo form with priority selector
│   │   ├── TodoItem.js      # Individual todo item with edit/delete actions
│   │   └── TodoList.js      # Renders the list of todos
│   ├── App.js               # Root component with state management
│   ├── App.css              # Global styles
│   └── index.js             # React entry point
├── package.json
└── README.md
```

---

## 🛠️ Built With

| Technology                            | Purpose                      |
| ------------------------------------- | ---------------------------- |
| [React 18](https://reactjs.org/)      | UI framework                 |
| React Hooks (`useState`, `useEffect`) | State & lifecycle management |
| localStorage API                      | Data persistence             |
| CSS3                                  | Styling                      |

---

## 📸 App Overview

| Feature       | Description                                                     |
| ------------- | --------------------------------------------------------------- |
| 📝 Todo Form  | Input field + priority dropdown + Add button                    |
| 📊 Stats Bar  | Shows total, active, and completed task counts                  |
| 🔍 Search Bar | Filters todos as you type                                       |
| 🔽 Filter Bar | Switch between All / Active / Completed / Priority views        |
| 📋 Todo List  | Displays filtered todos with edit, delete, and complete actions |

---

## ⌨️ Keyboard Shortcuts

| Key      | Action           |
| -------- | ---------------- |
| `Enter`  | Save edited todo |
| `Escape` | Cancel editing   |

---

## 📦 Available Scripts

```bash
npm start       # Run the app in development mode
npm run build   # Build the app for production
npm test        # Launch the test runner
npm run eject   # Eject from Create React App (irreversible)
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

<p align="center">Made with ❤️ by Nitesh Kumar Chauhan</p>
<p align="center">⭐ If you like this project, give it a star!</p>
