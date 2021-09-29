send.addEventListener("click",fnc);
function fnc(){
    let val_usage = usage.value;
    let val_investing = investing.value;
    let val_publicpurchasing = publicpurchasing.value;
    let val_exxport = exxport.value;
    let val_immport = immport.value;

    let val_totaldemand = parseInt(val_usage) + parseInt(val_publicpurchasing) + parseInt(val_investing) + (parseInt(val_exxport)-parseInt(val_immport))
        totaldemand.value = val_totaldemand
   
        result.innerHTML = val_result; 

}
