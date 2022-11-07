
import { Avatar } from "@mui/material"
import React from 'react'
import './story.css'

export default function Story(props) {
  return (
  <>
  <div >
    <Avatar className="pavatar" src= {props.profile}/>
  <h6 className="storytitle">{props.title}</h6>
  </div>
  </>
  )
}
