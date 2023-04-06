import { useState, useEffect } from 'react'
import axios from 'axios'

const useForm = ({ portalId, formId, enableCookieTracking }) => {
  if (!portalId || !formId)
    throw new Error('Both portalId and formId are required.')

  const [data, setData] = useState()
  const [url, setUrl] = useState(
    `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`
  )
  const [form, setForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getHubspotUtkCookie = () => {
    const cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim()
      if (cookie.startsWith('hubspotutk=')) {
        return cookie.substring('hubspotutk='.length)
      }
    }
    return null
  }

  const fetchData = async () => {
    setIsError(false)
    setIsLoading(true)
    try {
      const formData = new FormData(form)
      const { entries } = formData

      const data = {
        fields: [...entries()].map(([name, value]) => ({ name, value })),
        context: {
          hutk: enableCookieTracking ? getHubspotUtkCookie() : null,
          pageUri: window.location.href,
          pageName: document.title
        }
      }

      const axiosConfig = {
        method: 'post',
        url,
        data,
        headers: {
          'Content-Type': 'application/json'
        }
      }

      const result = await axios(axiosConfig)

      setData(result)
      setForm(false)
    } catch (e) {
      setIsError(true)
      setForm(false)
    }

    setIsLoading(false)
  }

  useEffect(
    () => {
      if (form) {
        fetchData()
      }
    },
    [form]
  )

  const handleSubmit = e => {
    e.preventDefault()
    setForm(e.target)
  }

  return { data, isLoading, isError, handleSubmit }
}

export default useForm
