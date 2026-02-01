import { db } from './firebase.js';
import { collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

Telegram.WebApp.ready();Telegram.WebApp.expand();

const box=document.getElementById('series');
const snap=await getDocs(collection(db,'series'));
snap.forEach(doc=>{
const s=doc.data();
box.innerHTML+=`<div class="card" onclick="location.href='series.html?id=${doc.id}'">
<img src="${s.poster}"><h3>${s.title}</h3><span>${s.category}</span></div>`;
});