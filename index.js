var vibrant = require('vibrant'),
    morse = require('morse-stream'),
    norse = require('norse')
    through = require('through')

var input_stream = through()

function to_morse() {
  input_stream.queue(document.getElementById('morse-in').value)
}

input_stream.pipe(morse()).pipe(norse()).pipe(vibrant())
