console.log('App started');
var rotateAngle = 0;
var spin = parseInt(prompt('Enter Number of Spin'));
var temp = `SPIN - ${spin}`;
document.querySelector('.spin-btn').textContent=temp;
var index = 0;
var prize = ['CB Book','CB Tshirt','2 Extra Spin','Amazon Voucher','50% Off','Netflix Subs','100% Off','CB swagpack','70% Off','Hard Luck','35% Off','3000 CB credit'];

document.querySelector('.wheel').addEventListener('click', rotate);
document.querySelector('.spin-btn').addEventListener('click', rotate);
function rotate(){
    if(spin>0){
        try{
            var image = document.querySelector('.wheel');
            image.classList.remove('wheel');
            let rounds = Math.ceil(Math.random()*4) + 1;
            console.log(rounds);
            let extra_degrees =  (Math.ceil(Math.random()*100)%12)*30;
            let total_angle = rounds*360 + extra_degrees + rotateAngle;
            // console.log(extra_degrees,total_angle)
            while(rotateAngle<=total_angle){
                image.setAttribute("style", "transform: rotate(" + rotateAngle + "deg)");
                rotateAngle = rotateAngle + 10;
            }
            var audio = new Audio('Assets/music.wav');
            audio.play();
            rotateAngle=total_angle;
            sleep(2000).then(() => { 
                spin--;
                document.querySelector('#rotater').classList.add('wheel');
                index += (extra_degrees)/30;
                index %= 12;
                var html = '<h3 class="win-msg">%ID%</h3>';
                var newHtml = html.replace('%ID%',prize[index]);
                document.querySelector('.spin-win').insertAdjacentHTML('beforeend',newHtml);
                if(index==2){
                    spin += 2;
                }
                var temp = `SPIN - ${spin}`;
                document.querySelector('.spin-btn').textContent=temp;
            });
        }
        catch(err){
            console.log('Its already running');
        }
    }else{
        alert('No More Spin Left');
    }
}
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var get_input=function(){
    while(true){
        
    }
}
