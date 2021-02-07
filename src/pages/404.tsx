import * as React from "react"
import { Link } from "gatsby"
import PageLayout from "../layouts/page-layout"

const NotFoundPage = () => {
  return (
    <PageLayout title="Not found">
      <main>
        <h1>Page not found</h1>
        <p>
          Seem like you're lost {" "}
          <span role="img" aria-label="Pensive emoji">
            😔
        </span>{" "}
        </p>
        <Link to="/">Go home</Link>
      </main>
    </PageLayout>
  )
}

export default NotFoundPage
