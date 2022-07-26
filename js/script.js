// calculate tip
function calculateTip(){
    var billamt=document.getElementById("billamt").value;
    var servicequal=document.getElementById("servicequal").value;
    var numofpeople=document.getElementById("peopleamt").value;

    // validate input
    if(billamt==="" || servicequal==0){
        alert("please enter values");
        return;
    }

    // check to see if this input is empty or less than or equal to 1
    if(numofpeople==="" || numofpeople<=1){
        numofpeople=1;
        document.getElementById("each").style.display="none";

    }

    else{
        document.getElementById("each").style.display="block";
    }

    // calculateTip
    var total= (billamt*servicequal)/numofpeople;
    // round to two decimal places
    total=Math.round(total);
    // display the tip
    document.getElementById("totaltip").style.display="block";
    document.getElementById("tip").innerHTML=total;

}

// hide the tip amount on load
document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

// click to call function
document.getElementById("calculate").onclick=function(){
    calculateTip();
};
