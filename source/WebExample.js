const express=require('express')
const hbs=require('hbs')
const path=require('path')
const app=express()

//Define paths for express config
const publicPathDirection=path.join(__dirname,'../public')
const viewPath=path.join(__dirname,'../templates/views')
const  partialPath=path.join(__dirname,'../templates/partials')





//Setup hqandler engine



app.set('view engine','hbs')
app.set('views',viewPath)



hbs.registerPartials(partialPath)


//setup static directory to serve
app.use(express.static(publicPathDirection))

app.get('',(req,res)=>{
  res.render('index',{
    title:'Weather App',
    name:'Andrew Mead'
  })
})
  app.get('/about',(req,res)=>{
    res.render('about',{
        title:'It is raining',
        name:'Mumbai'
    })
  })

  app.get('/help',(req,res)=>{
    res.render('help',{       
        helpText:'Help Text !',
        title:'help',
        name:'Rajat'
      })
  })

 


  app.get('*',(req,res)=>{

    res.render('404',{
      title:'404',
      name:'Andrew Mead',
      errorMessage:'Page not found'
    })
  })


app.listen(3000,()=>{
    console.log('server is up on port 3000')
})
