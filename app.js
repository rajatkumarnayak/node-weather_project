const getNotes=require('./notes.js')
const chalk=require('chalk')
const yargs=require('yargs')

yargs.version('1.1.8')

yargs.command({
    command:'add',
    define:'Adding  notes !',
    handler:function(){
        console.log('Adding a new notes!')
    }
})

yargs.command({
    command:'List',
    define:'Adding  List !',
    builder:{
        title:{
         define:'Test  1',
         demandOption:true,
         type:'string'

        }
    },
    handler:function(argv){
        console.log(argv.title);
    }
})

args.parse()
