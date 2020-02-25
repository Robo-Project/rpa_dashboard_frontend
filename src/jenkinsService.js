import axios from 'axios'

const URL = process.env.REACT_APP_JENKINS_URL

const getAllJobs = async () => {
  const res = await axios.get(`${URL}/jobs`)
  return res.data
}

const build = async (job, parameters, branch = 'master') => {
  const res = await axios.post(`build/${URL}/${job}/${branch}`, parameters)
  return res.data
}

export default { getAllJobs, build }
