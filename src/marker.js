class Marker {
  constructor(size, color, remainingInk) {
    this.size = size
    this.color = color
    this.remainingInk = remainingInk
  }

  write(string) {
    let outputString = ''
    let stringLength = string.split(' ').join('').length
    if (stringLength > this.remainingInk) {
      for (let i = 0; i < string.length; i++) {
        if (this.remainingInk === 0) { break }
        outputString += string[i]
        if (string[i] !== ' ') { this.remainingInk -= 1 }
      }
    } else {
      outputString = string
      this.remainingInk -= stringLength
    }
    return outputString
  }

}

module.exports = Marker
