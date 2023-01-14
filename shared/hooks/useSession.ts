
import { useCookies }  from 'react-cookie'
import { useState , useEffect } from 'react';
import { IAgent } from '../types';
import { get } from '../HTTP';
import { URLS } from '../constants';

const useSession = () => {
    const [cookies , setCookies , removeCookie] = useCookies([ 'token' ])
    
    const [user , setUserObj] = useState<IAgent | null | undefined>()
    const [loading , setLoading] = useState<boolean>(true)
    const [isVendor , setIsVendor] = useState<boolean>(false)
    const fetchUser = async(token : string) => {
        const response = await get(URLS.GET_CURRENT_SESSION)
        const data = await response.json()
        setUserObj(data)
        setLoading(false)

        data.metaData.forEach((element:any) => {
            if (element.key === 'IS_VENDOR' && element.value === '1') {
                setIsVendor(true)
            }
        });

        return data;
    }

    useEffect(() => {
        if(cookies.token) {
            // fetch the user details from the server
            fetchUser(cookies.token)
        }else{
            setLoading(false)
        }
    }, [cookies])

    const clearSession = () => {
        removeCookie('token');
        setUserObj(null);
    }
    
    const setSession = (token: string) => {
        setCookies('token' , token);
    }
    const setUser = (user : IAgent) => {
        setUserObj(user);
    }

    const hasPermission = (key: string) => {
        user?.metaData?.forEach(element => {
            if (element.key === key) {
                return true
            }
        });
        return false
    }
    const getMetaValue = (key: string) => {
        if (user?.metaData) {
            for (let i = 0; i < user?.metaData.length; i++) {
                const element = user?.metaData[i];
                if (element?.key === key) {
                    return element.value
                }
            }
        }
    }

    return {user , setSession , clearSession, setUser, loading, hasPermission, getMetaValue, isVendor}

}

export default useSession;