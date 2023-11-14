<script>
const renderFile = () => {
  const render = document.querySelector('img')
  const file = document.querySelector('input[type=file]').files[0]
  const reader = new FileReader();
  
  
  reader.addEventListener('load' , ()=> {
    render.src = reader.result;
  }, false)

  if(file){
    reader.readAsDataURL(file);
  }
}
</script>