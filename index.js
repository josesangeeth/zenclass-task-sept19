const myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function(){ 
        myResolve(10);
    }, 1000);
  });
  
 
  myPromise.then(function(value) {       
    document.querySelector("#countdown").innerHTML = value;
  });

  
fetch("https://restcountries.eu/rest/v2/all")
.then(data => data.json())
.then(countries => console.log(countries.filter((country) => country.population >= 20_00_00_000).map((country) => ({name: country.name}))))  

  