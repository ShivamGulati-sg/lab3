/**
 * Created by Shivam Gulati  on 2016-09-25.
 * Student number : 200329873
 */
//link connect package
var connect = require('connect');
//link to url module to pass url parameter
var url =  require('url');
//link to the accouting package
var accounting = require('accounting');
//instantiate a new connect object
var app=  connect();

//query string to accept three parameter, method , x and y
var lab3=function (req,res,next) {

    //getting the value of x , y and method from the url
    var qs = url.parse(req.url,true).query;
    //storing the value of x, y and method
    var x = qs.x;
    var y= qs.y;
    var method = qs.method;
    //getting the value of x and y as an int and using the simple functions to do the required operation
    var sum = (parseInt(x) + parseInt(y));
    var multiply = (parseInt(x) * parseInt(y));
    var subtract = (parseInt(x)-parseInt(y));
    var divide = (parseInt(x)/parseInt(y));
    // doing the required operation depending upon the value of the method
    if(method ==='add'){
        res.end(x+' + '+y+' = '+accounting.format(sum));
    }
    else if(method === 'subtract'){
        res.end(x+' - '+y+' = '+accounting.format(subtract));
    }else if(method ==='divide'){
        res.end(x+' / '+y+' = '+accounting.format(divide));
    }else if(method === 'multiply'){
        res.end(x+' * '+y+' = '+accounting.format(multiply));
    }else{
        res.end('Not a valid method, please enter a valid method');

    }

}
//running the app
app.use('/lab3', lab3);
//listening on port 3000
app.listen(3000);
//printing on cmd prompt to make sure the app is running, as nodemon will also verify errors if any
console.log("Connect running on port 3000 ");
