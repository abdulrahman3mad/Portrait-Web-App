




        //start making select options
          myparent=document.getElementById("choose");
          myselect1=document.getElementById("people");
          myparent.insertBefore(myselect1,myparent.children[2]);

          myparent=document.getElementById("choose");
          myselect2=document.getElementById("pets");
          myparent.appendChild(myselect2);

          for(var i=0;i<=20;i++){

              var myoption1=document.createElement("option");
              var text1=document.createTextNode(i);
              myoption1.appendChild(text1);
              myselect1.appendChild(myoption1);

              var myoption2=document.createElement("option");
              var text2=document.createTextNode(i);
              myoption2.appendChild(text2);
              myselect2.appendChild(myoption2);

          }
        //end making select options



        //start change rely on select
            var mytr=document.getElementsByTagName("tr");

            myselect1.onchange=function(){
              if(myselect1.value === "1"){
                for(var c=1;c<mytr.length;c++){
                  mytr[c].lastElementChild.textContent=mytr[c].children[1].textContent;
                  }
              }

              else if(myselect1.value === "2"){
                    for(var c=1;c<mytr.length;c++){
                  mytr[c].lastElementChild.textContent=mytr[c].children[2].textContent;
                  }
              }

              else{
                 for(var c=1;c<(mytr.length-2);c++){
                mytr[c].lastElementChild.textContent=parseInt(mytr[c].children[1].textContent) + parseInt(myselect1.value*40);
              }
              }
          }
        //end change rely on select




        //start making currency
            var myselect  = document.getElementById("myselect");
            var mydiv = document.getElementsByClassName("money");
            const mycurrent = [150, 190, 290, 340, 410, 200, 250, 300, 280, 340, 400, 500, 320, 400, 470, 550, 420, 500, 600, 670, 480, 570, 600];

            console.log(mycurrent.length);


            myselect.onchange = function(){
              switch(myselect.value){
                case "0.0222222":
                for(var i=0;i <mycurrent.length; i++){
                    mydiv[i].textContent = (mycurrent[i] * myselect.value).toFixed(0)  + " دينار كويتي";
                };
                for(var r=1;r<mytr.length;r++){
                   mytr[r].lastElementChild.textContent = (myselect.value * myselect1.value*mytr[r].lastElementChild.textContent).toString();
                };

                break;
                case "0.2":
                for(var i=0;i<mycurrent.length;i++){
                    mydiv[i].textContent = (mycurrent[i] * myselect.value).toFixed(0)   + " درهم إمارتي";
                };
                break;
                case "0.125":
                for(var i=0;i<mycurrent.length;i++){
                    mydiv[i].textContent = (mycurrent[i] * myselect.value).toFixed(0)   + " ريال قطري";
                };
                break;
                case "0.33333333333":
                for(var i=0;i<mycurrent.length;i++){
                    mydiv[i].textContent = (mycurrent[i] * myselect.value).toFixed(0)   + " ريال سعودي";
                };
                break;
                default:
                for(var i=0;i< mycurrent.length;i++){
                    mydiv[i].textContent =mycurrent[i]+" جنيه  "
                };
              }
            }
        //end making currency
