import { ErrorObject } from 'ajv'
import React, { useEffect, useState } from 'react'

interface IFieldErrorProps {
  fieldKey: string
  errors: Array<ErrorObject<string, Record<string, any>, unknown>> | null | undefined
}

const FieldError = ({ fieldKey, errors }: IFieldErrorProps): JSX.Element => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMessage, setErrorMessage] = useState<string | null>()

  useEffect(() => {
    if (errors == null) {
      setHasError(false)
    } else {
      const fieldErrors = errors.filter((error) => error.instancePath === fieldKey)
      setHasError(fieldErrors.length > 0)
      if (fieldErrors.length > 0) {
        setErrorMessage(fieldErrors[0].message)
      }
    }
  }, [errors, fieldKey])

  return (<React.Fragment>
    {hasError && <span className="text-red-600">{errorMessage}</span>}
  </React.Fragment>)
}

export default FieldError
