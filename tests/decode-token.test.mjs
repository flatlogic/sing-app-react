import { test } from 'node:test';
import assert from 'node:assert/strict';
import decodeToken from '../src/helpers/decodeToken.mjs';

test('token decoding preserves claims and Unicode names', () => {
  const payload = { id: 'test-user', role: 'admin', exp: 2000000000, firstName: 'Иван' };
  const token = `eyJhbGciOiJub25lIn0.${Buffer.from(JSON.stringify(payload)).toString('base64url')}.test`;
  assert.deepEqual(decodeToken(token), payload);
});

test('missing and malformed tokens keep the existing null contract', () => {
  for (const token of [null, undefined, '', 'malformed', 'a.not-json.c']) {
    assert.equal(decodeToken(token), null);
  }
});

test('rejects malformed JWS structure and header even with a valid future-expiry payload', () => {
  const encode = value => Buffer.from(JSON.stringify(value)).toString('base64url');
  const header = encode({ alg: 'HS256', typ: 'JWT' });
  const payload = encode({ exp: 2000000000, user: { id: 'test-user' } });
  const invalid = [
    `${header}.${payload}`,
    `not_base64!.${payload}.sig`,
    `${Buffer.from('not json').toString('base64url')}.${payload}.sig`,
    `${encode(null)}.${payload}.sig`,
    `${encode(false)}.${payload}.sig`,
    `${header}=.${payload}.sig`,
    `${header}.${payload}.bad+signature`,
  ];
  for (const token of invalid) {
    assert.equal(decodeToken(token), null);
  }
});

test('keeps the decoder contract for an empty signature without verifying it', () => {
  const header = Buffer.from(JSON.stringify({ alg: 'none' })).toString('base64url');
  const payload = { exp: 2000000000, user: { id: 'test-user' } };
  const encodedPayload = Buffer.from(JSON.stringify(payload)).toString('base64url');
  assert.deepEqual(decodeToken(`${header}.${encodedPayload}.`), payload);
});
