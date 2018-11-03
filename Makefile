package:
	aws cloudformation package \
	--template-file './infrastructure/master.yml' \
	--s3-bucket micro-list-serverless \
	--output-template-file './infrastructure/pkg/master-template-output.yml'

deploy: 
	aws cloudformation deploy \
	--template-file './infrastructure/pkg/master-template-output.yml' \
	--capabilities 'CAPABILITY_IAM' \
	--stack-name micro-list-serverless

destroy_stack:
	aws cloudformation delete-stack --stack-name micro-list-serverless