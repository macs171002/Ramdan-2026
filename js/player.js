const v=document.getElementById('video');
const url=new URLSearchParams(location.search).get('url');
if(url.endsWith('.m3u8')&&Hls.isSupported()){const h=new Hls();h.loadSource(url);h.attachMedia(v);}
else{v.src=url;}