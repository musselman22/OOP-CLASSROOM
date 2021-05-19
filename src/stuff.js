class Student {
  constructor(name, skillLevel) {
    this.name = name
    this.skillLevel = skillLevel
    this.assignments = []
  }

  study() {
    if (this.skillLevel !== 100) this.skillLevel += 1
    return this
  }

  doHomework(object) {
    if (!object) {
      this.assignments.forEach((assignment) => {
        if (assignment.skillLevel <= this.skillLevel) assignment.completed = true
      })

    } else {
      if (object.skillLevel < 1 || object.skillLevel > 100 || !object.skillLevel) return
      if (object.skillLevel <= this.skillLevel) object.completed = true
      if (object.skillLevel > this.skillLevel) object.completed = false
      this.assignments.push(object)
    }

  }

}

let newStudent = new Student('jacob', 50)

let newAssignment1 = { title: 'Crushing Candy Code', skillLevel: 51 }
newStudent.doHomework(newAssignment1)
console.log(newStudent)
newStudent.study()
console.log(newStudent)
newStudent.doHomework()

console.log(newStudent)

