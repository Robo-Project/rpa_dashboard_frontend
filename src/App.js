import React, { useState, useEffect } from 'react'
import jenkinsService from './jenkinsService'
import Trigger from './Trigger'
import Iframe from 'react-iframe'

function App () {
  const [jobs, setJobs] = useState([])

  useEffect(() => {
    jenkinsService.getAllJobs()
      .then(jobs => setJobs(jobs))
  }, [])

  return (
    <div>
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
      <div>
        <Iframe url="http://localhost:3000/d-solo/qjch3YsZk/rpa-board?orgId=1&refresh=5s&from=1582719729380&to=1582723329380&panelId=2"
          width="400px"
          height="350px"
          display="initial"
          position="relative"
          allowFullScreen />

        <Iframe url="http://localhost:3000/d-solo/qjch3YsZk/rpa-board?orgId=1&refresh=5s&panelId=14"
          width="900px"
          height="350px"
          display="initial"
          position="relative"
          allowFullScreen />

        <Iframe url="http://localhost:3000/d-solo/qjch3YsZk/rpa-board?orgId=1&refresh=5s&from=1582739017206&to=1582742617206&panelId=12"
          width="350px"
          height="350px"
          display="initial"
          position="relative"
          allowFullScreen />
      </div>
    </div>
  )
}

export default App
