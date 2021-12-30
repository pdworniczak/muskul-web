<script lang="ts">
  import { latestTraining, getNextTraining } from '../store/pushups'
  import Display from './Display.svelte'
</script>

<section>
  <header>Add</header>
  <article>
    {#if $latestTraining}
      Training {JSON.stringify($latestTraining)}
    {/if}
    Latest Training
    <Display data={$latestTraining} />
    Next training
    <Display data={getNextTraining($latestTraining)} />
  </article>
</section>
