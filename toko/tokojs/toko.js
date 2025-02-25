document.querySelectorAll('.btnDetail').forEach(item =>{
  item.addEventListener('.click',(e) => {
    let parent = e.target.parentNode.parentNode;
    
    let gambar = parent.querySelector('.card-img-top p-5').src;
    let harga = parent.querySelector('.harga').InnerHTML;
    let judul = parent.querySelector('.card-text').InnerHTML;
    let depkripsi = parent.querySelector('.depkripsi') ? parent.querySelector('.depkripsi').InnerHTML: '<i>tidakada</i>';
   
    let tombolModal = document.querySelector('.btnModal');
    tombolModal.click
  });
});