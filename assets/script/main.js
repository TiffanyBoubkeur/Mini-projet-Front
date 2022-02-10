console.log ('Ready to go');

let text = document.getElementById('count')

function getChrono(){
    
    const now = new Date().getTime();
    const landingDate = new Date('January 1, 2030').getTime();
    // console.log(now, landingDate);
    
    const cpt = landingDate - now;

    /*** MATHS ****/
    const days = Math.floor(cpt/ (1000*60*60*24));
    // console.log(days);
    const hours = Math.floor((cpt % (1000*60*60*24)) / (1000*60*60));
    // console.log(hours);
    const min = Math.floor((cpt % (1000*60*60)) / (1000*60));
    // console.log(min);
    const sec = Math.floor((cpt % (1000*60)) / 1000);
    // console.log(sec); 
    
    /*** TEXT ***/
    text.innerText = `${days} J ${hours} H ${min} M ${sec} S`;
    // console.log(text);
    
}


const Counter = setInterval(()=>{
    
    getChrono(); 
    
    
}, 1000); 



/* USEFULL LINKS :

            *** Les Dates ***
Since 1er janv 1970 
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime

            *** Math.floor()***
Rounded down integer
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor


            *** MODULO  % *** 
What's REMAIN from the division
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

*/