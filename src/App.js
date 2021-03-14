import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/Home'

// O Router é o que encapsula todas as rotas para buscar as páginas da aplicação
// O Switch auxilia na troca de rotas dinamicamente
// o Route é o component que recebe a rota e renderiza a página passada como prop

const App = () => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App