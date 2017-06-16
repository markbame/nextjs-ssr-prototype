import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../layout/header'
import  testdiv, { globalcss } from '../style/style'
export default class About extends Component {
  static async getInitialProps () {
    // await new Promise((resolve) => {
    //   setTimeout(resolve, 500)
    // })
    return {}
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>About</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header />
          <p>About Page!</p>
          <style jsx>{testdiv}</style>
          <style jsx global>{globalcss}</style>
        </div>
      </div>
    )
  }
}
