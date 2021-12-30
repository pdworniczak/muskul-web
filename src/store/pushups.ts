import { writable, derived } from 'svelte/store'
import { definition } from '../definition/pushups'
import type { Training, Scope, EmptyTraining } from '../types/pushups'

export const trainings = writable<Training[]>([])
export const latestTraining = derived(trainings, $pushups => $pushups.sort(
    (a, b) => b.date.getTime() - a.date.getTime()
  )[0]);

export const getNextTraining = (training: Training | null): Training => {
  const nextTraining: EmptyTraining = {
    date: new Date()
  }
  
  if (training) {
    if (isTrainingSuccess(training)) {
      if (isLastDay(training)) {
        nextTraining.scope = 'test'
        nextTraining.day = 0
        nextTraining.result = []
      } else {
        nextTraining.scope = training.scope
        nextTraining.day = training.day + 1
        nextTraining.result = []
      }
    } else {
      if (nextTraining.date.getDate() - training.date.getDate() > 7) {
        nextTraining.scope = 'test'
        nextTraining.day = 0
        nextTraining.result = []
      } else {
        nextTraining.scope = training.scope
        nextTraining.day = 1
        nextTraining.result = []
      }
    }
  } else {
    nextTraining.scope = 'test'
    nextTraining.day = 0
    nextTraining.result = []
  }

  return nextTraining as Training
  
};

const isTrainingSuccess = (training: Training) => {
  if (training.scope === 'test') {
    return true;
  }

  return training.result.every((val, i) => val >= getExpectedResults(training)[i])
}

const isLastDay = (training: Training) => {
  const lastDay = parseInt(Object.keys(definition[training.scope]).at(-1), 10)

  return training.day === lastDay
}

export const getExpectedResults = (training: Training) => {
  return Object.values(definition[training.scope][training.day])
}