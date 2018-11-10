var page = 1;

function showPage(page) {
    $('.pagination .post:not(#page'+page+')').hide();
    $('.pagination .post#page'+page).show();
}

function prevPage() {
    if (page == 1) {
        page = $('.pagination .post').length;
    } else {
        page--;
    }
    showPage(page);
}

function nextPage() {
    if (page == $('.pagination .post').length) {
        page = 1;
    } else {
        page++;
    }
    showPage(page);
}

$(document).ready(function() {
    showPage(page);
    
    $('#prev').click(prevPage);
    $('#next').click(nextPage);
});