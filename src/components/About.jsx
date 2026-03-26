import React from 'react'
import { Melek_Data } from '../utils/util'

export default function About() {

  const about = Melek_Data.about
  return (
    <>
    <header>
    <h2 className="h2 article-title">About me</h2>
  </header>

  <section className="about-text">
    <p>
      {about.aboutMe}
    </p>

    <p>
    {about.aboutMe2}
    </p>
  </section>
    </>
  )
}
