(()=>{"use strict";!function(){let e;document.querySelector(".search-button").addEventListener("click",(t=>{const n=document.querySelector("#place");e=n.value,console.log(e),async function(e){try{const t=await fetch("http://api.weatherapi.com/v1/current.json?key=829d734e92bc4a00882163051232803&q="+e),n=await t.json();!function(e){document.querySelector(".location").textContent=e.location.name,document.querySelector(".condition").textContent=e.current.condition.text,document.querySelector(".temperature").textContent=e.current.temp_c,document.querySelector(".humidity").textContent=e.current.humidity+"%",document.querySelector(".wind").textContent=e.current.wind_kph+" kph"}(n),console.log(n),console.log(n.current.temp_c),console.log("feels like: "+n.current.feelslike_c+" C"),console.log(n.current.condition.text)}catch(e){console.log(e)}}(e),t.preventDefault()}))}()})();