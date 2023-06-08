import Coverflow from "./coverflow";
import Music from "./music";
import Games from "./games";
import Settings from "./settings";

const Menu=(props)=> {
  
  return (
    <div style={{ backgroundColor: "aqua", height: "45%" }} id="head">
      <div class="menu-div">
        <h3> Ipod.js</h3>

        <Coverflow handleDivSelection={props.handleDivSelection}/>

        <Music handleDivSelection={props.handleDivSelection}/>

        <Games handleDivSelection={props.handleDivSelection}/>

        <Settings handleDivSelection={props.handleDivSelection}/>
      </div>
    </div>
  );
}

export default Menu;
