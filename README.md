# Micro List (serverless)
 An app that lists out AWS serverless functions


# Instructions
- Buy domain name:
- 

- ```make aws_package```
- ```make aws_deploy```
- Update ```./config.json``` aws_appsync_graphqlEndpoint & aws_appsync_apiKey
- update sample_services_data.json with your DynamoDB Table  (micro-list-serverless-StorageStack-*********-Services) & run ```make seed_sample_data```
- ```npm start``` -> localhost:8080. You should see a list of services
- ```npm run build```
- grab the S3 bucket, IE: micro-list-serverless-uistack-******-sitebucket-*****
- Sync up the dist ```aws s3 sync './dist' "s3://micro-list-serverless-uistack-******-sitebucket-*****/" --acl 'public-read'```
- Visit the URL https://s3.amazonaws.com/micro-list-serverless-uistack-******-sitebucket-*****/index.html


# TODO
- Dynamic seed storage name
- config in .env
- webpack environment split
- Better outputs to list resources from console
- DNS + Cloudfront through cloudformation
- 1 command setup everything