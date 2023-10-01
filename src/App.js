import { useState } from 'react';
import './App.css';
import data from './data'
import SingleQuestion from './Question';

function App() {

  const [questions] = useState(data)
  return (
    <main className="App">
        <div className="container">
          <h1>Questions</h1>
          <section className='info'>
          {questions.map((question) => {
            return (
              <SingleQuestion key={question.id} {...question}></SingleQuestion>
            );
          })
          }
          </section>
        </div>
    </main>
  );
}

export default App;
