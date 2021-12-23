<script lang="ts">
  import { trainings, lastestTraining } from '../store/pushups'
  import Display from './Display.svelte'
  import type { Training } from '../types/pushups'

  const today = new Date()

  trainings.update((p1) => [
    ...p1,
    {
      date: new Date(today.setDate(today.getDate() - 5)),
      day: 1,
      scope: '11-20',
      result: [11, 12, 8, 8, 13],
      expected: [],
    },
    {
      date: new Date(today.getTime()),
      day: 3,
      scope: '11-20',
      result: [11, 12, 8, 8, 13],
      expected: [],
    },
    {
      date: new Date(today.setDate(today.getDate() - 3)),
      day: 2,
      scope: '11-20',
      result: [11, 12, 8, 8, 13],
      expected: [],
    },
  ])
  // const training: Training = {
  //   date: new Date(),
  //   day: ,
  //   scope: ,
  //   expected: ,
  //   result: []
  // };
</script>

<section>
  <header>Add</header>
  <article>
    {#if $lastestTraining}
      Training {JSON.stringify($lastestTraining)}
    {/if}
    {#each $trainings as training}
      <Display pushupsTraining={training} />
    {/each}
  </article>
</section>
