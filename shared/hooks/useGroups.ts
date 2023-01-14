import { useEffect, useState } from "react"
import { get } from "../HTTP"
import { IGroup } from "../types"

const useGroups = () => {

    const [groups , setGroups] = useState<IGroup[]>([])


    const fetchGroups = async() => {
        const response = await get('/api/groups')
        const data = await response.json()
        setGroups(data.data)
    }

    useEffect(() => {
        fetchGroups()
    }, [])

    return groups

}

export default useGroups