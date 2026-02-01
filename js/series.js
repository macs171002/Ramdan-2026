import { db } from './firebase.js';
import { doc, getDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const id=new URLSearchParams(location.search).get('id');
const ref=doc(db,'series',id);
const snap=await getDoc(ref);
const s=snap.data();
title.innerText=s.title;desc.innerText=s.description;
s.episodes.forEach(e=>{
episodes.innerHTML+=`<button onclick="location.href='player.html?url=${encodeURIComponent(e.url)}'">
الحلقة ${e.ep} - ${e.title}</button>`;
});