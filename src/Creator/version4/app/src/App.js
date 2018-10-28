import React, { Fragment } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Layout from './components/layout'
import Loading from './components/loading'
import DatabasePage from './pages/database'
import NewCharacterPage from './pages/new-character'

import './App.scss'

const App = ({sessionCheckLoading, sessionExist}) => {
  return (
    <Router>
      <Fragment>
        {
          sessionCheckLoading &&
          <Loading/>
        }
        {
          !sessionExist &&
          <NewCharacterPage/>
        }
        {
          sessionExist &&
          <Layout>
            <Route path="/" exact component={DatabasePage}/>
          </Layout>
        }
      </Fragment>
    </Router>
  )
}

const mapStateToProps = ({appContext}) => ({
  sessionCheckLoading: appContext.session.loading,
  sessionExist: (!appContext.session.loading) && appContext.session.exist
})

export default connect(mapStateToProps)(App)
