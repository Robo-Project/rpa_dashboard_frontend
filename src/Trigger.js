import React from 'react'
import jenkinsService from './jenkinsService'

function Trigger ({ label, job, parameters, branch = 'master' }) {
  if (!parameters) {
    return (
      <button type='button' onClick={() => jenkinsService.build(job, branch)}>{label}</button>
    )
  }
  return (
    <button type='button' onClick={() => jenkinsService.buildWithParameters(job, parameters, branch)}>{label}</button>
  )
}

export default Trigger
