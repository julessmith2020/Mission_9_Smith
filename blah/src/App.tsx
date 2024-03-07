import React from "react";
import "./App.css";
import jsonData from "./CollegeBasketballTeams.json";

interface TeamProps {
  school: string;
  name: string;
  city: string;
  state: string;
}

interface TeamData {
  teams: TeamProps[];
}

const basketballTeams: TeamProps[] = (jsonData as TeamData).teams;

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

function TeamList() {
  return (
    <div className="team-list">
      {basketballTeams.map((team, index) => (
        <Team key={index} {...team} />
      ))}
    </div>
  );
}

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
