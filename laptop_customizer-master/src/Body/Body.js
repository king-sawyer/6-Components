import React from "react";
import Summary from "../Summary/Summary.js";
import MainForm from "../MainForm/MainForm.js";

function Body(props) {
  return (
    <main>
      <MainForm
        features={props.features}
        handleChange={props.handleChange}
        currentVal={props.currentVal}
      />
      <Summary summary={props.summary} total={props.total} />
    </main>
  );
}
export default Body;
