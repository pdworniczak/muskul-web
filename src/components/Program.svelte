<script lang="ts">
  import { definition } from "../definition/pushups";

  export let program = definition;
</script>

<section>
  <header><h2>Program</h2></header>
  <div>
    {#each Object.getOwnPropertyNames(program) as scope}
      <article>
        <header>{scope}</header>
        <div>
          {#each Object.getOwnPropertyNames(program[scope]) as day}
            <div style="margin-left: 1rem;">
              {day}
              {#each Object.getOwnPropertyNames(program[scope][day]) as training}
                <div>
                  <span style="margin-left: 2rem;">{training}: </span><span
                    >{program[scope][day][training]}</span
                  >
                </div>
              {/each}
            </div>
          {/each}
        </div>
      </article>
    {/each}
  </div>
</section>

<style>
  section > div {
    display: grid;
    grid-template-columns: 50% 50%;
    background-color: aqua;
  }
</style>
