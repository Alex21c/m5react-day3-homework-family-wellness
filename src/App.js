import HeaderSection from "./Components/HeaderSection";
import BodySection from "./Components/BodySection";
import FooterSection from "./Components/FooterSection";
import './App.css'
import './Assests/fontAwesomeProIcons/fontAwesomeIcons.css'
function App() {
  return (
    <div class='wrapperApp pt-[1rem] p-[2rem]'>
      <HeaderSection />
      <BodySection />
      <FooterSection />
    </div>
  );
}

export default App;
