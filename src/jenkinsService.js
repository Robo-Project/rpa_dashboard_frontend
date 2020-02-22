import axios from 'axios'

const URL = process.env.REACT_APP_JENKINS_URL

const getAllJobs = async () => {
  const res = await axios.get(`${URL}/api/json`)
  return res.jobs.map(job => job.name)
}

const buildWithParameters = async (job, parameters, branch = 'master') => {
  const stringQuery = Object.entries(parameters)
    .map(e => `${e[0]}=${e[1]}`)
    .reduce((a, c) => `${a}&${c}`)
  const res = await axios.post(`${URL}/job/${job}/job/${branch}/buildWithParameters/?${stringQuery}`)
  return res.data
}

const build = async (job, branch = 'master') => {
  const res = await axios.post(`${URL}/job/${job}/job/${branch}/build`)
  return res.data
}

export default { getAllJobs, buildWithParameters, build }