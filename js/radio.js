const fatFilterItemList = document.querySelectorAll(".fat-content-filter-item");

fatFilterItemList.forEach(el =>
    el.childNodes[3].addEventListener('keydown', function(event) {
        if (event.keyCode == 13)
        el.childNodes[1].checked = 'checked';
    })
); 
