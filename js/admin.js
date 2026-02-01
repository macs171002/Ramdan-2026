import { db } from './firebase.js';
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const ADMIN_ID=2084879724;
const u=Telegram.WebApp.initDataUnsafe?.user?.id;
if(u!==ADMIN_ID)document.body.innerHTML='🚫';

window.save=async()=>{
await addDoc(collection(db,'series'),{
title:title.value,
category:cat.value,
poster:poster.value,
description:desc.value,
episodes:JSON.parse(episodes.value)
});
alert('Saved');
};