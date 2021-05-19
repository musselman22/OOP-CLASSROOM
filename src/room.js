class Room {
  constructor(name, description) {
    this.name = name
    this.description = description
    this.contents = []
  }

  add(item) {
    this.contents.push(item)
    return this
  }

  has(reference) {
    let isPresent = false
    this.contents.forEach((item) => {
      if (item === reference) {
        isPresent = true
      }
    })
    return isPresent
  }
}

module.exports = Room
