var coap = require('coap');
var zcl = require('../.')(coap);

var deviceIp = '::1';
var clusterEndpoint = 1;

var onOff = zcl.clusters.OnOff({
  ip: deviceIp,
  endpoint: clusterEndpoint
});

onOff.on({}, (err, response) => {
  if (err) {
    console.error(err);
  }

  console.log(response.code);
});

