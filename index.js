var vibrant = require('vibrant'),
    morse = require('morse-stream'),
    norse = require('norse')
    through = require('through')

var input_stream = through(examine)
var inspect = through(examine)

var link = document.getElementById('to-morse')

link.addEventListener('click', to_morse)

function examine(data) {
  console.log(data.toString())
  this.queue(data)
}

function to_morse() {
  input_stream.write(document.getElementById('morse-in').value)
}

input_stream.pipe(morse()).pipe(inspect).pipe(norse()).pipe(vibrant())
