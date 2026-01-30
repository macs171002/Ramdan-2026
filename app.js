let allItems=[];
const favs = JSON.parse(localStorage.getItem("favs")||"[]");

fetch("data.json").then(r=>r.json()).then(d=>{
  allItems=d.items;
  renderCats();
  render(allItems);
});

function render(items){
  const list=document.getElementById("list");
  list.innerHTML="";
  const views=JSON.parse(localStorage.getItem("views")||"{}");
  items.forEach(i=>{
    const isFav=favs.includes(i.id);
    list.innerHTML+=`
    <div class="card" onclick="play('${i.url}','${i.id}')">
      <span class="fav" onclick="toggleFav(event,'${i.id}')">${isFav?'⭐':'☆'}</span>
      <img src="${i.poster}">
      <h3>${i.title}</h3>
      <small>👁 ${views[i.id]||0}</small>
    </div>`;
  });
}

function play(url,id){
  location.href=`player.html?src=${encodeURIComponent(url)}&id=${id}`;
}

function toggleFav(e,id){
  e.stopPropagation();
  if(favs.includes(id)){
    favs.splice(favs.indexOf(id),1);
  }else favs.push(id);
  localStorage.setItem("favs",JSON.stringify(favs));
  render(allItems);
}

function renderCats(){
  const cats=[...new Set(allItems.map(i=>i.category))];
  const nav=document.getElementById("cats");
  nav.innerHTML=`<button onclick="render(allItems)">الكل</button>
  <button onclick="render(allItems.filter(i=>favs.includes(i.id)))">⭐ المفضلة</button>`;
  cats.forEach(c=>{
    nav.innerHTML+=`<button onclick="render(allItems.filter(i=>i.category=='${c}'))">${c}</button>`;
  });
}

function filterItems(){
  const q=document.getElementById("search").value.toLowerCase();
  render(allItems.filter(i=>i.title.toLowerCase().includes(q)));
}
