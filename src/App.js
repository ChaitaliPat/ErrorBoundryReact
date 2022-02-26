import React, { Component } from 'react'
import Hero from './Hero';
import './App.css';
import ErrorBoundry from './ErrorBoundries'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <ErrorBoundry>
          <Hero heroName="Batman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName="Superman" />
        </ErrorBoundry>
        <ErrorBoundry>
          <Hero heroName="Joker" />
        </ErrorBoundry>
      </div>
    )
  }
}
