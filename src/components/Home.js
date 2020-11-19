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
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
    </p>
    <p>
        <Button variant="primary" href="/events">Find Events</Button>
    </p>
    </Jumbotron>
  )
}