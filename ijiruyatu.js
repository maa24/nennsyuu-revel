`use script`

let message = () =>{
  // 　テキストボックスに入力された値を持ってくる
  let textbox = document.getElementById("text");
  let inputValue = textbox.value;

  let elems = document.getElementsByName("erabu");
  let val ="";

  for(i=0;i<elems.length;i++){
    if(elems[i].checked){
      val = parseInt(elems[i].value);
    }
  }
    //  見出し
  let tablehead = ' ' ;
  let head = ['年数','年収','月収','ボーナス'];
    for(i = 0;i<4;i++){
      tablehead += '<th>' + head[i] + '</th>';
       }

    //  表を作る
  let table = ' ';
  let nennsuu = 6; // 出したい年数　＋１
  
  for(let r = 1;r<nennsuu;r++){
            table += '<tr>';
            
      if(r === 1){             // １年目のみ計算しないから
        table += '<td>' + r +'年目' + '</td>'; 

        let syonennsyuu = inputValue;
           table += '<td>' + syonennsyuu + '万' +  '</td>';

        let syogessyuu =Math.floor(syonennsyuu / 12);
           table += '<td>' + syogessyuu + '万'+ '</td>';

       let syobonasu = Math.floor(syonennsyuu % 12);
           table += '<td align = "right">' + syobonasu + '万'+ '</td>';
        
      } else if(val === 1){

        table += '<td>' + r +'年目'+ '</td>';

      let nennsyuu = Math.round(inputValue * 1.2);
        inputValue = nennsyuu;
        if(r%3 === 0){
         let bonasunennsyuu = nennsyuu + 20;
         table += '<td>' + bonasunennsyuu + '万'+ '</td>';
        }else{
           table += '<td>' + nennsyuu + '万'+ '</td>';
        }
      let gessyuu =Math.floor(nennsyuu / 12); 
           table += '<td>' + gessyuu + '万'+ '</td>';

      let bonasu = Math.floor(nennsyuu % 12);
      if(r%3 === 0){
        bonasu = bonasu + 20;
      }
           table += '<td align = "right">' + bonasu + '万'+ '</td>';
      } else if(val === 2){

        table += '<td>' + r +'年目'+ '</td>';

        let nennsyuu = Math.round(inputValue * 1.4);
          inputValue = nennsyuu;
          if(r%3 === 0){
            let bonasunennsyuu = nennsyuu + 20;
            table += '<td>' + bonasunennsyuu + '万'+ '</td>';
           }else{
              table += '<td>' + nennsyuu + '万'+ '</td>';
           }
  
        let gessyuu =Math.floor(nennsyuu / 12); 
             table += '<td>' + gessyuu + '万'+ '</td>';
  
        let bonasu = Math.floor(nennsyuu % 12);
        if(r%3 === 0){
          bonasu = bonasu + 20;
        }
             table += '<td align = "right">' + bonasu + '万'+ '</td>';
      } 
      else if(val === 3){
        table += '<td>' + r +'年目'+ '</td>';

        let nennsyuu = Math.round(inputValue * 2);
          inputValue = nennsyuu;
          if(r%3 === 0){
            let bonasunennsyuu = nennsyuu + 20;
            table += '<td>' + bonasunennsyuu + '万'+ '</td>';
           }else{
              table += '<td>' + nennsyuu + '万'+ '</td>';
           }
  
        let gessyuu =Math.floor(nennsyuu / 12); 
             table += '<td>' + gessyuu + '万'+ '</td>';
  
        let bonasu = Math.floor(nennsyuu % 12);
        if(r%3 === 0){
          bonasu = bonasu + 20;
        }
             table += '<td align = "right">' + bonasu + '万'+ '</td>';
      
    }
     
    table += '</tr>';
  }

document.write('<table border = "2">' + tablehead + table + '</table>');


}
