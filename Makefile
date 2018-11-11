aws_package:
	aws cloudformation package \
	--template-file './infrastructure/master.yml' \
	--s3-bucket micro-list-serverless \
	--output-template-file './infrastructure/pkg/master-template-output.yml'

aws_deploy: 
	aws cloudformation deploy \
	--template-file './infrastructure/pkg/master-template-output.yml' \
	--capabilities 'CAPABILITY_NAMED_IAM' \
	--stack-name micro-list-serverless

aws_destroy_stack:
	aws cloudformation delete-stack --stack-name micro-list-serverless

aws_describe_stack:
	aws cloudformation describe-stacks --stack-name micro-list-serverless

seed_sample_data:
	aws dynamodb batch-write-item --request-items file://data/sample_services_data.json