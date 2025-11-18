//--Page to navigate WHEN CLICKED MENUE ITEM
// page: From HTML CLICK Example /page:/01/demos/index.html
function loadPage(page) {

    //--Get reference for the HTML ELEMENT BY ITS ID
    // contentFrame is iframe element type
    let iframeElement = document.getElementById("contentFrame");
    // Give IFRAME the HTML ADDRESS
    iframeElement.src = page;
    // document.getElementById("contentFrame").src = page;

    // Close sidebar on mobile
    document.getElementById("sidebar").classList.remove("show");
}

function toggleSidebar() {
    document.getElementById("sidebar").classList.toggle("show");
}