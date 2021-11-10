# to run the app locally in docker container with hot reload

- Install make on your system
- Install docker on your system
- open console/shell inside root folder of the source and run `make build-dev`
- after creating containers run command `make run-dev`

this creates also a Mongo docker image to storing data

# run app in digital ocean

- Create a digital ocean droplet with a
  - Marketplace image `Docker 19.03.12 on Ubuntu 20.04`
  - Enable ssh keys
- **alternative** Create a Firewall under Networking
  - Allow Inbound rules for
    - ssh
    - HTTP
    - HTTPS
- Add Droplet to Firewall
- Install make on your system
- open Code in your IDE
- Change the `SSH_STRING` in the top level **Makefile** to reflect the correct public IP of your droplet in digital ocean
- change the `domain name` for the app and the `domain owner email` (`tls`) in
  - frontend/Caddyfile.production
- change the `BASE_URL` build arg in
  - frontend/Makefile
- upload all files to droplet with `make copy-files`
- connect to droplet `make ssh`
- install make on droplet `apt install make`
- create containers `make build-production`
- serve containers `make run-production`

## for all this it is important that the ssh key for accessing the droplet is available on your system

1. Solution can be to create a ssh key on your system and add this new key at the creation of your new droplet
2. Solution can be to add your current used ssh key on the authorized_keys on your droplet but this is only possible if you have at least access to the droplet via the online console

# Usefull tutorials

- https://www.youtube.com/watch?v=DftsReyhz2Q
