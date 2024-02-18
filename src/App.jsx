import './App.css'

function App() {

  return (
    <div className='app'>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
      
  )
}

export default App;

function Logo(){
  return <h1>✈ Far Away 💼</h1>
}

function Form(){
  return(
    <div className='add-form'>
      <h3>What do you need for your 😍 trip? </h3>
    </div>
  )
}
function PackingList(){
  return <div className='list'>LIST</div>
}
function Stats(){
  return(
    <footer className='stats'>
      <em>💼 You Have x item on your list,and you already packed X (X%)</em>
    </footer>
  )
}