const fs = require('fs')
const chalk = require('chalk');

const getNotes = () => {
  return "Your notes..."
}

const addNote = function(title, body){
  const notes = loadNotes()
  const duplicateNote  = notes.find(note => note.title === title)
  if (!duplicateNote) {
    notes.push({
      title: title,
      body :body
    })
    saveNotes(notes)
    console.log('New note added!')
  } else{
    console.log('Note title taken!')
  }
}

const removeNote = function(title){
  const notes = loadNotes()
  const notesToKeep = notes.filter(function(note){
    return note.title != title
  })
  if (notes.length > notesToKeep.length){
    saveNotes(notesToKeep)
    console.log(chalk.bgGreen('Note removed!'))
  }else{  
    console.log(chalk.bgRed("No note found!"))
  }
}

const listNotes = () => {
  const notes = loadNotes()
  notes.forEach(note => {
    console.log(chalk.green.bold(note.title));
  });
}

const readNote = (title) => {
  const notes = loadNotes()
  const note  = notes.find(note => note.title === title)
  if (note) {
    console.log(chalk.bold.green(note.title))
    console.log(note.body)
  } else{
    console.log(chalk.red('No note found!'))
  }
}


//helper functions

const saveNotes = function(notes){
  const dataJSON = JSON.stringify(notes)
  fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync('notes.json')
    const dataJSON = dataBuffer.toString()
    return JSON.parse(dataJSON)
  } catch (e) {
    return []
  }
}

module.exports = {
  getNotes: getNotes,
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
}