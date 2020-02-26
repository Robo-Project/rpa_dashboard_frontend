# RPA dashboard frontend

The frontend used to launch RPA jobs in RPA dashboard

## Setup

Create a file called `.env.development` and define `REACT_APP_JENKINS_URL` in it

The `JENKINS_URL` should be the address where jenkins-service is running

**Example**

    REACT_APP_JENKINS_URL=http://localhost:4000


## Manually

install dependencies with

    `npm install`

build and run with

    `npm start`

## Using Docker

run with `docker-compose up`

connect to `localhost:5000`


