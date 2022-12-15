/* ----🥨4. 스타일 속성명과 값bubbling ----- */
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
    //기본적으로 엘리먼트는 스타일 속성을 가지고있다.
    //그 엘리먼트의 스타일속성은 대부분 string이기때문에 단위를 붙여서 "안에 표기"
    //ex) 속성명이 border-color 같이 '-' 구분자가 필요한 경우
    // -> 자바스크립트에는 -구분자가 없기때문에 카멜케이스로 구분
    // txt1.style["background-color"] = "red"; O
    // txt1.style.backgroundColor = "red"; O
    
/* -------🥨 3. 향상된 계산기 ex ----------- */

window.addEventListener("load", () =>{
    let section = document.querySelector("#s3");
    let txtInput = section.querySelector("input[type=text]");
    let btnInputs = section.querySelectorAll(".num");
    let box = section.querySelector("div");
    let divInput = box.querySelector("input[value='/']");
    
    divInput.onclick = (e) => {console.log("나눗셈 연산");
    e.stopPropagation();
    }
    // div와 태그 구분 ---  버블링 적용
    box.onclick = (e) => {
        e.preventDefault();
        //box 안에서 이벤트 발생 -> element로 한정
        //text의 name 값은 ?
        // console.log(e.target.nodeValue);
        // console.log(e.target.nodeType);

    //----조건의 역발상 ------
        // if(e.target.nodeName=="INPUT")
        // txtInput.value += e.target.value;

        if(e.target.nodeName!="INPUT")
        return;

        console.log("버튼 클릭");
        txtInput.value += e.target.value;
        
    }
    // for(let i=0; i<btnInputs.length ; i++){
    //     btnInputs[i].onclick = () =>{txtInput.value += i+1}
    // }

    //---------아래반복문을 위의 버블링을 통해 해결 ------
    /* for(let i=0; i<btnInputs.length ; i++){
        btnInputs[i].onclick = (e) =>{
            txtInput.value += e.target.value;
        }
    } */
})
/* ------🥨2. DOM 속성다루기 계산기 ex---------- */

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


/* ------🥨 1-1. 노드 선택방법 ex---------------------- */ 
//  Document 인터페이스 노드 선택 법
// document.getElementById , name, className , tagName
// ById는 document만 가지고 있는 기능 이외에는 모든 element객체가 가지고 있는 기능

//id는 울타리에 부여한다.
//nodeList 는 보통 배열로 담아서 주기때문에


window.addEventListener("load", function(){

//selector API 이용 -> 하나의 값만 담아오고 싶을 때 유용 
//ID는 # , class는 . + querySelector
    let section = document.getElementById("s1");
    //querySelector("input[type=text]")
    let input = section.getElementsByClassName("input")[0];
    let button = section.getElementsByClassName("button")[0];

    // button.onclick = () => console.log("test") ;
    button.onclick = () => (input.value="hello") ;
    
});






//🥨 1️ 노드 선택방법

//window.onload 라고 직접 사용하는 것 보다는 
//event를 추가하는 것이 적절한 방법
window.addEventListener = ("load", function(){
    let btnPrint = document.getElementById("btn-print");
    function printResult(){
        let x = prompt('x 값을 입력하세요 💛');
        let y = prompt('y 값을 입력하세요 💛');
        x=parseInt(x);
        y=parseInt(y);
        console.log(x+y);
    }
    //javascript와 html의 명명규칙이 다르기 때문에
    //엘리먼트를 가지고와서 꺼내쓸 때는 카멜표기 변수에 담아서 사용
   
 
    // btnPrint.onclick = printResult;
});