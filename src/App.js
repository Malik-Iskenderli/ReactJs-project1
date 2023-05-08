import Navbar from "./Components/Navbar";
import Home from "./Components/Routers/Home";
import Form from "./Components/Routers/Form";
import Users from "./Components/Routers/Users";
import Employe from "./Components/Routers/Employe";
import Product from "./Components/Routers/Product";
import React, { useEffect, useState } from "react";
import { Routes,Route, json } from "react-router-dom";
import "./Components/Sass/App.scss"




function App() {

  //reng modunun deismesinin State-i
  const [theme, setTheme] = useState(JSON.parse(localStorage.getItem("theme")))

  useEffect(()=>{
    localStorage.setItem("theme" , JSON.stringify(theme))
  },[theme])
  
  const Tabs =[
   {
     path: "/home",
     element:<Home/>,
     name: "Home",
     icon: <i className="bi bi-house"></i>
  },
  {
    path: "/form",
    element: <Form/>,
    name:"Form",
    icon: <i className="bi bi-archive"></i>
  },
  {
    path: "/users",
    element: <Users/>,
    name:"Users",
    icon: <i className="bi bi-people"></i>
  },
  {
    path: "/employe",
    element: <Employe/>,
    name:"Employe",
    icon: <i className="bi bi-bar-chart-line"></i>
  },
  {
    path: "/product",
    element: <Product/>,
    name:"Product",
    icon: <i className="bi bi-shop"></i>
  }
  
  
  ]

  return (
    <div className={theme ? "dark" : ""}>
    

    <Navbar Tabs={Tabs}  theme= {theme} setTheme={setTheme}/>
    
    <Routes>
      {
        Tabs.map((item,key)=>(
        
          <>
          
          <Route  path={item.path} element={item.element}/>

          </>
        ))
      }
    </Routes>

    


    </div>
  );
}

export default App;
