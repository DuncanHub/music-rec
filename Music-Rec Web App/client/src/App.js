import 'bootstrap/dist/css/bootstrap.min.css'
import Login from './Login'
import Dashboard from './Dashboard'

//Gets the code portion from the URL
const code = new URLSearchParams(window.location.search).get('code')

//If the code is availiable, then refer to the dashboard file
function App() {
  return code ? <Dashboard code={code} /> : <Login />
}

export default App
