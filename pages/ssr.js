import React, { Component } from 'react'
import Head from 'next/head'
import Header from '../layout/header'
import  testdiv, { globalcss } from '../style/style'
import axios from 'axios'

export default class Ssr extends Component {
  static async getInitialProps () {
    var data = {};
    await new Promise((resolve) => {
      const request = axios.get('http://api.tvmaze.com/search/shows?q=girls').then(res => {
        data = {shows : res.data}
        resolve(res.data)

      }).catch(function(error) {
        console.log(error)
      })
    })
    return {data}
  }

 Shows(props) {
    const listShows = props.shows.map((tv) =>
      <li key={ tv.show.id }>
        { tv.show.name } | score - { tv.score }
      </li>
    );
    return (
      <ul>{ listShows }</ul>
    );
  }

  render () {
    return (
      <div>
        <div className="wrapper">
          <Head>
            <title>SSR</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          </Head>
          <Header />
          <p>SSR Page!</p>
          <p>{ this.Shows(this.props.data) }</p>
          <style jsx>{ testdiv }</style>
          <style jsx global>{ globalcss }</style>
        </div>
      </div>
    )
  }
}
