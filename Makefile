start-backend:
	cd backend && npm install && ${MAKE} run-start

start-frontend:
	cd frontend && npm install && ${MAKE} run-start

kill-port:
	npx kill-port 4000
	npx kill-port 3000


build-dev:
	cd frontend && $(MAKE) build-dev
	cd backend && $(MAKE) build-dev

run-dev:
	ENV=dev docker-compose -f docker-compose-dev.yml up

### local
build-local:
	cd frontend && $(MAKE) build-local
	cd backend && $(MAKE) build-local

run-local:
	ENV=local docker-compose -f docker-compose-production.yml up

### production run on digital ocean
build-production:
	cd frontend && $(MAKE) build-production
	cd backend && $(MAKE) build-production

run-production:
	ENV=production docker-compose -f docker-compose-production.yml up -d

SSH_STRING:=root@161.35.28.164

ssh:
	ssh $(SSH_STRING)

copy-files:
	scp -r ./* $(SSH_STRING):/root/

