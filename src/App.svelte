<script lang="ts">
  import { Router, Route, Link } from 'svelte-navigator'
  import Program from './components/Program.svelte'
  import Add from './components/Add.svelte'
  import { trainings } from './store/pushups'

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
</script>

<Router>
  <header><h1>Muskul</h1></header>
  <nav>
    100pompek
    <Link to="/add">Dodaj</Link>
    <Link to="/list">Lista</Link>
    <Link to="/program">Program</Link>
    <Link to="/">Powrót</Link>
  </nav>
  <main>
    <Route path="/"><header>Witaj!</header></Route>
    <Route path="add">
      <Add />
    </Route>
    <Route path="list">
      <header>Lista</header>
    </Route>
    <Route path="program"><Program /></Route>
  </main>
  <footer>copyrignt</footer>
</Router>
