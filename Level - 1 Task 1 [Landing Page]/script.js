var header= document.getElementById("header");
            var ms= document.getElementById("Pizza");
            var ml= document.getElementById("Burger");
            var mc= document.getElementById("Noodles");
            var m3= document.getElementById("Sandwich");
            var mx= document.getElementById("Coffee");
            var my= document.getElementById("Pasta");
            var model= document.getElementById("item");
            var mph= document.getElementById("Price");
            var speed= document.getElementById("toppings");

            ms.onclick=function(){
                header.style.backgroundImage="url(https://plus.unsplash.com/premium_photo-1675103909059-03622a545e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hlZXNlJTIwcGl6emF8ZW58MHx8MHx8fDA%3D)"
                item.innerHTML="Pizza";
                Price.innerHTML="$5";
                toppings.innerHTML="Cheese";
            }

            ml.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYnVyZ2VyfGVufDB8MHwwfHx8MA%3D%3D)"
                item.innerHTML="Burger";
                Price.innerHTML="$3" ;
                toppings.innerHTML="Veg";
            }
            
            mc.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1607328874071-45a9cd600644?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bm9vZGxlc3xlbnwwfDB8MHx8fDA%3D)"
                item.innerHTML="noodles";
                Price.innerHTML="$2.4";
                toppings.innerHTML="Schezwan";
            }

            m3.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1528736235302-52922df5c122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hlZXNlJTIwY29ybiUyMHNhbmR3aWNofGVufDB8MHwwfHx8MA%3D%3D)";
                item.innerHTML="Sandwich";
                Price.innerHTML="$5";
                toppings.innerHTML="Cheese Corn";
            }
            mx.onclick=function(){
                header.style.backgroundImage="url(https://images.unsplash.com/photo-1627469431699-a418fd7065db?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FwdWNoaW5vfGVufDB8MHwwfHx8MA%3D%3D)";
                item.innerHTML="Coffee";
                Price.innerHTML="$4";
                toppings.innerHTML="Cappuccino";
            }
            my.onclick=function(){
                header.style.backgroundImage="url(https://plus.unsplash.com/premium_photo-1681826354195-295f2d767779?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHdoaXRlJTIwc2F1Y2UlMjBwYXN0YXxlbnwwfDB8MHx8fDA%3D)";
                item.innerHTML="Pasta";
                Price.innerHTML="$3";
                toppings.innerHTML="White Sauce";
            }
