import { useState } from "react";

const DemoContainer = (props) => {
  // state to 
  // https://reactjs.org/docs/hooks-overview.html
  const [showContent, setShowContent] = useState(true);
  return (
    <div className="demo-container">
      <div>
        <h1>{props.header}</h1>
        <button onClick={() => setShowContent(!showContent)}>
            {showContent ? 'hide' : 'show'}
        </button>
      </div>
      {/* props.children allows us to nest jsx with in our component 
      see APP.js for example */}
      {/* short circuit evaulation here with showContent && ..  */}
      {showContent && props.children}
    </div>
  );
};
export default DemoContainer;
