import notes from "./notes.js";
import chalk from "chalk";
import yargs from "yargs";

// Customize the yargs version
yargs.version("1.1.1");

// create the add command

yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    },
    body: {
        describe: "Body of the note",
        demandOption: true,
        type: "string",
  },
},
  handler(argv) {
    // console.log('title : ' + argv.title + '\nbody : ' + chalk.bgBlueBright.bold(argv.body));
    notes.addNote(argv.title, argv.body);
  },
});

// create the remove command

yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: { 
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    }
    },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//  create  the list command

yargs.command({
  command: "list",
  describe: "List all notes",
  handler () {
    notes.listNotes();
  },
});

// create read command

yargs.command({
  command: "read",
  describe: "Read a note",
  builder: {
    title: {
      describe: "Title of the note",
      demandOption: true,
      type: "string",
    }
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
// console.log(yargs.argv);
