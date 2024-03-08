import HeaderSection from "./Components/HeaderSection";
import './App.css'
function App() {
  let metaData = {
    colors:{
      testGray: "#A5A19C",
      gray: "#A3A29E",
      pinkRed: "#9A1F48"


    }
  }
  return (
    <div>
      <HeaderSection metaData={metaData} />
    </div>
  );
}

export default App;
