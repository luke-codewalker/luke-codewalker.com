import * as React from "react"
import { Link } from "gatsby"
import PageLayout from "../layouts/page-layout"
import { formatTitle } from '../utils/format-title'
import { CustomHead } from '../components/head'

const NotFoundPage = () => {
  return (
    <PageLayout>
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

export function Head() {
  return <CustomHead title="Not found"></CustomHead>
}