export interface ILibrary {
    id: number;
    name: string;
    description: string;
    difficulty: string;
    duration: number;
    equipment: string;
    image: string;
    instructions: string[];
    muscleGroups: string[];
    rating: number;
    reps: string;
    sets: number;
    caloriesBurned: number;
}