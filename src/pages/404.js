import * as React from "react"
import { Link } from "gatsby"

const NotFoundPage = () => {
  return (
    <main>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Seem like you're lost {" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        <br />
        <br />
        <Link to="/">Go home</Link>
      </p>
    </main>
  )
}

export default NotFoundPage
