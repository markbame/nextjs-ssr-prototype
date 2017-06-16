import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../layout/header'
import  testdiv, { globalcss } from '../style/style'
export default class Cart extends Component {
  static async getInitialProps () {
    
    return {}
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>Cart</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header />
          <p>Cart Page!</p>
          <style jsx>{testdiv}</style>
          <style jsx global>{globalcss}</style>
        </div>
      </div>
    )
  }
}
