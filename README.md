#wls-mebn

Forked from https://github.com/jkat98/benm.

This app uses Node/Backbone/Marionette/MongoDB to create and delete entries in a simple database. The detailed company view (client/src/views/company_details.js) injects a D3 bar chart from MongoDB data, rendered in a Marionette view.

To do: add validation to prevent saving an empty record.

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