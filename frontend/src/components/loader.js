import { Spinner } from 'react-bootstrap'

export default function Loader({ message }) {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
        position: 'fixed', 
        top: '50%',
        left: '50%',
        backgroundColor: 'transparent'
      }}
    >
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

Loader.defaultProps = {
  message: 'Loading...'
}
