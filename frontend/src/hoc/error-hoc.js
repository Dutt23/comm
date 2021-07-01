import { useState } from 'react'
import Loader from '../components/loader'

export const errorHoc = (WrapperComponent, message) => {

  
  function HOC(props) {
    const [isError, setError] = useState(true)
    const setErrorState = componentError => {
      setError(componentLoading)
    };

    return (
      <>
        {isLoading && <Loader message={message} />}
        <WrapperComponent {...props} setLoading={setLoadingState} />
      </>

    )
  }

  return HOC;
}