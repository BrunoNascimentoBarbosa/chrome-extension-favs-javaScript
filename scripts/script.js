
 var btnPageAdd = document.getElementById("btnPageAdd");
 var btnPageSearch = document.getElementById("btnPageSearch");

 var pageAdd = document.getElementById("add-page");
 var pageSearch = document.getElementById("search-page");

 btnPageAdd.addEventListener("click", showAddPage);
 btnPageSearch.addEventListener("click", showSearchPage);

 function showAddPage(){    
     pageAdd.style.display = "none";
     pageSearch.style.display = "block";
 }

 function showSearchPage(){
     pageAdd.style.display = "block";
     pageSearch.style.display = "none";
 }