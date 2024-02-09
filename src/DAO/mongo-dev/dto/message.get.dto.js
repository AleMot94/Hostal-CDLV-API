class MessageGetDTO {
  constructor({ _id, name, email, message }) {
    this.id = _id.toString()
    this.name = name
    this.email = email
    this.message = message
  }
}

export default MessageGetDTO
