
import './App.css'
import { Greet } from './components/Greet'
import Login from './components/Login'
import { Person } from './components/Person'
import { PersonList } from './components/PersonList'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'

function App() {

  // const person = {
  //   first: "Peter",
  //   last: "Parker",
  // }

  // const personList = [{
  //   first: "Peter",
  //   last: "Parker",
  // },
  // {
  //   first: "Rohit",
  //   last: "Rasam",
  // },
  // {
  //   first: "Ameya",
  //   last: "Thopte",
  // }]

  return (
    // <>
    //   <Greet name="Rohit" messageCount={11} isLoggedIn={true} />
    //   <Person name={person} />
    //   {personList.map(person => {
    //     return(
    //       <h2>
    //         {person.first}
    //       </h2>
    //     )
    //   })}
    //   <PersonList names={personList}/>
    // </>
    <UserContextProvider>
      {/* aware of context provider as they are wrapped in it*/}
      <h1>Wrapped components are aware of the contex provider.</h1>
      <Login /> 
      <Profile />
    </UserContextProvider>
  )
}

export default App
