const checkboxLabelList = document.querySelectorAll(".fillers-filter-checkbox-label");

function changeCheckedCheckbox(isChecked, onCheckbox, offCheckbox){
    if(isChecked){
        onCheckbox.classList.add("visible-checkbox-icon"); 
        offCheckbox.classList.remove("visible-checkbox-icon");
    }
    else {
        onCheckbox.classList.remove("visible-checkbox-icon"); 
        offCheckbox.classList.add("visible-checkbox-icon");
    }
}

function changeDisabledCheckbox(label, isDisabled, onCheckbox, offCheckbox){
    if(isDisabled){
        label.classList.add("disabled-color");
        label.classList.add("disabled-cursor");
        onCheckbox.classList.add("disabled-opacity"); 
        offCheckbox.classList.add("disabled-opacity");
    }
    else {
        label.classList.remove("disabled-color");
        label.classList.remove("disabled-cursor");
        onCheckbox.classList.remove("disabled-opacity"); 
        offCheckbox.classList.remove("disabled-opacity");
    }
}

function hoverLabel(isDisabled, onCheckbox, offCheckbox){
    if (!isDisabled){
        console.log(isDisabled);
        onCheckbox.classList.add("hover-opacity"); 
        offCheckbox.classList.add("hover-opacity");
    }
    else {
        onCheckbox.classList.remove("hover-opacity"); 
        offCheckbox.classList.remove("hover-opacity");
    }
}
    
function notHoverLabel(onCheckbox, offCheckbox) {
    onCheckbox.classList.remove("hover-opacity"); 
    offCheckbox.classList.remove("hover-opacity");
}

checkboxLabelList.forEach(el => {
    let label = el; 
    let checkbox = el.childNodes[1];
    let onCheckbox = el.childNodes[3]; 
    let offCheckbox = el.childNodes[5]; 

    label.onmouseover = function(event){
        hoverLabel(checkbox.disabled, onCheckbox, offCheckbox); 
    };

    label.onmouseout = function(event){
        notHoverLabel(onCheckbox, offCheckbox);
    };

    changeCheckedCheckbox(checkbox.checked, onCheckbox, offCheckbox);
    checkbox.addEventListener('change', function() {
        changeCheckedCheckbox(this.checked, onCheckbox, offCheckbox)});

    changeDisabledCheckbox(label, checkbox.disabled, onCheckbox, offCheckbox);
    checkbox.addEventListener('change', function() {
        changeDisabledCheckbox(label, this.disabled, onCheckbox, offCheckbox)});
});