import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App'
import Container from './elements/container'
import SignIn from './components/signIn'
import LogIn from './components/logIn'
import ExpensesByCategory from './components/expensesByCategory'
import ExpensesList from './components/expensesList'
import EditExpense from './components/editExpense'

const Index = () => (
  <React.StrictMode>
    <Container>
      <Router>
        <Routes>
          <Route exact path="/sign-in" element={<SignIn />} />
          <Route exact path="/log-in" element={<LogIn />} />
          <Route exact path="/expenses-category" element={<ExpensesByCategory />} />
          <Route exact path="/expenses-list" element={<ExpensesList />} />
          <Route exact path="/edit/:id" element={<EditExpense />} />
          <Route path="/" element={<App />} />
        </Routes>
      </Router>
    </Container>
  </React.StrictMode>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
)
