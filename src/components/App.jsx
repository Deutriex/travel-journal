import React from "react";
import Header from "./Header.jsx";
import Entry from "./Entry.jsx";
import appData from "../controller/data.js";

class App extends React.Component {
  render(){
    const entries = appData.map(x => <Entry key={x.id} {...x} />)
    console.log(entries)

    return (
      <>
        <Header />
        <main>
          {entries}
        </main>        
      </>
    );
  }
}

export default App;
