// 1️⃣ 노드 선택방법 ----------------------
// 🥨 Document 인터페이스 노드 선택 법
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

window.addEventListener("load", () =>{
    let section = document.querySelector("#s3");
    let txtInput = section.querySelector("input[type=text]");
    let btnInputs = section.querySelectorAll(".num");

    // for(let i=0; i<btnInputs.length ; i++){
    //     btnInputs[i].onclick = () =>{txtInput.value += i+1}
    // }


    for(let i=0; i<btnInputs.length ; i++){
        btnInputs[i].onclick = (e) =>{
            txtInput.value += e.target.value;
        }
    }
})



//1️

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