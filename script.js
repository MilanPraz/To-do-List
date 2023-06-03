

////  Todo list JS Part

let btn1=document.getElementById("btn")
let input=document.getElementById("input1")
let lists=document.querySelector("#lists")
let content=document.querySelector("#content")
let mydate=document.querySelector("#mydate")

const myArray=[];
// const dArray=[];

// let mobject=JSON.parse(myobject)
// console.log(myobject)

renderme();
function renderme(){
    let html='';
    let myobject=JSON.parse(localStorage.getItem('person')) || 0;

    // const name=myArray.name;
    // const date=myArray.date;

   
    console.log(myobject)
    
    for(let i=0;i<myobject.length;i++){

        let todoobject=myobject[i];
        const {name,date}=todoobject;


        let phtml=`<div>${name}</div> <div>${date}</div>
        <div><button class="delete-btn" onclick="deleteme(${i})" >Delete</button></div>
        `
        html+=phtml;
      
  

   
    


   
    //     const node=document.createElement("li");
    //     const textnode=document.createTextNode(data);
    //     node.appendChild(textnode);
    //    lists.appendChild(node);
    


    }
    console.log(html)
    content.innerHTML=html;
   

}

function deleteme(a){
    

    myArray.splice(a,1)
    let items=JSON.parse(localStorage.getItem('person'));

        items.splice(a,1);
        
        localStorage.setItem('person',JSON.stringify(items))


    renderme();

   
}


const addme= ()=>{
    let inputValue=input.value;
    let inputdate=mydate.value;
    myArray.push({
        name:inputValue,
        date:inputdate
    });
    let stringdata=JSON.stringify(myArray);
        localStorage.setItem('person',stringdata)
     
            console.log(stringdata)
        // for(let i=0;i<myArray.length;i++){
        //     dArray.push(myArray[i]);
        // }
        
  
    renderme();
    input.value='';
    mydate.value='';
    
    // dArray.length=0;
    console.log(myArray)

}


// btn1.addEventListener('onclick',()=>{
// console.log("hello")
// })

// btn1.addEventListener("click",()=>{
//     let inputValue=input.innerHTML;
//     myArray.push(inputValue);
//     console.log(myArray)


// })
