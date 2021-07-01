import { useState } from 'react'
import Loader from '../components/loader'

export const isLoadingHoc = (WrapperComponent, message) => {

  
  function HOC(props) {
    const [isLoading, setLoading] = useState(true)
    const setLoadingState = componentLoading => {
      setLoading(componentLoading)
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