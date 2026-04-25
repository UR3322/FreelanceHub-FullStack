
let data=[];

async function load(){
 const res=await fetch('http://localhost:3000/api/services');
 data=await res.json();
 render(data);
}

function render(arr){
 const c=document.getElementById('services');
 c.innerHTML='';
 arr.forEach(s=>{
  c.innerHTML+=`
  <div class="card" draggable="true" ondragstart="drag(event)" data-id="${s.id}">
   <h3>${s.title}</h3>
   <p>${s.category}</p>
   <p>$${s.price}</p>
   <p>${s.rating}</p>
   <button onclick="save(${s.id})">Save</button>
   <button onclick="hire(${s.id})">Hire</button>
  </div>`;
 });
}

document.getElementById('search').oninput=e=>{
 render(data.filter(x=>x.title.toLowerCase().includes(e.target.value.toLowerCase())));
};

document.getElementById('filter').onchange=e=>{
 render(data.filter(x=>!e.target.value||x.category===e.target.value));
};

document.getElementById('sort').onchange=e=>{
 let arr=[...data];
 if(e.target.value==='price') arr.sort((a,b)=>a.price-b.price);
 if(e.target.value==='rating') arr.sort((a,b)=>b.rating-a.rating);
 render(arr);
};

async function save(id){
 await fetch('http://localhost:3000/api/save',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id})});
 alert("Saved");
}

async function hire(id){
 await fetch('http://localhost:3000/api/hire',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({id})});
 alert("Hired");
}

function drag(ev){
 ev.dataTransfer.setData("id", ev.target.dataset.id);
}

document.getElementById('dropZone').ondragover=e=>e.preventDefault();

document.getElementById('dropZone').ondrop=async e=>{
 e.preventDefault();
 const id=e.dataTransfer.getData("id");
 await hire(id);
 alert("Hired via drag & drop");
};

load();
