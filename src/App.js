import React, { useState } from 'react'
import data from './data'
import List from './List'

function App() {
  const [value, setValue] = useState(data)
  return (
    <main>
      <section className="container">
        <h3>{value.length} birthdays today</h3>
        <List people={value}/>
        <button type="button" onClick={() => setValue([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
