import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

// import {APIProfiles} from "./models/APIProfiles";
import { Search } from "./components/Search";
import { Stock } from "./components/Stock";

import "./App.scss";
import "animate.css";

export const App: () => JSX.Element = () => {
  const [data, setData] = useState({
    companyProfiles: [{ profiles: [], symbol: "" }]
  });

  const url = "https://financialmodelingprep.com/api/v3/company/profile/";
  const stock = "AAPL,FB,TWTR,AMZN,MSFT,TSLA,GOOGL,DB,GS,CSCO,AMD";

  useEffect(() => {
    fetch(url + stock)
      .then(res => res.json())
      .then(res => setData(res));
    return () => {};
  }, [url]);

  return (
    <main id="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Search companies={data} />
          </Route>
          <Route path="/stock" exact component={Stock} />
        </Switch>
      </Router>
    </main>
  );
};

export default App;
