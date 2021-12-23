import type { Training, TrainingDefinition } from "../types/pushups";
import { definition } from "./pushups";

export function getNextTraining(training: Training): TrainingDefinition{
    const { scope, day, result} = training;

    return 
}