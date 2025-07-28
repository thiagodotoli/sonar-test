import { describe, test } from 'node:test';
import assert from 'node:assert';
import classifyNumber from '../src/index.js';

describe('classifyNumber', { concurrency: false }, () => {
  test('covers negative', () => {
    assert.equal(classifyNumber(-5),'negative');
  });

  test('covers zero', () => {
    assert.equal(classifyNumber(0),'zero');
  });

  test('covers small', () => {
    assert.equal(classifyNumber(5),'small');
  });

  test('covers medium', () => {
    assert.equal(classifyNumber(50),'medium');
  });

  test('covers large', () => {
    assert.equal(classifyNumber(500),'large');
  });
});