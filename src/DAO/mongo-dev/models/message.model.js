import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  message: { type: String, required: true },
  email: { type: String, required: true }
})

export const messageModel = model('message', schema)
