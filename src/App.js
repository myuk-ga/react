import React from "react";
import "./App.css";
import ArrowFunction from "./chapter03/ArrowFunction";

function App() {
  return (
    <div>
      <h1>Start React !!</h1>
      <p>CSS 적용하기</p>
      <ArrowFunction />
    </div>
  );
}

/*
import React from "react";
import "./App.css";
import ClassPrototype from "./chapter03/ClassPrototype";

function App() {
  return (
    <div>
      <h1>Start React !!</h1>
      <p>CSS 적용하기</p>
      <ClassPrototype />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import PropsNode from "./chapter03/PropsNode";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsNode>
        <span>node from App.js</span>
      </PropsNode>
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import PropsDefault from "./chapter03/PropsDefault";

function App() {
  return (
    <div>
      <h1>Start React !!</h1>
      <p>CSS 적용하기</p>
      <PropsDefault ReactNumber={200} />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import PropsRequired from "./chapter03/PropsRequired";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <PropsRequired ReactNumber={200} />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import PropsObjVal from "./chapter03/PropsObjVal";

function App() {
  return (
    <div>
      <h1>Start React!!</h1>
      <p>CSS 적용하기</p>
      <PropsObjVal ObjectJson={{ react: "리액트", twohundred: "200" }} />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import PropsBoolean from "./chapter03/PropsBoolean";

function App() {
  return (
    <div>
      <h1>Start React!!</h1>
      <p>CSS 적용하기</p>
      <PropsBoolean BooleanTrueFalse={false} />
      <PropsBoolean BooleanTrueFalse />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import D_PropsDatatype from "./chapter03/D_PropsDatatype";
//import C_LifecycleEx from "./chapter03/C_LifecycleEx";
//import LifecycleEx from "./chapter03/LifecycleEx";

function App() {
  return (
    <div>
      <h1>Start React !!</h1>
      <p>CSS 적용하기</p>
      <D_PropsDatatype
        String="react"
        Number={200}
        Boolean={1 == 1}
        Array={[0,1,8]}
        ObjectJson={{ react: "리액트", twohundred: "200" }}
        Function={console.log("FunctionProps: function!")}
      />
    </div>
  );
}
*/
/*
function Welcome(props){
  return <h1>Hello, {props.name}</h1>
}

function App() {
  return (
    <div>
      <Welcome name="Mike" />
      <Welcome name="Steve" />
      <Welcome name="Jane" />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
//import Es6 from "./chapter03/Es6";
import SpreadOperator from "./chapter03/SpreadOperator";
//import S_Props from "./chapter03/S_Props";
//import ImportComponent from "./chapter02/ImportComponent";

function App() {
  return (
    <div>
      <h1>Start React !!</h1>
      <p>CSS 적용하기</p>
      <SpreadOperator />
    </div>
  );
}
*/
export default App;