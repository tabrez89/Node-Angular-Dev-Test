var flickrutils = flickrutils || {};
flickrutils.bload =  $('#flickr-body').bload({
            fadeInSpeed   : 600,
            maskOpacity   : .6,
            maskWidthHeight : 96,
            overlay : {
              show    : true
            }
          },
          function(bload){
            

          }); 
flickrutils.bload.hide();
flickrutils.utils = {
         showMask:function(){
          flickrutils.bload.show();
         },
         hideMask:function(){
         flickrutils.bload.hide();
         }
		
		}
