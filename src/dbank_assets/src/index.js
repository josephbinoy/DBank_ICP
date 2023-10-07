import {dbank} from "../../declarations/dbank"

window.onload=async ()=>{
    updateAmount();
}

document.querySelector("form").onsubmit=async (e)=>{
    e.preventDefault();
    document.getElementById("spinner").style.display="inline";
    let msg="";
    const button=e.target.submit;
    button.setAttribute("disabled", true);
    const depositAmt=e.target.deposit;
    const withdrawAmt=e.target.withdraw;
    if(depositAmt.value&&withdrawAmt.value){
        msg="You cannot deposit and withdraw at the same time!"
        depositAmt.value="";
        withdrawAmt.value="";
    }
    else{
    if(depositAmt.value){
        msg=await dbank.deposit(parseFloat(depositAmt.value));
        depositAmt.value="";
    }
    else if(withdrawAmt.value){
        msg=await dbank.withdraw(parseFloat(withdrawAmt.value));
        withdrawAmt.value="";
    }
    await dbank.compound();
    updateAmount();
    }
    document.getElementById("spinner").style.display="none";
    document.getElementById("msg").innerText=msg;
    button.removeAttribute("disabled");
}


async function updateAmount(){
    const currentAmount=await dbank.checkBalance();
    document.getElementById("currentValue").innerText=currentAmount.toFixed(3);
}