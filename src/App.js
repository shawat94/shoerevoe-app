import React from 'react'
import Home from './pages/Home'
import Header from './components/Header'
import PostDetail from './pages/PostDetail'
import PostArchive from './pages/PostArchive'
import About from './pages/About'
import useFetch from './hooks/useFetch' 
import { Switch, Route, useRouteMatch } from "react-router-dom"

const App = () => {
  const { loading, error, data } = useFetch('http://localhost:1337/posts')

  const match = useRouteMatch('/post/:id')
  console.log(match)
  const post = match
    ? data.find(post => post.id === Number(match.params.id))
    : null
  
  if (loading) return(<p> loading </p>)
  if (error) console.log(error)

  console.log(data[0].id)

  return (
    <div>
      <Header />
      <Switch>
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
