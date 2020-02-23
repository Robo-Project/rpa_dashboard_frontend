import React from 'react'
import jenkinsService from './jenkinsService'

function Trigger ({ label, job, parameters }) {
  return (
    <button type='button' onClick={() => jenkinsService.build(job, parameters)}>{label}</button>
  )
}

export default Trigger
