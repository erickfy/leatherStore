import { Link } from '@mui/material'
import React from 'react'

function NotFound() {
  return (
        <div className="not-found">
            <h1>Ooooops...</h1>
            <h2>that page cannot be found.</h2>
            <p>Go back to the <Link href="/">HomePage</Link></p>

        </div>
    )
}

export default NotFound