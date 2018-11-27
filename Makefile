aws_package:
	aws cloudformation package \
	--template-file './infrastructure/master.yml' \
	--s3-bucket micro-list-serverless-deploy \
	--output-template-file './infrastructure/pkg/master-template-output.yml' \
	&& make aws_deploy

aws_deploy: 
	aws cloudformation deploy \
	--template-file './infrastructure/pkg/master-template-output.yml' \
	--capabilities 'CAPABILITY_NAMED_IAM' \
	--stack-name micro-list-serverless
	
aws_rebuild:
	make aws_package && make aws_deploy

aws_destroy_stack:
	aws cloudformation delete-stack --stack-name micro-list-serverless

aws_describe_stack:
	aws cloudformation describe-stacks --stack-name micro-list-serverless

aws_validate_template:
	aws cloudformation validate-template --template-body file://infrastructure/pkg/master-template-output.yml 

seed_sample_data:
	aws dynamodb batch-write-item --request-items file://data/sample_services_data.json

