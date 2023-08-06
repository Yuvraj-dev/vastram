const greetings =  function (req, res, next){
    console.log('Welcome to Vastram')
    next()
}

module.exports =  { greetings }