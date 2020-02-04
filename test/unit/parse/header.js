import test from 'ava'
import header from 'parse/header'

function makeSpec () {
  return new Map()
}

test('minimal', t => {
  const spec = makeSpec()
  header({ name: 'Authorization' }, spec)
  t.deepEqual(
    spec,
    new Map()
      .set('Authorization', new Set([ {} ]))
  )
})

test('value', t => {
  const spec = makeSpec()
  header({ name: 'Authorization', value: 'Bearer abc123' }, spec)
  t.deepEqual(
    spec,
    new Map()
      .set('Authorization', new Set([ { value: 'Bearer abc123' } ]))
  )
})

test('comment', t => {
  const spec = makeSpec()
  header({ name: 'Authorization', comment: 'Test authentication' }, spec)
  t.deepEqual(
    spec,
    new Map()
      .set('Authorization', new Set([ { comment: 'Test authentication' } ]))
  )
})

test('value with charset', t => {
  const spec = makeSpec()
  header({ name: 'Content-Type', value: 'text/plain;charset=UTF-8' }, spec)
  t.deepEqual(
    spec,
    new Map()
      .set('Content-Type', new Set([ { value: 'text/plain;charset=UTF-8' } ]))
  )
})
