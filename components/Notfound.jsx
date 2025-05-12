import React from 'react'
import {useRouteError} from 'react-router-dom'
const Notfound = () => {
  const error = useRouteError();

  return (
    <div>
      Page Not Found.{error.status}
    </div>
  )
}

export default Notfound