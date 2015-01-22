#wls-mebn
Forked from https://github.com/jkat98/benm

This app creates and deletes entries in a simple stock portfolio database. 
The detailed company view (client/src/views/company_details.js) modifies a Marionette ItemView to generate a D3 bar chart from the MongoDB record.

```
sudo npm install -g grunt-cli
npm install
grunt init:dev

```

Grunt init:dev only needs to be run the first time to prepare the vendor.js
files.

```
grunt server
```