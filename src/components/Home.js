import React, { useState } from "react"
import { Jumbotron, Button, Image } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import logo from "../styles/images/sportal-logo.png"

export default function Home() {

  return (
    <Jumbotron>
    <Image src={logo} className="w-50"/>
    <p>
        Looking to get outside? Find pickup games or leagues in your area to get started. 
    </p>
    <p>
        <Button variant="primary" href="/events">Explore</Button>
    </p>
    </Jumbotron>
  )
}