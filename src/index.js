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
import Background from './elements/background'
import { AuthProvider } from './context/authContext'
import ProtectedRoute from './components/privateRoutes'
import { TotalExpenseAmountProvider } from './context/monthlyAmountContext'

const Index = () => (
  <>
    <Container>
      <AuthProvider>
        <TotalExpenseAmountProvider>
          <Router>
            <Routes>
              <Route exact path="/sign-in" element={<SignIn />} />
              <Route exact path="/log-in" element={<LogIn />} />
              <Route exact path="/category" element={<ProtectedRoute />}>
                <Route path="/category/" element={<ExpensesByCategory />} />
              </Route>
              <Route exact path="/history" element={<ProtectedRoute />}>
                <Route path="/history/" element={<ExpensesList />} />
              </Route>
              <Route exact path="/edit/:id" element={<ProtectedRoute />}>
                <Route path="/edit/:id/" element={<EditExpense />} />
              </Route>
              <Route path="/" element={<ProtectedRoute />}>
                <Route path="/" element={<App />} />
              </Route>
            </Routes>
          </Router>
        </TotalExpenseAmountProvider>
      </AuthProvider>
    </Container>
    <Background />
  </>
)

ReactDOM.render(
  <Index />,
  document.getElementById('root'),
)
