const test = require('tape');
require('./index');

test('globalThis exists', t => {
  t.plan(1);
  t.equals(typeof globalThis, 'object');
});

test('has tc39ignoredme0 as number 0', t => {
  t.plan(1);
  t.equals(globalThis.tc39ignoredme0, 0);
});

test('has tc39ignoredme1 as number 1', t => {
  t.plan(1);
  t.equals(globalThis.tc39ignoredme1, 1);
});
