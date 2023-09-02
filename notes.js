import * as fs from "fs";
import chalk from "chalk";
const yourNotes = (notes) => {
  return notes;
};
const addNote = (title, body) => {
  const notes = loadNote();
  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);
//   if (duplicateNotes.length === 0) {
//     notes.push({
//       title: title,
//       body: body,
//     });
//     saveNote(notes);
//     console.log("note added successfully");
//   } else {
//     console.log("note already exists");
//   }
if (!duplicateNote){
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log("note added successfully");
  } else {
    console.log("note already exists");
  }
};
const listNotes = () => {
    const notes = loadNote()
    console.log(chalk.bold.bgRed.white('Your notes'));
    notes.forEach((note) => {
          console.log(note.title);
        });
}
const readNote = (title) => {
    const notes = loadNote();
    const note = notes.find(note => note.title === title);
    if (note) {
      console.log(chalk.bgGreen(note.title + ": Note Read"));
      console.log(note.body);
    } else {
      console.log(chalk.bgRed(note.title + ": No Note Found"));
    }
}
const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const removeNote = (title) => {
  const notes = loadNote();
  const notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen(title + ": Note Removed"));
    saveNote(notesToKeep);
  } else {
    console.log(chalk.bgRed(title + ": No Note Found"));
    saveNote(notesToKeep);
  }
};
const loadNote = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const datajSON = dataBuffer.toString();
    return JSON.parse(datajSON);
  } catch (e) {
    return [];
  }
};

export default {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote
};
