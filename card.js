let imageHTML = document.getElementById('image');
let titleHTML = document.getElementById('title');
let desHTML = document.getElementById('description');
let colorsHTML = document.getElementById('colors');
let sizesHTML = document.getElementById('sizes');
let priceHTML = document.getElementById('price');

let poduct ={
name:'tshirt CB01',
des: Lorem ipsum dolor sit amet consectetur adipisicing elit.
 Nam consectetur error tempora cumque magnam minima non, 
 fugiat dolores animi maxime at officia omnis.
  Odit quo dolore quam aspernatur laboriosam veritatis,
  image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHa4skoQhWCYOJKx-gEf1-1CChkT0lpkXmbw&s',
  price:'100~200',
  children:{
    {color: '#bfb1a4,size:'M',price:100 },
        {color: '#bfb1a4,size:'L',price:100 },
            { color: '#bfb1a4,size:'XL',price:100},
                { color: '#bfb1a4,size:'M',price:100},
  }
};
const initApp =() =>{
  titleHTML.innerText=Product.name;
  desHTML.innerText= poduct.des;
}
initApp{
  
};