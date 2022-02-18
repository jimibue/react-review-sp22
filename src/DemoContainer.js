import { useState } from "react";

const DemoContainer = (props) => {
  const [showContent, setShowContent] = useState(true);
  return (
    <div className="demo-container">
      <div>
        <h1>{props.header}</h1>
        <button onClick={() => setShowContent(!showContent)}>
            {showContent ? 'hide' : 'show'}
        </button>
      </div>
      {showContent && props.children}
    </div>
  );
};
export default DemoContainer;
