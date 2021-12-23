<script lang="ts">
  import type { Training } from '../types/pushups'

  export let pushupsTraining: Training = null
</script>

<article>
  <div>Scope: {pushupsTraining.scope}</div>
  <div>
    Date: {new Intl.DateTimeFormat('pl-PL', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(pushupsTraining.date)}
  </div>
  <div>Day: {pushupsTraining.day}</div>
  <div>Serie: {pushupsTraining.result}</div>
</article>
