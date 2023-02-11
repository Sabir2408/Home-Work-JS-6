const ROOT = document.getElementById('root')

const btnModal = document.createElement('button')
ROOT.append(btnModal)
btnModal.textContent='SHOW MODAL'
btnModal.style.cssText = `
background-color: rgba(209, 199, 199, 0.918);
color: black;
font-size: 12px;
font-weight: 700;
word-spacing: 5px;
margin-left: 20px;
display: block;
padding: 8px 10px;
border-radius: 5px;
border: 2px solid black ;
cursor: pointer;
`
const modal = document.createElement('div')
modal.style.cssText=`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background-color: #00000030;
display: flex;
justify-content: center;
align-items: center;
`
const modalWindow=document.createElement('div')
modalWindow.style.cssText=`
width: 1000px;
height: 200px;
background-color: white;
transform: translate(-5%, 50%); //это чтобы окно было по центру
font-size: 1.9rem;
position: relative;
border: solid 0.5px gray;
border-radius: 15px;
padding: 15px;
font-weight: 500;
box-shadow: 5px 5px 10px 5px #619996ce;
`
modalWindow.innerHTML=`<h2>Warning!</h2>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati at voluptatum quia itaque officia incidunt corporis eligendi temporibus, modi dignissimos tenetur praesentium amet accusantium voluptate. Obcaecati at voluptatum quia itaque officia incidunt corporis eligendi temporibus, modi dignissimos tenetur praesentium amet accusantium voluptate.Obcaecati at voluptatum quia itaque officia incidunt corporis eligendi temporibus, modi dignissimos tenetur praesentium amet accusantium voluptate?</p>
<span><button class="accept">ACCEPT</button></span>
<span><button class="decline">DECLINE</button></span>`  

modal.append(modalWindow)

btnModal.addEventListener('click',()=>{       
    ROOT.append(modal) 
 })

 const closeModal= document.createElement('button')
 closeModal.textContent='X'
 modalWindow.append(closeModal)
 
 closeModal.style.cssText=`
 position: absolute;
 top: 3px;
 right: 3px;
background-color: white;
 width: 30px;
 height: 30px;
 color: black;
 border: none;
 border-radius: 50%;
 font-weight: 700;
 `
 closeModal.addEventListener('click', ()=>{
    modal.remove()
})

modal.addEventListener('click',(event)=>{
if(event.target!== modalWindow){
   modal.remove() 
}
// console.log(event);
})

const btnTheme = document.querySelector('.btn-toggle');
btnTheme.addEventListener("click", function () {
   document.body.classList.toggle("dark-theme");
 });


//Тут мучился со сменой картинки

//  for(i=0; i<btnTheme.length;i++){
//    btnTheme[i].onclick=funcShow;
//  }

//  function funcShow(){
//    this.classList.toggle('button.IMG-show')
//  }

// btnTheme.addEventListener('click',()=>{     
//    btnTheme.
// })
//Не понял как менять картинку при  клике, если Вы напишите сдесь как менять. был бы благодарен!
//а так гуглил , очень долго и много пытался, не получилось
//Спасибо!