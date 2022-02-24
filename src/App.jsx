import './App.css';
import Profile from './profile/Profile';
import image from './profile/profile.jpg';

function App() {
  const handleName = (name) => {
    alert(`Hi, I am ${name}, thanks for the click ;)`)
  }

  return (
    <div className="App">
      <Profile 
        fullName="redouaneFaras" 
        profession="MERN Stack Student"
        bio="professional transition from SupplyChain Manager to FullStack Developer with MERN.js"
        handleName={handleName}>
        <img src={image} alt="Meee!"></img>    
      </Profile>
    </div>
  );
}

export default App;
