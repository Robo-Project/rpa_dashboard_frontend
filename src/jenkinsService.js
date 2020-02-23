import jenkinsapi from 'jenkins'

const URL = process.env.REACT_APP_JENKINS_URL
const jenkins = jenkinsapi({
  baseUrl: URL,
  promisify: true
})

const getAllJobs = async () => {
  const jobs = await jenkins.job.list()
  return jobs
}

const build = async (job, parameters) => {
  const res = await jenkins.job.build(job, parameters)
  return res
}

export default { getAllJobs, build }
