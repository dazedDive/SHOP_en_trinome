import React from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HomeScreen() {
  return (
    <Container>
    <Link to="/" className="me-2">Home</Link>
    <Link to="/collection" className="me-2">Collection</Link>
    <Link to="/artists" className="me-2">Artistes</Link>
    <Link to="/top" className="me-2">Les Tops</Link>
    <Link to="/cart" className="me-2">Mon panier</Link>
    <Link to="/admin" className="me-2"></Link>
    </Container>
  )
}

export default HomeScreen