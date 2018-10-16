const {Wit, log} = require('node-wit');

const client = new Wit({accessToken: 'YLX3LE3OPB6SXF3LHDBPFAN5HZHDCDFS'});
client.message('How is your day?', {})
.then((data) => {
  console.log('Yay, got Wit.ai response: ' + JSON.stringify(data));
})
.catch(console.error);

const {interactive} = require('node-wit');
interactive(client);