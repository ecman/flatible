'use strict';

// network of who knows of who
const network = {
  'bob': [],
  'jill': [],
  'kate': [],
  'jim': []
}

// bob knows of: kate, jill
network.bob.push(network.kate);
network.bob.push(network.jill);

// jill knows of: bob, kate, jim
network.jill.push(network.bob);
network.jill.push(network.kate);
network.jill.push(network.jim);

// kate knows of: jill
network.kate.push(network.jill);

// jim knows of: jill, bob
network.jim.push(network.jill);
network.jim.push(network.bob);

exports.network = network;

