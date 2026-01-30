const ADMIN_ID = "2084879724";
const tg = Telegram.WebApp;
tg.ready();

if(String(tg.initDataUnsafe?.user?.id) === ADMIN_ID){
  auth.innerHTML = "✅ تم التحقق";
  panel.style.display = "block";
}else{
  auth.innerHTML = "❌ غير مصرح";
}

let items=[];
function addItem(){
  const t=title.value,c=category.value,p=poster.value,u=url.value;
  if(!t||!u){alert("اكمل البيانات");return;}
  items.push({id:Date.now().toString(),title:t,category:c||"عام",poster:p||"",url:u});
  output.textContent = JSON.stringify({items},null,2);
}
