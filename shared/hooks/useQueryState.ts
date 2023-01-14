import {useState, useEffect} from 'react';
import { useRouter } from 'next/router'


const useQueryState = (key:string, val: any) => {
    const router = useRouter();
    const {query} = router
    const [initialValue, setInitialValue] = useState(val)
    const [queryKey, setQueryKey] = useState(key);
    const [value, setValue] = useState<any>(val);

    const updateQueryParam = (v:any)=> {
        if (!v) {
            setValue(initialValue)

            router.replace({
                query: { ...router.query, [queryKey]: null},
            });
            return
        }
        setValue(v)
        router.replace({
            query: { ...router.query, [queryKey]: v.toString() },
        });
    }

    useEffect(()=> {
        if (query[queryKey]) {
            setValue(query[queryKey] )
        }
    }, [query, queryKey])


    return [value, updateQueryParam]
}

export default useQueryState;