import { useState } from 'react'
import Login from './components/Login'
import { Container } from 'react-bootstrap'

function App() {

  return (
      <Container
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Login />
        </div>
      </Container>
  )
}

export default App
