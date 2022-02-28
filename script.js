let n = 0

function animation(){
    if(n === 0){
        $('.heart').css('width', '300px')
        $('.heart').css('height', '300px')
        n+=1
    } else if (n === 1){
        $('.heart').css('width', '301px')
        $('.heart').css('height', '301px')
        n+=1
    } else if (n === 2){
        $('.heart').css('width', '302px')
        $('.heart').css('height', '302px')
        n+=1
    } else if (n === 3){
        $('.heart').css('width', '303px')
        $('.heart').css('height', '303px')
        n+=1
    }  else if (n === 4){
        $('.heart').css('width', '304px')
        $('.heart').css('height', '304px')
        n+=1
    } else if (n === 5){
        $('.heart').css('width', '305px')
        $('.heart').css('height', '305px')
        n = 0
    } 
}

setInterval(animation, 200); 