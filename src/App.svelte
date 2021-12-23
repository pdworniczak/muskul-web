<script lang="ts">
  import { Router, Route, Link } from 'svelte-navigator'
  import Program from './components/Program.svelte'
  import Add from './components/Add.svelte'
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
