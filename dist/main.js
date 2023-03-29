(()=>{"use strict";async function e(e){try{const t=await fetch("http://api.weatherapi.com/v1/forecast.json?key=829d734e92bc4a00882163051232803&q="+e+"&days=7&aqi=no&alerts=no"),o=await t.json(),n=await fetch("http://api.weatherapi.com/v1/astronomy.json?key=829d734e92bc4a00882163051232803&q="+e+"&dt="),r=await n.json();!function(e,t){document.querySelector(".location").textContent=e.location.name,document.querySelector(".condition").textContent=e.current.condition.text;const o=document.querySelector(".temperature");o.textContent=e.current.temp_c+"°",document.querySelector(".humidity").textContent="Humidity: "+e.current.humidity+"%",document.querySelector(".wind").textContent="Wind: "+e.current.wind_kph+" kph";const n=document.querySelector(".through-day-temp");n.replaceChildren();for(let t=0;t<24;t++)n.innerHTML+=`<div class='hourly-temp'>\n        <div>${e.forecast.forecastday[0].hour[t].time.substr(11,5)}</div>\n        <div>${e.forecast.forecastday[0].hour[t].chance_of_rain}%</div>\n        <div><img src='${e.forecast.forecastday[0].hour[t].condition.icon}'></div>\n        <div class='temperatureHour'>${e.forecast.forecastday[0].hour[t].temp_c}°</div>\n        </div>`;let r=!0;const c=document.querySelector(".change-cel-fah"),i=document.querySelectorAll(".temperatureHour");c.addEventListener("click",(()=>{if(r){o.textContent=e.current.temp_f+"°",document.querySelector(".feels-like").textContent=e.current.feelslike_f+"°";for(let t=0;t<24;t++)i[t].textContent=e.forecast.forecastday[0].hour[t].temp_f+"°";r=!1}else{o.textContent=e.current.temp_c+"°",document.querySelector(".feels-like").textContent=e.current.feelslike_c+"°";for(let t=0;t<24;t++)i[t].textContent=e.forecast.forecastday[0].hour[t].temp_c+"°";r=!0}})),document.querySelector(".sunrise").textContent=t.astronomy.astro.sunrise,document.querySelector(".sunset").textContent=t.astronomy.astro.sunset,document.querySelector(".feels-like").textContent=e.current.feelslike_c+"°",document.querySelector(".humidity-info").textContent=e.current.humidity+"%",document.querySelector(".wind-direction").textContent=e.current.wind_dir,document.querySelector(".pressure").textContent=e.current.pressure_mb+" hPa",document.querySelector(".visibility").textContent=e.current.vis_km+" km",document.querySelector(".uv-index").textContent=e.current.uv;const a=document.querySelector(".week-temp");for(let t=0;t<7;t++){let o=new Date(e.forecast.forecastday[t].date).toString();a.innerHTML+=`\n        <div class='day'>\n        <div class='week-day'>${o.substr(0,10)}</div>\n        <div class='week-condition'><img src='${e.forecast.forecastday[t].day.condition.icon}'></div>\n        <div class='week-rain'>${e.forecast.forecastday[t].day.daily_chance_of_rain}%</div>\n        <div class='week-humidity'>${e.forecast.forecastday[t].day.avghumidity}%</div>\n        <div class='week-temperature'>${e.forecast.forecastday[t].day.avgtemp_c}°</div>\n        </div>\n        `}}(o,r),console.log(o.forecast.forecastday[0].hour[0]),console.log(o),console.log(r),console.log(o.current.temp_c),console.log("feels like: "+o.current.feelslike_c+" C"),console.log(o.current.condition.text)}catch(e){console.log(e)}}e("Milan"),function(){let t;document.querySelector(".search-button").addEventListener("click",(o=>{const n=document.querySelector("#place");t=n.value,console.log(t),e(t),o.preventDefault()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFZb0IsU0FBU0MsWUFBWXVCLEdBQUtHLE1BRXpDQyxXQUVoQkwsRUFBU3hCLFdBQWEsOERBRUUwQixFQUFRckIsT0FBTyxFQUFHLDREQUNGeEIsRUFBWW9CLFNBQVNDLFlBQVl1QixHQUFLQSxJQUFJbEMsVUFBVWdCLGdEQUNuRTFCLEVBQVlvQixTQUFTQyxZQUFZdUIsR0FBS0EsSUFBSUssbUVBQ3RDakQsRUFBWW9CLFNBQVNDLFlBQVl1QixHQUFLQSxJQUFJTSw2REFDdkNsRCxFQUFZb0IsU0FBU0MsWUFBWXVCLEdBQUtBLElBQUlPLDRDQUc5RSxDQUNKLENEdkZRQyxDQUFnQnBELEVBQWFHLEdBQzdCa0QsUUFBUUMsSUFBSXRELEVBQVlvQixTQUFTQyxZQUFZLEdBQUdDLEtBQUssSUFDckQrQixRQUFRQyxJQUFJdEQsR0FDWnFELFFBQVFDLElBQUluRCxHQUNaa0QsUUFBUUMsSUFBSXRELEVBQVlTLFFBQVFJLFFBQ2hDd0MsUUFBUUMsSUFBSSxlQUFpQnRELEVBQVlTLFFBQVF5QixZQUFjLE1BQy9EbUIsUUFBUUMsSUFBSXRELEVBQVlTLFFBQVFDLFVBQVVDLEtBQzlDLENBQUUsTUFBTzRDLEdBQ0xGLFFBQVFDLElBQUlDLEVBQ2hCLENBRUosQ0VkQTNELEVBQVcsU0NISixXQUVILElBQUlDLEVBRGlCTyxTQUFTQyxjQUFjLGtCQUUvQjBCLGlCQUFpQixTQUFVeUIsSUFDcEMsTUFBTUMsRUFBY3JELFNBQVNDLGNBQWMsVUFDM0NSLEVBQVE0RCxFQUFZQyxNQUNwQkwsUUFBUUMsSUFBSXpELEdBQ1pELEVBQVdDLEdBQ1gyRCxFQUFNRyxnQkFBZ0IsR0FFOUIsQ0ROQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dldERhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2hvd0RhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc2VhcmNoRGF0YS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzaG93Q3VycmVudERhdGEgfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihwbGFjZSkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvZm9yZWNhc3QuanNvbj9rZXk9ODI5ZDczNGU5MmJjNGEwMDg4MjE2MzA1MTIzMjgwMyZxPScgKyBwbGFjZSArICcmZGF5cz03JmFxaT1ubyZhbGVydHM9bm8nKVxuICAgICAgICBjb25zdCB3ZWF0aGVyRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBjb25zdCByZXNwb25zZUFzdHJvbm9teSA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2FzdHJvbm9teS5qc29uP2tleT04MjlkNzM0ZTkyYmM0YTAwODgyMTYzMDUxMjMyODAzJnE9JyArIHBsYWNlICsgJyZkdD0nKVxuICAgICAgICBjb25zdCBhc3Ryb25vbXlEYXRhID0gYXdhaXQgcmVzcG9uc2VBc3Ryb25vbXkuanNvbigpXG4gICAgICAgIHNob3dDdXJyZW50RGF0YSh3ZWF0aGVyRGF0YSwgYXN0cm9ub215RGF0YSlcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91clswXSlcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlckRhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKGFzdHJvbm9teURhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2ZlZWxzIGxpa2U6ICcgKyB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgJyBDJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmN1cnJlbnQuY29uZGl0aW9uLnRleHQpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cblxufSIsImV4cG9ydCBmdW5jdGlvbiBzaG93Q3VycmVudERhdGEod2VhdGhlckRhdGEsIGFzdHJvbm9teURhdGEpIHtcbiAgICAvL2N1cnJlbnQgZGF5IHNlY3Rpb25cbiAgICBjb25zdCBsb2NhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2NhdGlvbicpO1xuICAgIGxvY2F0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEubG9jYXRpb24ubmFtZTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb25kaXRpb24nKTtcbiAgICBjb25kaXRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0O1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGVtcGVyYXR1cmUnKTtcbiAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jICsgJ8KwJztcblxuICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5Jyk7XG4gICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnSHVtaWRpdHk6ICcgKyB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuXG4gICAgY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG4gICAgd2luZC50ZXh0Q29udGVudCA9ICdXaW5kOiAnICsgd2VhdGhlckRhdGEuY3VycmVudC53aW5kX2twaCArICcga3BoJztcblxuICAgIGNvbnN0IHRocm91Z2hEYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGhyb3VnaC1kYXktdGVtcCcpO1xuICAgIHRocm91Z2hEYXkucmVwbGFjZUNoaWxkcmVuKCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgIHRocm91Z2hEYXkuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPSdob3VybHktdGVtcCc+XG4gICAgICAgIDxkaXY+JHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRpbWUuc3Vic3RyKDExLCA1KX08L2Rpdj5cbiAgICAgICAgPGRpdj4ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0uY2hhbmNlX29mX3JhaW59JTwvZGl2PlxuICAgICAgICA8ZGl2PjxpbWcgc3JjPScke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0uY29uZGl0aW9uLmljb259Jz48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0ndGVtcGVyYXR1cmVIb3VyJz4ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0udGVtcF9jfcKwPC9kaXY+XG4gICAgICAgIDwvZGl2PmBcbiAgICB9XG5cbiAgICAvLyBjaGFuZ2UgdGVtcGVyYXR1cmUgcGFyYW1ldGVyIG9uIGNsaWNrXG4gICAgbGV0IHNob3dDZWwgPSB0cnVlO1xuICAgIGNvbnN0IGNoYW5nZUNGID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNoYW5nZS1jZWwtZmFoJyk7XG4gICAgY29uc3QgdGVtcGVyYXR1cmVIb3VyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRlbXBlcmF0dXJlSG91cicpO1xuICAgIGNoYW5nZUNGLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoc2hvd0NlbCkge1xuICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfZiArICfCsCc7XG4gICAgICAgICAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgICAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfZiArICfCsCc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZUhvdXJbaV0udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRlbXBfZiArICfCsCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG93Q2VsID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0ZW1wZXJhdHVyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQudGVtcF9jICsgJ8KwJztcbiAgICAgICAgICAgIGNvbnN0IGZlZWxzTGlrZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVscy1saWtlJyk7XG4gICAgICAgICAgICBmZWVsc0xpa2UudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LmZlZWxzbGlrZV9jICsgJ8KwJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICAgICAgICAgIHRlbXBlcmF0dXJlSG91cltpXS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbaV0udGVtcF9jICsgJ8KwJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNob3dDZWwgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGluZm9ybWF0aW9uIHNlY3Rpb25cbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKTtcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gYXN0cm9ub215RGF0YS5hc3Ryb25vbXkuYXN0cm8uc3VucmlzZTtcblxuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKTtcbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBhc3Ryb25vbXlEYXRhLmFzdHJvbm9teS5hc3Ryby5zdW5zZXQ7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyAnwrAnO1xuXG4gICAgY29uc3QgaHVtaWRpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LWluZm8nKTtcbiAgICBodW1pZGl0eUluZm8udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuXG4gICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRpcmVjdGlvbicpO1xuICAgIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyO1xuXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKTtcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyAnIGhQYSc7XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKTtcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC52aXNfa20gKyAnIGttJztcblxuICAgIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYtaW5kZXgnKTtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC51djtcblxuICAgIC8vIDEgd2VlayBmb3JlY2FzdCBzZWN0aW9uXG5cbiAgICBjb25zdCB3ZWVrVGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWVrLXRlbXAnKTtcbiAgICBmb3IgKGxldCBkYXkgPSAwOyBkYXkgPCA3OyBkYXkrKykge1xuICAgICAgICBjb25zdCBkID0gbmV3IERhdGUod2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXRlKTtcblxuICAgICAgICBsZXQgZGF0ZURheSA9IGQudG9TdHJpbmcoKTtcblxuICAgICAgICB3ZWVrVGVtcC5pbm5lckhUTUwgKz0gYFxuICAgICAgICA8ZGl2IGNsYXNzPSdkYXknPlxuICAgICAgICA8ZGl2IGNsYXNzPSd3ZWVrLWRheSc+JHtkYXRlRGF5LnN1YnN0cigwLCAxMCl9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3dlZWstY29uZGl0aW9uJz48aW1nIHNyYz0nJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5jb25kaXRpb24uaWNvbn0nPjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSd3ZWVrLXJhaW4nPiR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbZGF5XS5kYXkuZGFpbHlfY2hhbmNlX29mX3JhaW59JTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPSd3ZWVrLWh1bWlkaXR5Jz4ke3dlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2RheV0uZGF5LmF2Z2h1bWlkaXR5fSU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz0nd2Vlay10ZW1wZXJhdHVyZSc+JHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVtkYXldLmRheS5hdmd0ZW1wX2N9wrA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG59IiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2dldERhdGFcIjtcbmltcG9ydCB7IHNlYXJjaFBsYWNlIH0gZnJvbSBcIi4vc2VhcmNoRGF0YVwiO1xuaW1wb3J0IHsgc2hvd0RhdGEgfSBmcm9tIFwiLi9zaG93RGF0YVwiO1xuXG5cbmdldFdlYXRoZXIoJ01pbGFuJylcbnNlYXJjaFBsYWNlKCk7XG5cblxuXG5cblxuIiwiaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL2dldERhdGFcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBsYWNlKCkge1xuICAgIGNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gtYnV0dG9uJyk7XG4gICAgbGV0IHBsYWNlO1xuICAgIHNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBzZWFyY2hJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwbGFjZScpO1xuICAgICAgICBwbGFjZSA9IHNlYXJjaElucHV0LnZhbHVlO1xuICAgICAgICBjb25zb2xlLmxvZyhwbGFjZSk7XG4gICAgICAgIGdldFdlYXRoZXIocGxhY2UpO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xufSJdLCJuYW1lcyI6WyJhc3luYyIsImdldFdlYXRoZXIiLCJwbGFjZSIsInJlc3BvbnNlIiwiZmV0Y2giLCJ3ZWF0aGVyRGF0YSIsImpzb24iLCJyZXNwb25zZUFzdHJvbm9teSIsImFzdHJvbm9teURhdGEiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZXh0Q29udGVudCIsImxvY2F0aW9uIiwibmFtZSIsImN1cnJlbnQiLCJjb25kaXRpb24iLCJ0ZXh0IiwidGVtcGVyYXR1cmUiLCJ0ZW1wX2MiLCJodW1pZGl0eSIsIndpbmRfa3BoIiwidGhyb3VnaERheSIsInJlcGxhY2VDaGlsZHJlbiIsImkiLCJpbm5lckhUTUwiLCJmb3JlY2FzdCIsImZvcmVjYXN0ZGF5IiwiaG91ciIsInRpbWUiLCJzdWJzdHIiLCJjaGFuY2Vfb2ZfcmFpbiIsImljb24iLCJzaG93Q2VsIiwiY2hhbmdlQ0YiLCJ0ZW1wZXJhdHVyZUhvdXIiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlbXBfZiIsImZlZWxzbGlrZV9mIiwiZmVlbHNsaWtlX2MiLCJhc3Ryb25vbXkiLCJhc3RybyIsInN1bnJpc2UiLCJzdW5zZXQiLCJ3aW5kX2RpciIsInByZXNzdXJlX21iIiwidmlzX2ttIiwidXYiLCJ3ZWVrVGVtcCIsImRheSIsImRhdGVEYXkiLCJEYXRlIiwiZGF0ZSIsInRvU3RyaW5nIiwiZGFpbHlfY2hhbmNlX29mX3JhaW4iLCJhdmdodW1pZGl0eSIsImF2Z3RlbXBfYyIsInNob3dDdXJyZW50RGF0YSIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsImV2ZW50Iiwic2VhcmNoSW5wdXQiLCJ2YWx1ZSIsInByZXZlbnREZWZhdWx0Iiwic2VhcmNoUGxhY2UiXSwic291cmNlUm9vdCI6IiJ9