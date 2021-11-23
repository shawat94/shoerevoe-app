import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { useHistory } from 'react-router-dom'
import SearchBar from '../components/SearchBar'
import ArchiveTable from '../components/ArchiveTable'

const PostArchive = () => {  
  
  const [ searchTerm, setSearchTerm ] = useState('')

  const history = useHistory()
  
  const handleRowClick = (post) => {
    history.push(`/post/${post.id}`)
  } 

  const { loading, error, data } = useFetch('http://localhost:1337/posts')

  if (loading) return(<p> loading </p>)
  if (error) return(error)

  return(
    <div>
      <div style={{ marginTop: '30px'}}>
        <h1 align="center">Post Archive</h1>
      </div>
      <div style={{ marginLeft: '150px', marginRight: '150px' }}>
        <SearchBar setSearchTerm={setSearchTerm}/>
        <ArchiveTable data={data} searchTerm={searchTerm} handleRowClick={handleRowClick} />
      </div>
    </div>
  )
}

export default PostArchive