// let active = document.querySelector('#nav_menu>ul>li>a');
// if(active.innerHTML == ''){
//   console.log('underline');
//   active.style.textDecoration = 'underline';
// }



document.getElementById('search_btn').addEventListener('click' , bar);
    
let headMenu = document.getElementById('bottom_container')
headMenu.style.display = 'block';

let searchMenu = document.getElementById('nav_search_main');
searchMenu.style.display = 'none'

function  bar(){
   headMenu.style.display = 'none';
    searchMenu.style.display = 'block'
    } 


document.getElementById('search_btn2').addEventListener('click' , bar2);

let headMenu2 = document.getElementById('mid_div');


function  bar2(){
    searchMenu.style.display = 'block';
    headMenu2.style.display ='none';
    } 



    // sideCross.style.display ='none'
    // sideMenu.style.display ='none';
 
document.getElementById('side_menu').style.display = "none";        
document.getElementById('hamberg').style.display = "block"; 
document.getElementById('side_cross').style.display = "none";

document.getElementById('toggel_btn').addEventListener('click' , sideFun);


 let sideMenu = document.getElementById('side_menu');
 let hamburg = document.getElementById('hamberg');
 let sideCross = document.getElementById('side_cross');

function sideFun(){
if(sideMenu.style.display ==='none'){
    sideMenu.style.display ='block';
    hamburg.style.display = 'none'
    sideCross.style.display = 'block'; 
}else{
    sideMenu.style.display ='none';
    hamburg.style.display = 'block'
    sideCross.style.display = 'none'; 
    
}
}

document.getElementById('cross_btn').addEventListener('click' , searchBar);


function  searchBar(){

headMenu.style.display = 'block';
headMenu2.style.display = 'block';
searchMenu.style.display = 'none'

}


// navbar end

// banner start-end

//products start

let prod = [
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-2_1.jpg?v=1659450395',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101104-3_1_823x.jpg?v=1659450395',
    name: 'Evermore Ear Cuff Earrings',
    price: '$10.00',
    stock_status: true
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-2_1.jpg?v=1659450313',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101103-3_1_823x.jpg?v=1659450313',
    name: 'Wired Ear Cuff Earrings',
    price: '$10.00',
    stock_status: false
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-1_1_823x.jpg?v=1659450226',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101102-4_1_823x.jpg?v=1659450231',
    name: 'Fern Ear Cuff Earrings',
    price: '$10.00',
    stock_status: true
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-1_1.jpg?v=1659450051',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101101-3_1_823x.jpg?v=1659450054',
    name: 'Blossom Ear Cuff Earrings',
    price: '$10.00',
    stock_status: false
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-3_1.jpg?v=1659449973',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101108-4_1_823x.jpg?v=1659449973',
    name: 'Barrel Stone Earrings',
    price: '$18.00',
    stock_status: true
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-2_1_823x.jpg?v=1659449908',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101107-G-3_1_823x.jpg?v=1659449908',
    name: 'Ball Stud Earrings | Gold',
    price: '$12.00',
    stock_status: false
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-1_1.jpg?v=1659449836',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101106-G-4_1_823x.jpg?v=1659449841',
    name: 'Classic Stone Stud Earrings | Gold',
    price: '$12.00',
    stock_status: true
  },
  {
    image1: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-1_1_823x.jpg?v=1659449763',
    image2: 'https://cdn.shopify.com/s/files/1/0627/7388/7215/products/L101105-4_1_823x.jpg?v=1659449765',
    name: 'Acclaim Hoop Earrings',
    price: '$20.00',
    stock_status: true
  }
];

for(let k of prod){
  k.flag = 0;
}
console.log(prod);

localStorage.setItem('products',JSON.stringify(prod));

let arrLS = JSON.parse(localStorage.getItem('products'))||[];

let container = document.getElementById('jewel-main-div');

let append = (prod) => {

  container.innerHTML = null;

  prod.forEach( (el,idx) => {

    let card = document.createElement('div');
    card.setAttribute('class','jewel-card-div');

    let img1 = document.createElement('img');
    img1.setAttribute('class','jewel-card-image-1');
    img1.src = el.image1;

    let div1 = document.createElement('div');
    div1.setAttribute('class','jewel-image-div');

    let img2 = document.createElement('img');
    img2.setAttribute('class','jewel-card-image-2');
    img2.src = el.image2;

    let div2 = document.createElement('div');
    div2.setAttribute('class','div-2');
    div2.setAttribute('class','overlay111');
    
    let name1 = document.createElement('p');
    name1.innerText = el.name;
    name1.setAttribute('id','jewel-card-div-name');
    
    let price1 = document.createElement('p');
    price1.innerText = el.price;
    price1.setAttribute('id','jewel-card-div-price');

    let icon_div_outer = document.createElement('div');
    icon_div_outer.setAttribute('id','icon_div_outer');

    let icon_div_inner = document.createElement('div');
    icon_div_inner.setAttribute('class','icon_div_inner');

      // product to cart
    
    img2.addEventListener('click',function(){
      let obj = {
        image1:el.image1,
        image2:el.image2,
        name:el.name,
        price:el.price,
        stock_status:el.stock_status
      }
      localStorage.setItem('jewel-product',JSON.stringify(obj));
      window.location.href = 'displayProduct.html'
    });










    icon_div_outer.innerHTML = `<button id='icon-heart-hollow' style='font-size:24px;color: #d8a353'> <i class='far fa-heart'></i></button>`;

    icon_div_outer.onclick = () => {
      console.log('onclick');
      if(el.flag == 0){
        icon_div_outer.innerHTML = `<button id='icon-heart-fill' style='font-size:24px;color:#d8a353'><i class='fas fa-heart'></i></button>`;
        el.flag = 1;
      } else if (el.flag == 1){
        icon_div_outer.innerHTML = `<button id='icon-heart-hollow' style='font-size:24px;color: #d8a353'> <i class='far fa-heart'></i></button>`;
        el.flag = 0;
      }
    }

    icon_div_outer.append(icon_div_inner);
    div2.append(img2);
    card.append(div1, name1, price1, icon_div_outer);
    div1.append(img1,div2);
    container.append(card);
    arrLS.push(el);
  });
  localStorage.setItem('products',JSON.stringify(arrLS));

}
append(arrLS);

let hollow_btn = document.getElementById('icon-heart-hollow');
hollow_btn.addEventListener('click', () => {
  console.log('hello nitya');
  let outer_div = document.getElementById('icon_div_outer');
  outer_div.innerHTML = `<button id='icon-heart-fill' style='font-size:24px;color:#d8a353'><i class='fas fa-heart'></i></button>`;
});

let fill_btn = document.getElementById('icon-heart-fill');

// products end

// shop the feed start

var wraper=document.getElementsByClassName("shop_the_feed_container")
let btnloadmore=document.getElementById("loadmore")
let currentchild=1;
btnloadmore.addEventListener("click",function()
{
    for(let i=currentchild;i<currentchild+1;i++)
    {
        if(wraper[i])
        {
            wraper[i].style.display = 'block';
        }
    }
    currentchild ++;
    if(currentchild>=wraper.length)
    {
        event.target.style.display='none';
    }
});

// shop the feed end

// footer start

document.querySelector('#email-input-form').addEventListener('submit',addSubscriber)
let success_msg = document.getElementById("success-msg");

let arrObj = JSON.parse(localStorage.getItem('subscriber'))||[];

function addSubscriber(event){
    event.preventDefault();
    let val = document.getElementById('email-signup').value;
    if(val !== ""){
        let obj = {
            email: val
        };
        if(arrObj.length === 0){
            arrObj.push(obj);
            success_msg.innerText = "Thanks for Subscribe!";
            localStorage.setItem("subscriber",JSON.stringify(arrObj));
        }else{
            let flag = false;
            for(let i=0;i<arrObj.length;i++){
                if(arrObj[i].email == val){
                    flag = true;
                    break;
                }
            };  
            if(flag){
                success_msg.innerText = "You are already subscribed!"                
            }else{
                arrObj.push(obj);
                success_msg.innerText = "Thanks for Subscribing!";
                localStorage.setItem("subscriber",JSON.stringify(arrObj));
            }
        }
    }
}   

// footer end