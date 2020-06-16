const chalk = require('chalk');
const yargs = require('yargs')
const  notes = require('./notes.js')
yargs.version('1.2.3')

// add, remove ,read, list


//create add commend
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string' 
        },
        body: {
            describe: 'note body',
            demandOption: true,
            type: 'string'
        }
    },
     handler: function (argv) {
        notes.addNote(argv.title, argv.body)

     }
})
// remove a command
yargs.command({
     command: 'remove', 
     describe :  'remove a note',
     builder: {
         title: {
             describe: 'note title',
             demandOption: true,
             type: 'string'
         } 
         },
     handler(argv) {
        notes.removeNote(argv.title)
     }
})
// list a command
 yargs.command({
     command: 'list',
     describe: 'add a new list',
     builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        } 
        },
     handler(argv) {
        notes.listNote(argv.title)
     }
 })
 //read a command
 yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'note title',
            demandOption: true,
            type: 'string'
        } 
        },
    handler(argv){
        notes.readNote(argv.title)
    }

 })

yargs.parse()