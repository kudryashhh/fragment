document.addEventListener("DOMContentLoaded", function(){
    let myFunction = function(){ // Тело функции -
    }; myFunction();

    let stone_1 = document.querySelector(".stone_1");
    var audio = document.getElementsByTagName("audio")[0];
    stone_1.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
        audio.play();
        });

    stone_1.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
        audio.stop();
        });


        let stone_2 = document.querySelector(".stone_2");
        var audio = document.getElementsByTagName("audio")[0];
        stone_2.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
            audio.play();
            });
    
        stone_2.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
            audio.stop();
            });

            let stone_3 = document.querySelector(".stone_3");
            var audio = document.getElementsByTagName("audio")[0];
            stone_3.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
                audio.play();
                });
        
            stone_3.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
                audio.stop();
                });

                let stone_12 = document.querySelector(".stone_12");
                var audio = document.getElementsByTagName("audio")[0];
                stone_12.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
                    audio.play();
                    });
            
                stone_12.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
                    audio.stop();
                    });

                    let stone_22 = document.querySelector(".stone_22");
        var audio = document.getElementsByTagName("audio")[0];
        stone_22.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
            audio.play();
            });
    
        stone_22.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
            audio.stop();
            });

            let stone_32 = document.querySelector(".stone_32");
            var audio = document.getElementsByTagName("audio")[0];
            stone_32.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
                audio.play();
                });
        
            stone_32.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
                audio.stop();
                });  

                let stone_23 = document.querySelector(".stone_23");
                var audio = document.getElementsByTagName("audio")[0];
                stone_23.addEventListener("mouseenter", function(){ // Говорим переменной что она должна сделать по клику
                    audio.play();
                    });
            
                stone_23.addEventListener("mouseleave", function(){ // Говорим переменной что она должна сделать по клику
                    audio.stop();
                    });
    

        
});