# GitHub Profile Configuration with Firebase Hosting

This repository contains configuration files for hosting a GitHub profile on Firebase.

## Project Structure

```
.
├── firebase.json          # Firebase hosting configuration
├── .firebaserc           # Firebase project configuration
├── package.json          # Node.js project configuration
├── .gitignore           # Git ignore rules
├── public/              # Static files for Firebase hosting
│   ├── index.html       # Main HTML page
│   ├── css/
│   │   └── style.css    # Stylesheet
│   └── js/
│       └── script.js    # JavaScript
└── README.md            # This file
```

## Getting Started

### Prerequisites

- Node.js and npm installed
- Firebase account and project
- Firebase CLI installed

### Installation

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Install project dependencies:
```bash
npm install
```

3. Login to Firebase:
```bash
firebase login
```

### Local Development

Run the development server:
```bash
npm start
```

Visit `http://localhost:5000` in your browser.

### Deployment

To deploy to Firebase Hosting:

```bash
npm run deploy
```

Or use Firebase CLI directly:
```bash
firebase deploy
```

## Configuration

Update `.firebaserc` with your Firebase project ID:

```json
{
  "projects": {
    "default": "your-actual-firebase-project-id"
  }
}
```

## Features

- Static hosting on Firebase
- Responsive design
- Modern CSS styling
- JavaScript ready

## Topics

- config
- github-config
- firebase
- hosting

## License

Public Repository - MIT License

---

Created: 2026-04-08