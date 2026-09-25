# FitLog

FitLog is a dark-themed gym companion and workout library web application. It allows users to explore exercises covering all major muscle groups, inspect detailed workout specifications, manage a daily training plan with live metrics, and save lifts for later routines.

## Project Links
- **Live Site:** https://fitlog-theta-sandy.vercel.app
- **GitHub Repository:** https://github.com/habiba97q/FITLOG

## Features
- **Workout Library**: Displays 12 major lifts with muscle category tags, equipment needs, duration, calories burned, and ratings in a responsive grid.
- **Dynamic Sorting**: Filter and re-sort workouts by duration, calories, or rating.
- **Workout Details**: Dedicated view showing equipment, difficulty, sets, reps, duration, calories, and numbered step-by-step instructions.
- **Today's Plan**: Add up to 5 lifts for today's routine with live metric calculations for exercises, minutes, and calories burned.
- **Mark as Done & Remove**: Check off completed exercises in today's plan with visual feedback or remove items.
- **Saved Workouts**: Bookmark favorite exercises to a separate tab for later workouts.
- **Toast Notifications**: Interactive notifications using React Toastify when adding, removing, or completing workouts.
- **Local Storage**: Automatically saves your plan and bookmarks in the browser so data survives reloads.
- **Responsive Layout**: Designed for mobile, tablet, and desktop screens with custom 404 error handling.

## Technologies Used
- Next.js (App Router)
- React
- TypeScript
- Tailwind CSS
- React Toastify

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/habiba97q/FITLOG.git
cd fitlog-app
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.
