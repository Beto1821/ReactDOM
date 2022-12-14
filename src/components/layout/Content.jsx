    import "./Content.css";
    import React from "react";
    import { Route, Routes } from "react-router-dom";
        
    import Home from "../../views/examples/Home";
    import About from "../../views/examples/About";
    import Param from "../../views/examples/Param";
    import NotFound from "../../views/examples/NotFound";
     
    const Content = props => (
      <main className="Content">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/param/:id" element={<Param />} />
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    );
     
    //  https://reactrouter.com/docs/en/v6/getting-started/overview 

    export default Content;