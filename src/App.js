import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import PostDetail from './pages/PostDetail'
import PostArchive from './pages/PostArchive'
import About from './pages/About'
import useFetch from './hooks/useFetch' 
import ShoeFinder from './pages/ShoeFinderPage'
import { Switch, Route, useRouteMatch  } from "react-router-dom"


const App = () => {
  const { loading, error, data } = useFetch('/posts')

  require('dotenv').config()

  const match = useRouteMatch('/post/:id')
  console.log(match)
  const post = match
    ? data.find(post => post.id === Number(match.params.id))
    : null
  
  if (loading) return(<p> loading </p>)
  if (error) console.log(error)

  return (
    <div id="appbody" >
      <Header />
      <Switch>
        <Route path="/finder">
          <ShoeFinder />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/post/:id">
          <PostDetail post={post}/>
        </Route>
        <Route path="/archive">
          <PostArchive />
        </Route>
        <Route path="/">
          <Home posts={data}/>
        </Route>
      </Switch>
    </div>
  )
}

export default App
