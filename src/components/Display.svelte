<script lang="ts">
  import type { Training } from '../types/pushups'
  import { getExpectedResults } from '../store/pushups'

  export let data: Training = null
</script>

<article>
  <div>Scope: {data.scope}</div>
  <div>
    Date: {new Intl.DateTimeFormat('pl-PL', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(data.date)}
  </div>
  <div>Day: {data.day}</div>
  <div>Serie: {data.result}</div>
  <div>Expected: {getExpectedResults(data)}</div>
</article>
