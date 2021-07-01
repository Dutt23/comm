import { Spinner } from 'react-bootstrap'

export default function Loader ({ message }) {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        // for putting it in the center
        margin: 'auto',
        display: 'block'
      }}>
      <span className='sr-only'>{message}</span>
    </Spinner>
  )
}

Loader.defaultProps ={
  message :'Loading...'
}
