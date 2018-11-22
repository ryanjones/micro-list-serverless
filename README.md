# Micro List (serverless)
 An app that lists out AWS serverless functions


# Instructions
- Buy domain name from route 53
- ```make aws_package```
- ```make aws_deploy```
- Approve all SSL cert emails (can't be automated through cloudformation)
- Update ```./config.json``` aws_appsync_graphqlEndpoint & aws_appsync_apiKey
- update sample_services_data.json with your DynamoDB Table  (micro-list-serverless-StorageStack-*********-Services) & run ```make seed_sample_data```
- ```npm start``` -> localhost:8080. You should see a list of services
- ```npm run build```
- grab the S3 bucket, IE: www.micro-serverless.com
- Sync up the dist ```aws s3 sync './dist' "s3://www.micro-serverless.com" --acl 'public-read'```
- Make sure the domain name servers have been updated to match the hosted zone domain name servers (can't be done with cloudformation from what I can see)
- Visit the URL www.micro-serverless.com or micro-serverless.com. It will redirect to https and www.


# TODO
- DNS + Cloudfront through cloudformation
- Redirect s3 bucket from naked domain to www.
- Dynamic seed storage name
- config in .env
- webpack environment split
- Better outputs to list resources from console
- 1 command setup everything
- Set hosted zone NS/SOA records via cloudformation??? Can this be done?

aws s3 sync './dist' "s3://www.micro-serverless.com" --acl 'public-read'
