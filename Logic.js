
const submit=document.getElementById('submit');
const con=document.querySelector('#url');
const imgBox=document.getElementById('qr');
const img=document.getElementById('qr-img');

const GenrateQRcode=()=>{
    if(con===''){
        alert("Enter valid Text or Link");
    }else{
        img.src=`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${con.value}`  
    }
}
submit.addEventListener('click',()=>{
      GenrateQRcode();
});

const getdata=()=>{
    localStorage.getItem('data',img);
}
