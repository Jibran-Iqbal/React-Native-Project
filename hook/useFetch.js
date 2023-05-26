import { useState, useEffect } from "react";
import axios from 'axios'
import {RAPID_API_KEY} from '@env'

const rapidApiKey = RAPID_API_KEY

const useFetch = (endpoint, query) => {
    // console.log({...query})
    // console.log(endpoint,"kkkkkkk", query)
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        // params: {
        //   query: query,
        //   page: '1',
        //   num_pages: '1'
        // },
        params: {
          ...query,
        },
        headers: {
          'X-RapidAPI-Key': RAPID_API_KEY,
          'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        }
      };
      
      const fetchData = async() => {
        setIsLoading(true);
      
        try {
          const response = await axios.request(options)
      
          setData(response.data.data)
          setIsLoading(false)
          
        } catch (error) {
          setError(error);
          alert("There is an error")
          console.log(error)
        }
        finally{
          setIsLoading(false)
        }
      }

      useEffect(() => {
        fetchData()
      },[])

      const refetch = () => {
        setIsLoading(true)
        fetchData()
      }

      return {data, isLoading, error, refetch}
}

export default useFetch