# FitLog

A dark-themed fitness web app built with Next.js and Tailwind CSS. It helps gym-goers browse workouts, check exercise details with instructions, add lifts to a daily plan, and save exercises for later.

## Live Demo & Repository
- **Live Demo:** [Add your Vercel/Netlify link here]
- **Repository:** https://github.com/habiba97q/FITLOG

## Features
1. **Workout Library**: Browse 12 major lifts covering every muscle group in a responsive grid layout.
2. **Dynamic Sorting**: Sort workouts by duration, calories burned, or rating with real-time updates.
3. **Workout Details**: Dedicated page for each lift showing equipment, sets, reps, duration, calories burned, rating, and step-by-step instructions.
4. **My Plan & Daily Log**: Add up to 5 lifts to today's workout plan and track total exercises, minutes, and estimated calories burned in real time.
5. **Mark as Done & Remove**: Check off completed lifts in today's plan with visual feedback or remove them when needed.
6. **Save for Later**: Keep a separate list of bookmarked workouts to build future workout routines.
7. **Local Storage Persistence**: Saved workouts and daily plan data stay saved even after reloading the page.
8. **Responsive Design & 404 Page**: Works smoothly on mobile, tablet, and desktop screens with custom 404 handling.

## Technologies Used
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4 & DaisyUI
- React Toastify
- Google Fonts (Oswald & Geist)

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/habiba97q/FITLOG.git
cd FITLOG
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints
- Workouts List: `https://api.abcz.workers.dev/api/fitlog`
- Single Workout: `https://api.abcz.workers.dev/api/fitlog/:id`
