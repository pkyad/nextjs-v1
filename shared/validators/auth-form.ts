import AJV from 'ajv'

const ajv = new AJV({ allErrors: true })

const schema = {
  type: 'object',
  properties: {
    username: { type: 'string', minLength: 1 },
    password: { type: 'string', minLength: 1 }
  },
  required: ['username', 'password'],
  additionalProperties: false
}

const validator = ajv.compile(schema)

export default validator
