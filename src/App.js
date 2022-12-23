import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Article from "./pages/Article";
import Articles from "./pages/Articles";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/profiles/:username" element={<Profile />} />
      <Route path="/articles" element={<Articles />}>
      <Route path=":id" element={<Article />} />
      </Route>
    </Routes>
  )
}

/*
import React from "react";
import R_Sweetalert2Basic from "./chapter07/R_Sweetalert2Basic";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <R_Sweetalert2Basic />
    </div>
  );
}
*/
/*
import { useState } from "react";
import Info from "./chapter07/Info";

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => {
        setVisible(!visible);
      }}>
        {visible ? "숨기기": "보이기"}
      </button>
      <hr />
      {visible && <Info />}
    </div>
  );
}
*/
/*
import React from "react";
import Counter1 from "./chapter07/Counter1";

function App() {
  return(
    <div>
      <Counter1 />
    </div>
  )
}
*/
/*
import React from "react";
import Counter from "./chapter07/Counter";

function App() {
  return(
    <div>
      <Counter />
    </div>
  )
}
*/
/*
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapTab from "./chapter06/R_ReactstrapTab";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <R_ReactstrapTab />
    </div>
  );
}
*/
/*
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapSpinner from "./chapter06/R_ReactstrapSpinner";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <R_ReactstrapSpinner />
    </div>
  );
}
*/
/*
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapNavbar from "./chapter06/R_ReactstrapNavbar";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <R_ReactstrapNavbar />
    </div>
  );
}
*/
/*
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapPagination from "./chapter06/R_ReactstrapPagination";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <R_ReactstrapPagination />
    </div>
  )
}
*/
/*
import React from "react";
//import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapProgress from "./chapter06/R_ReactstrapProgress";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapProgress />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapPopover from "./chapter06/R_ReactstrapPopover";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapPopover />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapModal from "./chapter06/R_ReactstrapModal";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapModal />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapListGroup from "./chapter06/R_ReactstrapListGroup";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapListGroup />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapForm from "./chapter06/R_ReactstrapForm";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapForm />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_onMouseMove from "./chapter06/R_onMouseMove";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_onMouseMove />
    </div>
  )
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_onChange from "./chapter06/R_onChange";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_onChange />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_Promise from "./chapter06/R_Promise";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_Promise />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Toggle from "./chapter06/Toggle";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <Toggle />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapFade from "./chapter05/R_ReactstrapFade";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapFade />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapCollapse from "./chapter05/R_ReactstrapCollapse";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapCollapse />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapCarousel from "./chapter05/R_ReactstrapCarousel";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapCarousel />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapCard from "./chapter05/R_ReactstrapCard";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapCard />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapButtons from "./chapter05/R_ReactstrapButtons";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapButtons />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapButtonGroup from "./chapter05/R_ReactstrapButtonGroup";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapButtonGroup />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapDropdown from "./chapter05/R_ReactstrapDropdown";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapDropdown />
      </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import R_ReactstrapBreadcrumbs from "./chapter05/R_ReactstrapBreadcrumbs";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapBreadcrumbs />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import R_ReactstrapBadges from "./chapter05/R_ReactstrapBadges";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ReactstrapBadges />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import R034_ReactstrapAlerts from "./chapter05/R034_ReactstrapAlerts";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R034_ReactstrapAlerts />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import R_FunctionComponent from "./chapter01/R_FunctionComponent";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_FunctionComponent contents="[ THIS IS FunctionComponent ]" />
    </div>
  );
}
*/
/*
import React from 'react';
import './App.css';
import R_PureComponentClass from './chapter02/R_PureComponentClass';


function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_PureComponentClass />
    </div>
  );
}
*/
/*
import React from 'react';
import './App.css';
import R_ComponentClass from './chapter02/R_ComponentClass';

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_ComponentClass />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import R_SetState from "./chapter02/R_SetState";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <R_SetState />
    </div>
  );
}
*/
/*
import React from "react";
import "./App.css";
import ReactState from "./chapter02/ReactState";

function App() {
  return (
    <div>
      <h1>Start React 200!</h1>
      <p>CSS 적용하기</p>
      <ReactState reactString={"react"} />
    </div>
  )
}
*/
/*
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
*/
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