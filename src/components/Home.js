import React, { useState } from "react"
import { Jumbotron, Button, Image } from "react-bootstrap"
import logo from "../styles/images/sportal-logo.png"
import "../styles/css/styles.css"

export default function Home() {

  return (
    <Jumbotron className="jumbotron">
    <Image src={logo} className="home-logo"/>
    <p>
        Looking to get outside? Find pickup games or leagues in your area to get started. 
    </p>
    <p>
        <Button variant="primary" href="/events">Explore</Button>
    </p>
    </Jumbotron>
  )
}