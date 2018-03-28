var a = prompt('Введите габариты:', '10x10');
var width, height, i = 0;
var widthEnd, heightStart, widthString = '', heightString = '';
while(i < a.length){
    if(a[i] === "x"){
        widthEnd = i - 1;
        heightStart = i + 1;
    }
    i++;
}
i = 0;
while(i <= widthEnd){
    widthString += a[i];
    i++;
    
}
width = parseInt(widthString);
while(heightStart < a.length){
    heightString += a[heightStart];
    heightStart++;
}
height = parseInt(heightString);

var divArr = [], p = 0;
for(i = 0; i < height; i++){
    for(var k = 0; k < width; k++){
        var trueOrFalse;
        var div = document.createElement('div');
        divArr.push(div);
        document.body.appendChild(divArr[p]);
        if(divArr[p-1] === undefined){
            divArr[p].style.backgroundColor = 'white';
            trueOrFalce = 0;
            p++;
            continue;
        }
        if(p === width*i && trueOrFalce === 1){
            divArr[p].style.backgroundColor = 'black';
            trueOrFalce = 1;
            p++;
            continue;
        }
        if(p === width*i && trueOrFalce === 0){
            divArr[p].style.backgroundColor = 'white';
            trueOrFalce = 0;
            p++;
            continue;
        }
        if(trueOrFalce === 0){
            divArr[p].style.backgroundColor = 'black';
            trueOrFalce = 1;
            p++;
            continue;
        }
        if(trueOrFalce === 1){
            divArr[p].style.backgroundColor = 'white';
            trueOrFalce = 0;
            p++;
            continue;
        }
    }
    document.write('</br>');
}
