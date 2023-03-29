(()=>{"use strict";async function e(e){try{const t=await fetch("http://api.weatherapi.com/v1/forecast.json?key=829d734e92bc4a00882163051232803&q="+e+"&days=7&aqi=no&alerts=no"),o=await t.json(),n=await fetch("http://api.weatherapi.com/v1/astronomy.json?key=829d734e92bc4a00882163051232803&q="+e+"&dt="),r=await n.json();!function(e,t){document.querySelector(".location").textContent=e.location.name,document.querySelector(".condition").textContent=e.current.condition.text;const o=document.querySelector(".temperature");o.textContent=e.current.temp_c+"°",document.querySelector(".humidity").textContent="Humidity: "+e.current.humidity+"%",document.querySelector(".wind").textContent="Wind: "+e.current.wind_kph+" kph";const n=document.querySelector(".through-day-temp");n.replaceChildren();for(let t=0;t<24;t++)n.innerHTML+=`<div class='hourly-temp'>\n        <div>${e.forecast.forecastday[0].hour[t].time.substr(11,5)}</div>\n        <div>${e.forecast.forecastday[0].hour[t].chance_of_rain}%</div>\n        <div><img src='${e.forecast.forecastday[0].hour[t].condition.icon}'></div>\n        <div class='temperatureHour'>${e.forecast.forecastday[0].hour[t].temp_c}°</div>\n        </div>`;let r=!0;const c=document.querySelector(".change-cel-fah"),u=document.querySelectorAll(".temperatureHour");c.addEventListener("click",(()=>{if(r){o.textContent=e.current.temp_f+"°";for(let t=0;t<24;t++)u[t].textContent=e.forecast.forecastday[0].hour[t].temp_f+"°";r=!1}else{o.textContent=e.current.temp_c+"°";for(let t=0;t<24;t++)u[t].textContent=e.forecast.forecastday[0].hour[t].temp_c+"°";r=!0}})),document.querySelector(".sunrise").textContent=t.astronomy.astro.sunrise,document.querySelector(".sunset").textContent=t.astronomy.astro.sunset,document.querySelector(".feels-like").textContent=e.current.feelslike_c+"°",document.querySelector(".humidity-info").textContent=e.current.humidity+"%",document.querySelector(".wind-direction").textContent=e.current.wind_dir,document.querySelector(".pressure").textContent=e.current.pressure_mb+" hPa",document.querySelector(".visibility").textContent=e.current.vis_km+" km",document.querySelector(".uv-index").textContent=e.current.uv}(o,r),console.log(o.forecast.forecastday[0].hour[0]),console.log(o),console.log(r),console.log(o.current.temp_c),console.log("feels like: "+o.current.feelslike_c+" C"),console.log(o.current.condition.text)}catch(e){console.log(e)}}e("Milan"),function(){let t;document.querySelector(".search-button").addEventListener("click",(o=>{const n=document.querySelector("#place");t=n.value,console.log(t),e(t),o.preventDefault()}))}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRQyxJQUFJNUMsRUFBWVMsUUFBUUMsVUFBVUMsS0FDOUMsQ0FBRSxNQUFPa0MsR0FDTEYsUUFBUUMsSUFBSUMsRUFDaEIsQ0FFSixDRWRBakQsRUFBVyxTQ0hKLFdBRUgsSUFBSUMsRUFEaUJPLFNBQVNDLGNBQWMsa0JBRS9CMEIsaUJBQWlCLFNBQVVlLElBQ3BDLE1BQU1DLEVBQWMzQyxTQUFTQyxjQUFjLFVBQzNDUixFQUFRa0QsRUFBWUMsTUFDcEJMLFFBQVFDLElBQUkvQyxHQUNaRCxFQUFXQyxHQUNYaUQsRUFBTUcsZ0JBQWdCLEdBRTlCLENETkFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZXREYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3Nob3dEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3NlYXJjaERhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2hvd0N1cnJlbnREYXRhIH0gZnJvbSBcIi4vc2hvd0RhdGFcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIocGxhY2UpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vYXBpLndlYXRoZXJhcGkuY29tL3YxL2ZvcmVjYXN0Lmpzb24/a2V5PTgyOWQ3MzRlOTJiYzRhMDA4ODIxNjMwNTEyMzI4MDMmcT0nICsgcGxhY2UgKyAnJmRheXM9NyZhcWk9bm8mYWxlcnRzPW5vJylcbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgICAgY29uc3QgcmVzcG9uc2VBc3Ryb25vbXkgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9hc3Ryb25vbXkuanNvbj9rZXk9ODI5ZDczNGU5MmJjNGEwMDg4MjE2MzA1MTIzMjgwMyZxPScgKyBwbGFjZSArICcmZHQ9JylcbiAgICAgICAgY29uc3QgYXN0cm9ub215RGF0YSA9IGF3YWl0IHJlc3BvbnNlQXN0cm9ub215Lmpzb24oKVxuICAgICAgICBzaG93Q3VycmVudERhdGEod2VhdGhlckRhdGEsIGFzdHJvbm9teURhdGEpXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhLmZvcmVjYXN0LmZvcmVjYXN0ZGF5WzBdLmhvdXJbMF0pXG4gICAgICAgIGNvbnNvbGUubG9nKHdlYXRoZXJEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyhhc3Ryb25vbXlEYXRhKVxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmZWVscyBsaWtlOiAnICsgd2VhdGhlckRhdGEuY3VycmVudC5mZWVsc2xpa2VfYyArICcgQycpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyRGF0YS5jdXJyZW50LmNvbmRpdGlvbi50ZXh0KVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG5cbn0iLCJleHBvcnQgZnVuY3Rpb24gc2hvd0N1cnJlbnREYXRhKHdlYXRoZXJEYXRhLCBhc3Ryb25vbXlEYXRhKSB7XG4gICAgY29uc3QgbG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmxvY2F0aW9uLm5hbWU7XG5cbiAgICBjb25zdCBjb25kaXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29uZGl0aW9uJyk7XG4gICAgY29uZGl0aW9uLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC5jb25kaXRpb24udGV4dDtcblxuICAgIGNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG4gICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyArICfCsCc7XG5cbiAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gJ0h1bWlkaXR5OiAnICsgd2VhdGhlckRhdGEuY3VycmVudC5odW1pZGl0eSArICclJztcblxuICAgIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2luZCcpO1xuICAgIHdpbmQudGV4dENvbnRlbnQgPSAnV2luZDogJyArIHdlYXRoZXJEYXRhLmN1cnJlbnQud2luZF9rcGggKyAnIGtwaCc7XG5cbiAgICBjb25zdCB0aHJvdWdoRGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRocm91Z2gtZGF5LXRlbXAnKTtcbiAgICB0aHJvdWdoRGF5LnJlcGxhY2VDaGlsZHJlbigpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjQ7IGkrKykge1xuICAgICAgICB0aHJvdWdoRGF5LmlubmVySFRNTCArPSBgPGRpdiBjbGFzcz0naG91cmx5LXRlbXAnPlxuICAgICAgICA8ZGl2PiR7d2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS50aW1lLnN1YnN0cigxMSwgNSl9PC9kaXY+XG4gICAgICAgIDxkaXY+JHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLmNoYW5jZV9vZl9yYWlufSU8L2Rpdj5cbiAgICAgICAgPGRpdj48aW1nIHNyYz0nJHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLmNvbmRpdGlvbi5pY29ufSc+PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9J3RlbXBlcmF0dXJlSG91cic+JHt3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRlbXBfY33CsDwvZGl2PlxuICAgICAgICA8L2Rpdj5gXG4gICAgfVxuXG4gICAgLy8gY2hhbmdlIHRlbXBlcmF0dXJlIHBhcmFtZXRlciBvbiBjbGlja1xuICAgIGxldCBzaG93Q2VsID0gdHJ1ZTtcbiAgICBjb25zdCBjaGFuZ2VDRiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtY2VsLWZhaCcpO1xuICAgIGNvbnN0IHRlbXBlcmF0dXJlSG91ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50ZW1wZXJhdHVyZUhvdXInKTtcbiAgICBjaGFuZ2VDRi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKHNob3dDZWwpIHtcbiAgICAgICAgICAgIHRlbXBlcmF0dXJlLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC50ZW1wX2YgKyAnwrAnO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdGVtcGVyYXR1cmVIb3VyW2ldLnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuZm9yZWNhc3QuZm9yZWNhc3RkYXlbMF0uaG91cltpXS50ZW1wX2YgKyAnwrAnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hvd0NlbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LnRlbXBfYyArICfCsCc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI0OyBpKyspIHtcbiAgICAgICAgICAgICAgICB0ZW1wZXJhdHVyZUhvdXJbaV0udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5mb3JlY2FzdC5mb3JlY2FzdGRheVswXS5ob3VyW2ldLnRlbXBfYyArICfCsCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaG93Q2VsID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICBjb25zdCBzdW5yaXNlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1bnJpc2UnKTtcbiAgICBzdW5yaXNlLnRleHRDb250ZW50ID0gYXN0cm9ub215RGF0YS5hc3Ryb25vbXkuYXN0cm8uc3VucmlzZTtcblxuICAgIGNvbnN0IHN1bnNldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdW5zZXQnKTtcbiAgICBzdW5zZXQudGV4dENvbnRlbnQgPSBhc3Ryb25vbXlEYXRhLmFzdHJvbm9teS5hc3Ryby5zdW5zZXQ7XG5cbiAgICBjb25zdCBmZWVsc0xpa2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlbHMtbGlrZScpO1xuICAgIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQuZmVlbHNsaWtlX2MgKyAnwrAnO1xuXG4gICAgY29uc3QgaHVtaWRpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmh1bWlkaXR5LWluZm8nKTtcbiAgICBodW1pZGl0eUluZm8udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50Lmh1bWlkaXR5ICsgJyUnO1xuXG4gICAgY29uc3Qgd2luZERpcmVjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kLWRpcmVjdGlvbicpO1xuICAgIHdpbmREaXJlY3Rpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyRGF0YS5jdXJyZW50LndpbmRfZGlyO1xuXG4gICAgY29uc3QgcHJlc3N1cmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJlc3N1cmUnKTtcbiAgICBwcmVzc3VyZS50ZXh0Q29udGVudCA9IHdlYXRoZXJEYXRhLmN1cnJlbnQucHJlc3N1cmVfbWIgKyAnIGhQYSc7XG5cbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZpc2liaWxpdHknKTtcbiAgICB2aXNpYmlsaXR5LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC52aXNfa20gKyAnIGttJztcblxuICAgIGNvbnN0IHV2SW5kZXggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXYtaW5kZXgnKTtcbiAgICB1dkluZGV4LnRleHRDb250ZW50ID0gd2VhdGhlckRhdGEuY3VycmVudC51djtcbn0iLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuaW1wb3J0IHsgc2VhcmNoUGxhY2UgfSBmcm9tIFwiLi9zZWFyY2hEYXRhXCI7XG5pbXBvcnQgeyBzaG93RGF0YSB9IGZyb20gXCIuL3Nob3dEYXRhXCI7XG5cblxuZ2V0V2VhdGhlcignTWlsYW4nKVxuc2VhcmNoUGxhY2UoKTtcblxuXG5cblxuXG4iLCJpbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vZ2V0RGF0YVwiO1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGxhY2UoKSB7XG4gICAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlYXJjaC1idXR0b24nKTtcbiAgICBsZXQgcGxhY2U7XG4gICAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsYWNlJyk7XG4gICAgICAgIHBsYWNlID0gc2VhcmNoSW5wdXQudmFsdWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHBsYWNlKTtcbiAgICAgICAgZ2V0V2VhdGhlcihwbGFjZSk7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSk7XG59Il0sIm5hbWVzIjpbImFzeW5jIiwiZ2V0V2VhdGhlciIsInBsYWNlIiwicmVzcG9uc2UiLCJmZXRjaCIsIndlYXRoZXJEYXRhIiwianNvbiIsInJlc3BvbnNlQXN0cm9ub215IiwiYXN0cm9ub215RGF0YSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRleHRDb250ZW50IiwibG9jYXRpb24iLCJuYW1lIiwiY3VycmVudCIsImNvbmRpdGlvbiIsInRleHQiLCJ0ZW1wZXJhdHVyZSIsInRlbXBfYyIsImh1bWlkaXR5Iiwid2luZF9rcGgiLCJ0aHJvdWdoRGF5IiwicmVwbGFjZUNoaWxkcmVuIiwiaSIsImlubmVySFRNTCIsImZvcmVjYXN0IiwiZm9yZWNhc3RkYXkiLCJob3VyIiwidGltZSIsInN1YnN0ciIsImNoYW5jZV9vZl9yYWluIiwiaWNvbiIsInNob3dDZWwiLCJjaGFuZ2VDRiIsInRlbXBlcmF0dXJlSG91ciIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhZGRFdmVudExpc3RlbmVyIiwidGVtcF9mIiwiYXN0cm9ub215IiwiYXN0cm8iLCJzdW5yaXNlIiwic3Vuc2V0IiwiZmVlbHNsaWtlX2MiLCJ3aW5kX2RpciIsInByZXNzdXJlX21iIiwidmlzX2ttIiwidXYiLCJzaG93Q3VycmVudERhdGEiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJldmVudCIsInNlYXJjaElucHV0IiwidmFsdWUiLCJwcmV2ZW50RGVmYXVsdCIsInNlYXJjaFBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==