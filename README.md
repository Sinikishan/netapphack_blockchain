# netapp_hack

netapp blockchain based shiping

//Commands to run the project

cd ~/fabric-dev-servers/
export FABRIC_VERSION=hlfv11
./startFabric.sh
//Starting the hyperledger fabric blockchain platform composer and fabric

./createPeerAdminCard.sh
//creating the network admin to control the network

cd
cd netapp_hack
composer archive create -t dir -n .
//creating the .bna file(banana file) which contains model file(asset,participant and transaction function definitions) 
and script file which contains the smart contract for the transactions in the blockchain.


composer network install --card PeerAdmin@hlfv1 --archiveFile netapp_hack@0.0.1.bna
//deploying the .bna file in the hyperledger fabric platform


composer network start --networkName netapp_hack --networkVersion 0.0.1 --networkAdmin admin --networkAdminEnrollSecret adminpw --card PeerAdmin@hlfv1 --file networkadmin.card
//starting the network with the deployed .bna file and credentials

composer card import --file networkadmin.card
//importing the admin card with all the credentials


composer network ping --card admin@netapp_hack
//pinging the network for checking its state, which was started with the .bna file


composer-rest-server
//starting the rest-server for having the api in the web-browser for viewing the data and transactions



//The Angular.js UI can be created by the following commands
yo hyperledger-composer:angular
cd netapp_hack
npm install
npm start
//getting the UI ready with the angular.js

