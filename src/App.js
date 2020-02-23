import React, { useState, useEffect } from 'react'
import jenkinsService from './jenkinsService'
import Trigger from './Trigger'

function App () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jenkinsService.getAllJobs()
      .then(jobs => setJobs(jobs))
  })

  return (
    <div>
      {jobs.map((job, i) => {
        return (
          <li key={i}>
            {job.name}
            <Trigger label='launch' job={job.name} />
          </li>
        )
      })}
    </div>
  )
}

export default App
