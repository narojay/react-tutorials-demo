import { Route } from "react-router-dom"
import Home from "../views/Home"
import Login from "../views/Login"

// import AsyncComponent from '@/components/AsyncComponent'
function GG() {
  return <div>asdasd123132</div>
}
function Test(props) {
  console.log(props)
  return (
    <div>
      123
      {this.props.children}
      <Route exact path="/124" component={GG} />
    </div>
  )
}

const routes = [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/12",
    component: Login
  },
  {
    component: Test,
    render: (props) => {
      console.log(props)
      return <Test {...props} />
    },
    routes: [
      {
        path: "/124",
        component: GG
      }
    ]
  }
]

export default routes
