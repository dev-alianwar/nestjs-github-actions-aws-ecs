## Nestjs with AWS S3
Nest.js application with REST APIs to upload and stream file from S3

## Github Action Tagging and Branch release 
- Github Action will test branch when a pull-request is open
- Github action will test in case a branch is merged into master or code is pushed
- Github action will create tags after testing if feature/*, fix/* or hotfix/* branch is merged into master 
- Github will build code
- Finally, Github action will deploy build to ECS

## How to run project

This repository gives example of streaming file upload to AWS S3 bucket and retrieving them from S3 bucket using Nest.js. Further, it will show how AWS S3 ACL works

## Pre-requisites 


## Install Dependencies

Create .env and past content .env.example file

Install nvm and run

```
nvm install
```
and 

```
nvm use

```
Install packages

```
npm install

```
## Set up local database

Run in the root of the project

```
docker-compose up 
```

# Access swagger 
Swagger will be at /api/v1/docs. If running locally then http://localhost:port/api/docs

# Author
Ali Anwar

