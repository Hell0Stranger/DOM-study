/* ----๐ฅจ4. ์คํ์ผ ์์ฑ๋ช๊ณผ ๊ฐbubbling ----- */
    window.addEventListener("load", () =>{
        let section = document.querySelector("#s4");
        let styleInput = section.querySelector(".style-input");
        let widthInput = section.querySelector(".width-input");
        let radiusInput = section.querySelector(".radius-input");
        let colorInput = section.querySelector(".color-input");
        let item = section.querySelector(".item");
        let outputDiv = section.querySelector(".output");
        
        // onchange / onmousedown / onInput
        styleInput.oninput = (e) =>{
            item.style.borderStyle = styleInput.value;
            outputDiv.innerText = item.style.cssText;
        }
        
        widthInput.oninput = (e) =>{
            item.style.borderWidth = widthInput.value+"px";
            outputDiv.innerText = item.style.cssText;
        }
        
        radiusInput.oninput = (e) => {
            item.style.borderRadius = radiusInput.value+"px";
            outputDiv.innerText = item.style.cssText;
        }
   
        colorInput.oninput = (e) => {
            item.style.backgroundColor = colorInput.value;
            outputDiv.innerText = item.style.cssText;
        }
     
    })


    //txt1.style.width = 100; 
    //txt1.style.width = "100px";  
    //๊ธฐ๋ณธ์ ์ผ๋ก ์๋ฆฌ๋จผํธ๋ ์คํ์ผ ์์ฑ์ ๊ฐ์ง๊ณ ์๋ค.
    //๊ทธ ์๋ฆฌ๋จผํธ์ ์คํ์ผ์์ฑ์ ๋๋ถ๋ถ string์ด๊ธฐ๋๋ฌธ์ ๋จ์๋ฅผ ๋ถ์ฌ์ "์์ ํ๊ธฐ"
    //ex) ์์ฑ๋ช์ด border-color ๊ฐ์ด '-' ๊ตฌ๋ถ์๊ฐ ํ์ํ ๊ฒฝ์ฐ
    // -> ์๋ฐ์คํฌ๋ฆฝํธ์๋ -๊ตฌ๋ถ์๊ฐ ์๊ธฐ๋๋ฌธ์ ์นด๋ฉ์ผ์ด์ค๋ก ๊ตฌ๋ถ
    // txt1.style["background-color"] = "red"; O
    // txt1.style.backgroundColor = "red"; O
    
/* -------๐ฅจ 3. ํฅ์๋ ๊ณ์ฐ๊ธฐ ex ----------- */

window.addEventListener("load", () =>{
    let section = document.querySelector("#s3");
    let txtInput = section.querySelector("input[type=text]");
    let btnInputs = section.querySelectorAll(".num");
    let box = section.querySelector("div");
    let divInput = box.querySelector("input[value='/']");
    
    divInput.onclick = (e) => {console.log("๋๋์ ์ฐ์ฐ");
    e.stopPropagation();
    }
    // div์ ํ๊ทธ ๊ตฌ๋ถ ---  ๋ฒ๋ธ๋ง ์ ์ฉ
    box.onclick = (e) => {
        e.preventDefault();
        //box ์์์ ์ด๋ฒคํธ ๋ฐ์ -> element๋ก ํ์ 
        //text์ name ๊ฐ์ ?
        // console.log(e.target.nodeValue);
        // console.log(e.target.nodeType);

    //----์กฐ๊ฑด์ ์ญ๋ฐ์ ------
        // if(e.target.nodeName=="INPUT")
        // txtInput.value += e.target.value;

        if(e.target.nodeName!="INPUT")
        return;

        console.log("๋ฒํผ ํด๋ฆญ");
        txtInput.value += e.target.value;
        
    }
    // for(let i=0; i<btnInputs.length ; i++){
    //     btnInputs[i].onclick = () =>{txtInput.value += i+1}
    // }

    //---------์๋๋ฐ๋ณต๋ฌธ์ ์์ ๋ฒ๋ธ๋ง์ ํตํด ํด๊ฒฐ ------
    /* for(let i=0; i<btnInputs.length ; i++){
        btnInputs[i].onclick = (e) =>{
            txtInput.value += e.target.value;
        }
    } */
})
/* ------๐ฅจ2. DOM ์์ฑ๋ค๋ฃจ๊ธฐ ๊ณ์ฐ๊ธฐ ex---------- */

window.addEventListener("load", ()=>{

    const section = document.querySelector("#s2");
    let xInput = section.querySelector(".x-input");
    let yInput = section.querySelector(".y-input");
    let button = section.querySelector(".button");
    let resultSpan = section.querySelector("div>span");
  
   
    button.onclick = () => {
        let x = parseInt(xInput.value);
        let y = parseInt(yInput.value);
        console.log(x+y);

        //innerHTML vs innerText
        resultSpan.textContent = x+y;
    };
    
});


/* ------๐ฅจ 1-1. ๋ธ๋ ์ ํ๋ฐฉ๋ฒ ex---------------------- */ 
//  Document ์ธํฐํ์ด์ค ๋ธ๋ ์ ํ ๋ฒ
// document.getElementById , name, className , tagName
// ById๋ document๋ง ๊ฐ์ง๊ณ  ์๋ ๊ธฐ๋ฅ ์ด์ธ์๋ ๋ชจ๋  element๊ฐ์ฒด๊ฐ ๊ฐ์ง๊ณ  ์๋ ๊ธฐ๋ฅ

//id๋ ์ธํ๋ฆฌ์ ๋ถ์ฌํ๋ค.
//nodeList ๋ ๋ณดํต ๋ฐฐ์ด๋ก ๋ด์์ ์ฃผ๊ธฐ๋๋ฌธ์


window.addEventListener("load", function(){

//selector API ์ด์ฉ -> ํ๋์ ๊ฐ๋ง ๋ด์์ค๊ณ  ์ถ์ ๋ ์ ์ฉ 
//ID๋ # , class๋ . + querySelector
    let section = document.getElementById("s1");
    //querySelector("input[type=text]")
    let input = section.getElementsByClassName("input")[0];
    let button = section.getElementsByClassName("button")[0];

    // button.onclick = () => console.log("test") ;
    button.onclick = () => (input.value="hello") ;
    
});






//๐ฅจ 1๏ธ ๋ธ๋ ์ ํ๋ฐฉ๋ฒ

//window.onload ๋ผ๊ณ  ์ง์  ์ฌ์ฉํ๋ ๊ฒ ๋ณด๋ค๋ 
//event๋ฅผ ์ถ๊ฐํ๋ ๊ฒ์ด ์ ์ ํ ๋ฐฉ๋ฒ
window.addEventListener = ("load", function(){
    let btnPrint = document.getElementById("btn-print");
    function printResult(){
        let x = prompt('x ๊ฐ์ ์๋ ฅํ์ธ์ ๐');
        let y = prompt('y ๊ฐ์ ์๋ ฅํ์ธ์ ๐');
        x=parseInt(x);
        y=parseInt(y);
        console.log(x+y);
    }
    //javascript์ html์ ๋ช๋ช๊ท์น์ด ๋ค๋ฅด๊ธฐ ๋๋ฌธ์
    //์๋ฆฌ๋จผํธ๋ฅผ ๊ฐ์ง๊ณ ์์ ๊บผ๋ด์ธ ๋๋ ์นด๋ฉํ๊ธฐ ๋ณ์์ ๋ด์์ ์ฌ์ฉ
   
 
    // btnPrint.onclick = printResult;
});