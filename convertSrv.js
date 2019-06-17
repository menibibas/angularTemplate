app.factory("convert", function($log) {
  
    function convertMinToHrs(minutes) {
      $log.info("converting " + minutes + " to hours...");
     return parseInt(minutes /60) +"h " +minutes%60 + "min";
    }
      
         return { convertMinToHrs:convertMinToHrs};
    
      
    
  });