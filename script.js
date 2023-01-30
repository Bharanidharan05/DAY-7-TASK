//Question 1 // ===> Get all the countries from the Asia continent /region using the Filter function
 
var res=new XMLHttpRequest()
    res.open("GET","https://restcountries.com/v3.1/all",true)
    res.send()
    res.onload=function(){
        var data=res.response
        var result=JSON.parse(data)
       var ans=result.filter((ele)=>ele.continents =="Asia")
      var ans1=ans.map((ele)=>`continent : ${ele.continents} - region : ${ele.region} - country : ${ele.name.common}`) 
      console.log(ans1)
    }


 //  Get all the countries with a population of less than 2 lakhs using Filter function

var res=new XMLHttpRequest()
    res.open("GET","https://restcountries.com/v3.1/all",true)
    res.send()
    res.onload=function(){
        var data=res.response
        var result=JSON.parse(data)
       var ans=result.filter((ele)=>ele.population<200000)
      var ans1=ans.map((ele)=>`In ${ele.name.common} Population is : ${ele.population}`) 
      console.log(ans1)
    }


//===>Print the following details name, capital, flag using forEach function
var req=new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v3.1/all",true)
    req.send()
    req.onload=function(){
        var data=req.response
        var ans=JSON.parse(data)
        //var ans1=ans.forEach((ele)=>{console.log(ele)})
        var ans1=ans.forEach((ele)=>{console.log(`${ele.flag} - ${ele.name.common} - ${ele.capital}`)})
    }

// //Print the total population of countries using reduce function
var req=new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v3.1/all",true)
    req.send()
    req.onload=function(){
        var data=req.response
        var ans=JSON.parse(data)
       var ans1=ans.reduce((ac,c)=>ac+c.population,0)
       console.log(ans1)
    }

  
// //Print the country which uses US Dollars as currency.
var req=new XMLHttpRequest()
    req.open("GET","https://restcountries.com/v2/all",true)
    req.send()
    req.onload=function(){
        var data=req.response
        var ans=JSON.parse(data)
   var ans1=ans.filter((ele)=>{
     for(let key in ele.currencies)
     {
        if(ele.currencies[key].code=="USD")
		{
          console.log(ele.name)
        }
     }
   })
    }

   