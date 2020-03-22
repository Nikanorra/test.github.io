(function() {
  
  var pageHeader = document.querySelector(".head-line");
  var pageHeaderHeight = pageHeader.getBoundingClientRect().bottom + window.pageYOffset;
  
  window.addEventListener("scroll", function() {
    
    if (pageHeader.classList.contains("head-line-sticky") && (window.pageYOffset < pageHeaderHeight)) {
        
      pageHeader.classList.remove("head-line-sticky");
        
    } else if (window.pageYOffset > pageHeaderHeight) {
        
      pageHeader.classList.add("head-line-sticky");
        
    }
    
  }, false);
  
})();