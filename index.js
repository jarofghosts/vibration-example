var vibrant = require('vibrant'),
    morse = require('morse-stream'),
    norse = require('norse')
    through = require('through')

var input_stream = through(examine)
var inspector = through(examine)

var link = document.getElementById('to-morse')

link.addEventListener('click', to_morse)

function examine(data) {
  this.queue(data)
}

function to_morse() {
  input_stream.write(document.getElementById('morse-in').value)
}

input_stream.pipe(morse()).pipe(norse(150)).pipe(vibrant())
