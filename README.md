# RPA dashboard frontend

The frontend used to launch RPA jobs in RPA dashboard

## Setup

Create a file called `.env.development` and define `REACT_APP_JENKINS_URL` in it

**Example**

    REACT_APP_JENKINS_URL=http://localhost:8080


build and run with

    npm start

**NOTICE**

If you are running jenkins locally make sure that CORS-support plugin is installed and configured in jenkins.

