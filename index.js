function start(){
    var start_button = document.querySelector('#start-button');
    start_button.addEventListener("click", getPeopleNum);
}

function getPeopleNum(){
    var container = document.querySelector("#container");
    while ( container.hasChildNodes() ) 
    { 
        container.removeChild(container.firstChild); 
    }
    var num = prompt("사람 수를 입력하세요");
    while(num !== null && isNaN(parseInt(num))){
        alert("입력값이 숫자가 아닙니다");
        num = prompt("사람 수를 입력하세요");
    }
    if(num !== null){
        var people_num = document.createElement("div");
        people_num.className = "people-num";
        people_num.innerHTML = `사람 수: ${num}`;
        container.appendChild(people_num);
        getTotPrice(parseInt(num));
    }
}

function getTotPrice(num){
    var tot_price = prompt("금액을 입력하세요");
    while(tot_price !== null && isNaN(parseInt(tot_price))){
        alert("입력값이 숫자가 아닙니다");
        tot_price = prompt("금액을 입력하세요");
    }
    if(tot_price !== null){
        var container = document.querySelector("#container");
        var total_price = document.createElement("div");
        total_price.className = "total_price";
        total_price.innerHTML = `총 금액: ${tot_price}`;
        container.appendChild(total_price);
        hideStartButton();
        startShuffle(num, parseInt(tot_price));
    }
}

function hideStartButton(){
    var start_button = document.querySelector("#start-button");
    start_button.style.display="none";
}

function addRestartButton(){
    var reload = document.createElement("button");
    var container = document.querySelector("#container");
    reload.id = "reload";
    reload.innerHTML="다시 하기"
    reload.addEventListener("click", function(){
        location.reload();
    });
    container.appendChild(reload);
}

function addInput(id){
    var div = document.createElement("div");
    var input = document.createElement("input");
    var container = document.querySelector("#container");
    div.appendChild(input);
    input.id = id;
    container.appendChild(div);
}

function addElement(content){
    var div = document.createElement("div");
    var container = document.querySelector("#container");
    div.className = "result";
    div.innerHTML = content;
    container.appendChild(div);
}

function startShuffle(num, tot_price){
    var price_list = [];
    var price;
    for(var i = 0; i < num - 1; i++){
        price = Math.round((Math.random() * tot_price)/10) * 10;
        price_list.push(price);
        tot_price -= price;
    }
    price_list.push(tot_price);
    for(var i = 0; i < num ; i++){
        addElement(`${i}: ${price_list[i]}원`)
    }
    addRestartButton();
}

start();
