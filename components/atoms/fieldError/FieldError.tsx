import { ErrorObject } from "ajv";
import { useEffect, useState } from "react";



interface IFieldErrorProps{
    fieldKey : string,
    errors : ErrorObject<string, Record<string, any>, unknown>[] | null | undefined
}

const FieldError = ({fieldKey , errors}: IFieldErrorProps) => {
    
    const [hasError , setHasError] = useState<boolean>(false)
    const [errorMessage , setErrorMessage] = useState<string | null>()


    useEffect(() => {
        if(!errors){
            setHasError(false)
        }else{
            
            const fieldErrors = errors.filter((error) => error.instancePath === fieldKey)
            setHasError(fieldErrors.length > 0)
            if(fieldErrors.length > 0){
                setErrorMessage(fieldErrors[0].message)
            }
        }
    } , [errors , fieldKey])

    if(!hasError){
        return null
    }
    
    return <>
        <span className="text-red-600">{errorMessage}</span>
    </>
};

export default FieldError;
