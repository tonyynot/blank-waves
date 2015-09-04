var pswpElement = document.querySelectorAll('.pswp')[0];

// build items array
// var items = [
//     {
//         src: 'https://placekitten.com/600/400',
//         w: 600,
//         h: 400
//     },
//     {
//         src: 'https://placekitten.com/1200/900',
//         w: 1200,
//         h: 900
//     }
// ];

// so a photo has properties like a source, a=wdith, etc
// 

var items = [];
    $(".thumbnail img").each(function(){
        // This is just a formless empty object
        var photo = new Object();
        // give it some properties that make it a photo like
        photo.src = $(this).attr('src');
        photo.w = 900;
        photo.h = 900;
        // which is the src="http:.." part of an img tag
        // do the same with w and h to set the width and height.

        // then assign this object to the items array below by saying item[] = the variable name of this object
        item[] = photo;
    });

// define options (if needed)
var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
};

// Initializes and opens PhotoSwipe
var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
gallery.init();