import React from "react";
import "./App.css";
import jsonData from "./CollegeBasketballTeams.json";

// Defining what each basketball team
interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

// The shape of the JSON data containing basketball teams
interface TeamData {
  teams: TeamProps[];
}

// Extracting the teams array from the imported JSON data
const basketballTeams: TeamProps[] = (jsonData as TeamData).teams;


// Component to display a single basketball team
class Team extends React.Component<TeamProps> {
  render() {
    const { school, name, city, state } = this.props;

    return (
      <div className="team-card">
        <h2>{school.toUpperCase()}</h2>
        <p>Mascot: {name}</p>
        <p className="location">
          Location: {city}, {state}
        </p>
      </div>
    );
  }
}

  
// Component to render a list of basketball teams
function TeamList() {
  return (
    <div className="team-list">
      {basketballTeams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

// Main App component
function App() {
  return (
    <div className="App">
      <header>
        <h1 className="raleway-black">
          COLLEGE
          <br />
          BASKETBALL
          <br />
          TEAMS
        </h1>
      </header>
      <TeamList />
    </div>
  );
}

export default App;
