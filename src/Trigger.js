import React from 'react'
import jenkinsService from './jenkinsService'
import Button from 'react-bootstrap/Button';

function Trigger ({ label, job, parameters }) {
  return (
    <Button variant="outline-dark" type='button' onClick={() => jenkinsService.build(job, parameters)}>{label}</Button>
  )
}

export default Trigger
