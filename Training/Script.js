//node JS server
/*
const http = require("http");
const hostname = "localhost";
const port = 8000;
const myServer = http.createServer(function(request,response){
    response.writeHead(200, {'Content-Type':'text/html' });
    response.write("Helooooo");
    console.log(request.url);
    response.end();
});
myServer.listen(port,hostname);
*/

//node Js express server
const express = require("express");
const port = 8000;
const app = express();
app.get('/', function(request,respond){
    respond.send("Hello fanday")

})
app.get('/aboutus', function(request,respond){
    respond.send("Hello abouut us")

})
app.get('/qamar/:qamarnmber', function(request,respond){
    respond.send("accessing qamarnmber is "+request.params.qamarnmber)

})
app.listen(port);
/*
//change p3 to p1
function byTagNames(){
    let tagNames=document.getElementsByTagName("p")
    document.getElementById("demo").innerHTML = tagNames[0].innerHTML;
}
//change p2 to p1
function changeP2(){
    document.getElementById("p2").innerHTML = document.getElementById("p1").firstChild.nodeValue;
}
//change style
function changeStyle(p){
    document.getElementById(p).style.fontStyle = "italic";
    document.getElementById("p1").style.fontWeight = "bold";
    document.getElementById(p).style.color = document.getElementById("p1").style.color;
}
Vue.use(VueResource);
/////////////// VueJs //////////////
let recipes = ["1", "2", "3", "4", "5"];
let app = new Vue({
    el: '#app',
    data: {
        recipes:recipes,
        empName:'',
        empWeight:'',
        allWeights:[],
        emp:''
    },
    computed: {    
        isDisabled: function(){
            if((this.empWeight<20)||(this.empName.length<2)){
                return true
            }
            else{
                return false
            }
        }
    },
    method: {
        getData:function(){
            this.shttp.get("http://localhost:8000/getallrecords")
            .then(Response=> {
                this.allWeights = Response.data;
            })
        }
        
    }
});
/////////////// JQuery //////////////

// Java Script
//$(document).ready(function(){
//    alert('document loaded');
//});
// Same code in JQuery
//$(alert('document loaded')) 
$(document).ready(function(){
    //style $("[class='sizes']").css({"color":"brown", "font-weight":"bolder"});
    //all p items $("p").css({"color":"brown", "font-weight":"bolder"});
    //last item $("p").last().css({"color":"brown", "font-weight":"bolder"});
    //$("#p1").hover(function(){
        //console.log("You have just hovered over p1");
    //$("#p1").on("mouseenter mouseleve",function(){
     //   console.log("You have just entered p1");
    //});
    //show and hide a button
    $("#bbb").hide();
    $("#cb").change(function(){
        if(this.checked){
            $("#bbb").show();    
        }
        else{
            $("#bbb").hide();
        }
        
    });
    $("#p1").on({
        mouseenter:function(){
            console.log("You have entered p1");
        },
        mouseleave:function(){
            console.log("You have left p1");
        }
    })
});*/
