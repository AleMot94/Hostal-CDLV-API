import { Schema, model } from 'mongoose'

const schema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true }
})

export const galleryModel = model('gallery', schema)
