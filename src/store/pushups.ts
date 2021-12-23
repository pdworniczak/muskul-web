import { writable, derived } from 'svelte/store'
import { definition } from '../definition/pushups'
import type { Training, Scope } from '../types/pushups'


export const trainings = writable<Training[]>([])
export const lastestTraining = derived(trainings, $pushups => $pushups.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  )[0]);

export const getNextTraining = (training: Training) => {
  const isTrainingSuccessfull = training.scope === 'test' || Object.values(definition[training.scope][training.day]).every((val, i) => training.expected)
}