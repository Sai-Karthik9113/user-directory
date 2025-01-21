import EmplpoyeeTable from './components/UserList/UserList'
import Button from './components/Button/Button'
import './App.css'

function App() {

  return (
    <>
      <div className='heading-container'>
        <h1 align="left"> User Directory </h1>
        <Button
          text="Add User" 
          style={{
            backgroundColor: 'green',
            padding: '7.5px 15px',
            borderRadius: '5px'
          }}
        />
      </div>
      <EmplpoyeeTable />
    </>
  )
}

export default App
