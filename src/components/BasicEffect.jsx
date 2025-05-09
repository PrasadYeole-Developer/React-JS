import { useEffect } from "react";

let BasicEffect = () => {
  useEffect(() => {
    console.log("Use Effect Rendered");
  }, []);

  return <h1>Check the Console</h1>;
};

export default BasicEffect;
