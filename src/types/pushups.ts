export type Scope = 'test' | '0-5' | '6-10' | '11-20' | '21-25' | '26-30' | '31-35' | '36-40' | '41-45' | '46-50' | '51-55' | '56-60' | '61-100'

export type Day = number

export type Series = Record<number, number>

export type Training = {
    scope: Scope
    day: Day
    date: Date,
    result: number[],
}

export type EmptyTraining = {
    scope?: Scope
    day?: Day
    date?: Date,
    result?: number[],
}

export type TrainingDefinition = Record<Scope, Record<Day, Series>>