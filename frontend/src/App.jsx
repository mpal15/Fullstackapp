import { useState ,useEffect} from 'react'
import './App.css';
import axios from 'axios';


function App() {
  const [joke ,setJoke] = useState([]);

  useEffect(()=>{
    axios.get('/api/joke').then((res)=>{
      setJoke(res.data)
    }).catch((error)=>{
      console.log(error);
    })
  },[])
  return (
    <>
      
      <h1> Chai and full Stack</h1>
      <p>Jokes:{joke.length}</p>
      {
        joke.map((joke)=>(
          <div key={joke.id}>
            <h3>
              {joke.title}
              </h3>
              <p>{joke.content}</p>
            </div>
        ))
      }
    </>
  )
}

export default App
