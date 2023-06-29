

/**
 * Mimic a TreeSet
 */
Object.prototype.size = function() {
  return Object.keys(this).length;
};

Object.prototype.first = function() {
  const keys = Object.keys(this);
  return parseInt(keys[0]);
};

Object.prototype.last = function() {
  const keys = Object.keys(this);
  return parseInt(keys[keys.length - 1]);
};

class ExamRoom {
  /**
   * @param {number} N
   */
  constructor(N) {
    this.N = N;
    this.students = {};
  }

  /**
   * @return {number}
   */
  seat() {
    // Let's determine student, the position of the next
    // student to sit down.
    let student = 0;

    if (this.students.size() > 0) {
      // Tenatively, dist is the distance to the closest student,
      // which is achieved by sitting in the position 'student'.
      // We start by considering the left-most seat.
      let dist = this.students.first();
      let prev = null;

      for (let s of Object.keys(this.students)) {
        if (prev !== null) {
          // For each pair of adjacent students in positions (prev, s),
          // d is the distance to the closest student;
          // achieved at position prev + d.
          const d = Math.floor((parseInt(s) - prev) / 2);

          if (d > dist) {
            dist = d;
            student = prev + d;
          }
        }

        prev = s;
      }

      // Considering the right-most seat.
      if (this.N - 1 - this.students.last() > dist) {
        student = this.N - 1;
      }
    }

    // Add the student to our sorted TreeSet of positions.
    this.students[student] = student;

    return student;
  }

  /**
   * @param {number} p
   * @return {void}
   */
  leave(p) {
    delete this.students[p];
  }
}

export { ExamRoom };

/**
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */
