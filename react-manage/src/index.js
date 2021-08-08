import React from "react"
import ReactDOM from "react-dom"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Switch } from "react-router-dom"
import AuthRoute from "./routes/AuthRoute"
import routes from "./routes/index.js"
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <AuthRoute routerConfig={routes} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()