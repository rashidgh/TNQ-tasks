const form = document.querySelector("form");
const select = document.querySelector("select");
const btn = document.getElementById("loadBtn");
const result = document.querySelector("#result");
const div = document.getElementById("divBlock");
form.addEventListener("submit", async e => {
  e.preventDefault();
  if (e.target[0].value === "active") {
      let data = await window.fetch("./data.json");
    let data1 = await data.json();
    console.log(data1);
      data1.map(x => {
        if(x.status==="active")
      result.innerHTML += `<table>
    <tr><td>${x.capsule_id}</td>
    <td>${x.missions.length}</td>
    <td class="det">${x.details}</td></tr>
</table>`;
    });
  }
});
