fetch('data.json')
.then(function(response){
  return response.json();
})
.then(function(datas){
  let placeholder = document.querySelector('#data-output');
  let out = '';
  for(let data of datas) {
    out += `
      <tr>
        <td>
          <img src="${data.icon}" />
          <b>${data.category}</b>
        </td>
        <td><b>${data.score}</b> <span>/ 100</span></td>
      </tr>
    `;
  }
  placeholder.innerHTML = out;
})