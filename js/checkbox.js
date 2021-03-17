const fillerFilterICheckboxLabelList = document.querySelectorAll(".fillers-filter-checkbox-label");

fillerFilterICheckboxLabelList.forEach(
    el => el.addEventListener('keydown', function (event) {
        if (event.keyCode == 13) {
            if (el.childNodes[1].checked == true) {
                el.childNodes[1].checked = false;
            } else {
            el.childNodes[1].checked = true;
            }
        }
    })
);