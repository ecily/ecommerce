
start-local:
	cd backend && npm run dev
	cd frontend && npm start


SSH_STRING:=root@165.232.76.14

ssh:
	ssh $(SSH_STRING)

copy-files:
	scp -r ./* $(SSH_STRING):/root/

