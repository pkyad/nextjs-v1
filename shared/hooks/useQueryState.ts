import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const useQueryState = (key: string, val: any): [string, (v: any) => void] => {
  const router = useRouter()
  const { query } = router
  const [initialValue] = useState(val)
  const [queryKey] = useState(key)
  const [value, setValue] = useState<any>(val)

  const updateQueryParam = (v: any): void => {
    if (v === null) {
      setValue(initialValue)

      void router.replace({
        query: { ...router.query, [queryKey]: null }
      })
      return
    }
    setValue(v)
    void router.replace({
      query: { ...router.query, [queryKey]: v.toString() }
    })
  }

  useEffect(() => {
    if (query[queryKey] === null) {
      setValue(query[queryKey])
    }
  }, [query, queryKey])

  return [value, updateQueryParam]
}

export default useQueryState
