(()=>{"use strict";async function e(e){try{const t=await fetch("https://api.weatherapi.com/v1/forecast.json?key=829d734e92bc4a00882163051232803&q="+e+"&days=7&aqi=no&alerts=no"),n=await t.json(),o=await fetch("https://api.weatherapi.com/v1/astronomy.json?key=829d734e92bc4a00882163051232803&q="+e+"&dt=",{headers:{"Content-type":"application/json"}}),r=await o.json();!function(e,t){document.querySelector(".location").textContent=e.location.name,document.querySelector(".condition").textContent=e.current.condition.text;const n=document.querySelector(".temperature");n.textContent=e.current.temp_c+"°",document.querySelector(".humidity").textContent="Humidity: "+e.current.humidity+"%",document.querySelector(".wind").textContent="Wind: "+e.current.wind_kph+" kph";const o=document.querySelector(".through-day-temp");o.replaceChildren();for(let t=0;t<24;t++)o.innerHTML+=`<div class='hourly-temp'>\n        <div>${e.forecast.forecastday[0].hour[t].time.substr(11,5)}</div>\n        <div>${e.forecast.forecastday[0].hour[t].chance_of_rain}%</div>\n        <div><img src='${e.forecast.forecastday[0].hour[t].condition.icon}'></div>\n        <div class='temperatureHour'>${e.forecast.forecastday[0].hour[t].temp_c}°</div>\n        </div>`;let r=!0;const c=document.querySelector(".change-cel-fah"),a=document.querySelectorAll(".temperatureHour");c.addEventListener("click",(()=>{if(r){n.textContent=e.current.temp_f+"°",document.querySelector(".feels-like").textContent=e.current.feelslike_f+"°";for(let t=0;t<24;t++)a[t].textContent=e.forecast.forecastday[0].hour[t].temp_f+"°";const t=document.querySelectorAll(".week-temperature");for(let n=0;n<3;n++)t[n].textContent=e.forecast.forecastday[n].day.avgtemp_f+"°";r=!1}else{n.textContent=e.current.temp_c+"°",document.querySelector(".feels-like").textContent=e.current.feelslike_c+"°";for(let t=0;t<24;t++)a[t].textContent=e.forecast.forecastday[0].hour[t].temp_c+"°";const t=document.querySelectorAll(".week-temperature");for(let n=0;n<3;n++)t[n].textContent=e.forecast.forecastday[n].day.avgtemp_c+"°";r=!0}})),document.querySelector(".sunrise").textContent=t.astronomy.astro.sunrise,document.querySelector(".sunset").textContent=t.astronomy.astro.sunset,document.querySelector(".feels-like").textContent=e.current.feelslike_c+"°",document.querySelector(".humidity-info").textContent=e.current.humidity+"%",document.querySelector(".wind-direction").textContent=e.current.wind_dir,document.querySelector(".pressure").textContent=e.current.pressure_mb+" hPa",document.querySelector(".visibility").textContent=e.current.vis_km+" km",document.querySelector(".uv-index").textContent=e.current.uv;const i=document.querySelector(".week-temp");i.replaceChildren(),i.innerHTML+='<div class="indicator">\n        <div class="week-day">DAY</div>\n        <div class="week-condition"></div>\n        <div class="week-rain">CHANCE OF RAIN</div>\n        <div class="week-humidity">HUMIDITY</div>\n        <div class="week-temperature-indi">TEMPERATURE</div>\n        </div>';for(let t=0;t<3;t++){let n=new Date(e.forecast.forecastday[t].date).toString();i.innerHTML+=`\n        <div class='day'>\n        <div class='week-day'>${n.substr(0,10)}</div>\n        <div class='week-condition'><img src='${e.forecast.forecastday[t].day.condition.icon}'></div>\n        <div class='week-rain'>${e.forecast.forecastday[t].day.daily_chance_of_rain}%</div>\n        <div class='week-humidity'>${e.forecast.forecastday[t].day.avghumidity}%</div>\n        <div class='week-temperature'>${e.forecast.forecastday[t].day.avgtemp_c}°</div>\n        </div>\n        `}}(n,r),console.log(n.forecast.forecastday[0].hour[0]),console.log(n),console.log(r),console.log(n.current.temp_c),console.log("feels like: "+n.current.feelslike_c+" C"),console.log(n.current.condition.text)}catch(e){console.log(e)}}e("Milan"),function(){let t;document.querySelector(".search-button").addEventListener("click",(n=>{const o=document.querySelector("#place");t=o.value,console.log(t),e(t),n.preventDefault()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJQyxFQURpQlEsU0FBU0MsY0FBYyxrQkFFL0IwQixpQkFBaUIsU0FBVTJCLElBQ3BDLE1BQU1DLEVBQWN2RCxTQUFTQyxjQUFjLFVBQzNDVCxFQUFRK0QsRUFBWUMsTUFDcEJMLFFBQVFDLElBQUk1RCxHQUNaRCxFQUFXQyxHQUNYOEQsRUFBTUcsZ0JBQWdCLEdBRTlCLENETkFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Nob3dEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlYXJjaERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0N1cnJlbnREYXRhIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocGxhY2UpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT04MjlkNzM0ZTkyYmM0YTAwODgyMTYzMDUxMjMyODAzJnE9JyArIHBsYWNlICsgJyZkYXlzPTcmYXFpPW5vJmFsZXJ0cz1ubycpXG4gICAgICAgIGNvbnN0IHdlYXRoZXJEYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlQXN0cm9ub215ID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2FzdHJvbm9teS5qc29uP2tleT04MjlkNzM0ZTkyYmM0YTAwODgyMTYzMDUxMjMyODAzJnE9JyArIHBsYWNlICsgJyZkdD0nLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBjb25zdCBhc3Ryb25vbXlEYXRhID0gYXdhaXQgcmVzcG9uc2VBc3Ryb25vbXkuanNvbigpXG4gICAgICAgIHNob3dDdXJyZW50RGF0YSh3ZWF0aGVyRGF0YSwgYXN0cm9ub215RGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91clswXSlcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFzdHJvbm9teURhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZlZWxzIGxpa2U6ICcgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgJyBDJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBzaG93Q3VycmVudERhdGEod2VhdGhlckRhdGEsIGFzdHJvbm9teURhdGEpIHtcbiAgICAvL2N1cnJlbnQgZGF5IHNlY3Rpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb24nKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jICsgJ8KwJztcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6ICcgKyB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgd2luZC50ZXh0Q29udGVudCA9ICdXaW5kOiAnICsgd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCArICcga3BoJztcblxuICAgIGNvbnN0IHRocm91Z2hEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhyb3VnaC1kYXktdGVtcCcpO1xuICAgIHRocm91Z2hEYXkucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIHRocm91Z2hEYXkuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPSdob3VybHktdGVtcCc+XG4gICAgICAgIDxkaXY+JHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRpbWUuc3Vic3RyKDExLCA1KX08L2Rpdj5cbiAgICAgICAgPGRpdj4ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0uY2hhbmNlX29mX3JhaW59JTwvZGl2PlxuICAgICAgICA8ZGl2PjxpbWcgc3JjPScke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0uY29uZGl0aW9uLmljb259Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGVtcGVyYXR1cmVIb3VyJz4ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0udGVtcF9jfcKwPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdGVtcGVyYXR1cmUgcGFyYW1ldGVyIG9uIGNsaWNrXG4gICAgbGV0IHNob3dDZWwgPSB0cnVlO1xuICAgIGNvbnN0IGNoYW5nZUNGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1jZWwtZmFoJyk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVIb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBlcmF0dXJlSG91cicpO1xuXG4gICAgY2hhbmdlQ0YuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChzaG93Q2VsKSB7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9mICsgJ8KwJztcbiAgICAgICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9mICsgJ8KwJztcbiAgICAgICAgICAgIGZvciAobGV0IGhvdXIgPSAwOyBob3VyIDwgMjQ7IGhvdXIrKykge1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlSG91cltob3VyXS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaG91cl0udGVtcF9mICsgJ8KwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHdlZWtUZW1wZXJhdHVyZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy53ZWVrLXRlbXBlcmF0dXJlJylcbiAgICAgICAgICAgIGZvciAobGV0IGRheSA9IDA7IGRheSA8IDM7IGRheSsrKSB7XG4gICAgICAgICAgICAgICAgd2Vla1RlbXBlcmF0dXJlW2RheV0udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5hdmd0ZW1wX2YgKyAnwrAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvd0NlbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyArICfCsCc7XG4gICAgICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArICfCsCc7XG4gICAgICAgICAgICBmb3IgKGxldCBob3VyID0gMDsgaG91ciA8IDI0OyBob3VyKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZUhvdXJbaG91cl0udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2hvdXJdLnRlbXBfYyArICfCsCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3ZWVrVGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcud2Vlay10ZW1wZXJhdHVyZScpXG4gICAgICAgICAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCAzOyBkYXkrKykge1xuICAgICAgICAgICAgICAgIHdlZWtUZW1wZXJhdHVyZVtkYXldLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuYXZndGVtcF9jICsgJ8KwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3dDZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGluZm9ybWF0aW9uIHNlY3Rpb25cbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKTtcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gYXN0cm9ub215RGF0YS5hc3Ryb25vbXkuYXN0cm8uc3VucmlzZTtcblxuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKTtcbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBhc3Ryb25vbXlEYXRhLmFzdHJvbm9teS5hc3Ryby5zdW5zZXQ7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyAnwrAnO1xuXG4gICAgY29uc3QgaHVtaWRpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LWluZm8nKTtcbiAgICBodW1pZGl0eUluZm8udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuXG4gICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRpcmVjdGlvbicpO1xuICAgIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyO1xuXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKTtcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyAnIGhQYSc7XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKTtcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC52aXNfa20gKyAnIGttJztcblxuICAgIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYtaW5kZXgnKTtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC51djtcblxuICAgIC8vIDEgd2VlayBmb3JlY2FzdCBzZWN0aW9uXG5cbiAgICBjb25zdCB3ZWVrVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrLXRlbXAnKTtcblxuICAgIHdlZWtUZW1wLnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIHdlZWtUZW1wLmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz1cImluZGljYXRvclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1kYXlcIj5EQVk8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIndlZWstY29uZGl0aW9uXCI+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLXJhaW5cIj5DSEFOQ0UgT0YgUkFJTjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwid2Vlay1odW1pZGl0eVwiPkhVTUlESVRZPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3ZWVrLXRlbXBlcmF0dXJlLWluZGlcIj5URU1QRVJBVFVSRTwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgZm9yIChsZXQgZGF5ID0gMDsgZGF5IDwgMzsgZGF5KyspIHtcbiAgICAgICAgY29uc3QgZCA9IG5ldyBEYXRlKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF0ZSk7XG5cbiAgICAgICAgbGV0IGRhdGVEYXkgPSBkLnRvU3RyaW5nKCk7XG5cbiAgICAgICAgd2Vla1RlbXAuaW5uZXJIVE1MICs9IGBcbiAgICAgICAgPGRpdiBjbGFzcz0nZGF5Jz5cbiAgICAgICAgPGRpdiBjbGFzcz0nd2Vlay1kYXknPiR7ZGF0ZURheS5zdWJzdHIoMCwgMTApfTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSd3ZWVrLWNvbmRpdGlvbic+PGltZyBzcmM9JyR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuY29uZGl0aW9uLmljb259Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nd2Vlay1yYWluJz4ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmRhaWx5X2NoYW5jZV9vZl9yYWlufSU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nd2Vlay1odW1pZGl0eSc+JHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5hdmdodW1pZGl0eX0lPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3dlZWstdGVtcGVyYXR1cmUnPiR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuYXZndGVtcF9jfcKwPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2dldERhdGFcIjtcbmltcG9ydCB7IHNlYXJjaFBsYWNlIH0gZnJvbSBcIi4vc2VhcmNoRGF0YVwiO1xuaW1wb3J0IHsgc2hvd0RhdGEgfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5cbmdldFdlYXRoZXIoJ01pbGFuJylcbnNlYXJjaFBsYWNlKCk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2dldERhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBsYWNlKCkge1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG4gICAgbGV0IHBsYWNlO1xuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZScpO1xuICAgICAgICBwbGFjZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGFjZSk7XG4gICAgICAgIGdldFdlYXRoZXIocGxhY2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJhc3luYyIsImdldFdlYXRoZXIiLCJwbGFjZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ3ZWF0aGVyRGF0YSIsImpzb24iLCJyZXNwb25zZUFzdHJvbm9teSIsImhlYWRlcnMiLCJhc3Ryb25vbXlEYXRhIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGV4dENvbnRlbnQiLCJsb2NhdGlvbiIsIm5hbWUiLCJjdXJyZW50IiwiY29uZGl0aW9uIiwidGV4dCIsInRlbXBlcmF0dXJlIiwidGVtcF9jIiwiaHVtaWRpdHkiLCJ3aW5kX2twaCIsInRocm91Z2hEYXkiLCJyZXBsYWNlQ2hpbGRyZW4iLCJpIiwiaW5uZXJIVE1MIiwiZm9yZWNhc3QiLCJmb3JlY2FzdGRheSIsImhvdXIiLCJ0aW1lIiwic3Vic3RyIiwiY2hhbmNlX29mX3JhaW4iLCJpY29uIiwic2hvd0NlbCIsImNoYW5nZUNGIiwidGVtcGVyYXR1cmVIb3VyIiwicXVlcnlTZWxlY3RvckFsbCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZW1wX2YiLCJmZWVsc2xpa2VfZiIsIndlZWtUZW1wZXJhdHVyZSIsImRheSIsImF2Z3RlbXBfZiIsImZlZWxzbGlrZV9jIiwiYXZndGVtcF9jIiwiYXN0cm9ub215IiwiYXN0cm8iLCJzdW5yaXNlIiwic3Vuc2V0Iiwid2luZF9kaXIiLCJwcmVzc3VyZV9tYiIsInZpc19rbSIsInV2Iiwid2Vla1RlbXAiLCJkYXRlRGF5IiwiRGF0ZSIsImRhdGUiLCJ0b1N0cmluZyIsImRhaWx5X2NoYW5jZV9vZl9yYWluIiwiYXZnaHVtaWRpdHkiLCJzaG93Q3VycmVudERhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJldmVudCIsInNlYXJjaElucHV0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaFBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==