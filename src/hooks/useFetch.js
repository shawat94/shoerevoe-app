import { useEffect, useState } from "react"
import axios from 'axios'

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  const baseUrl = process.env.BACKEND_URL

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      
      try {
        const response = await axios.get(baseUrl + url)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  console.log({ loading, error, data })

  return { loading, error, data }
}

export default useFetch