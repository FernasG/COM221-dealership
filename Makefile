.PHONY: test

up:
	@docker-compose up

build:
	@docker-compose build

sh:
	@docker-compose exec dealership-service bash

test:
	@docker-compose exec dealership-service bash -c "npm run test"

test\:coverage:
	@docker-compose exec dealership-service bash -c "npm run test:coverage"
