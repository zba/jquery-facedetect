$(function() {
  
  var main_image=$('#main_image');
  if (main_image.get(0).completed) {
    detect(main_image);
  } else {
    main_image.load(function() {
      detect(main_image);
    }
    )
  }
  $('#upload').fileupload({
    add: function (e, data) {
    $(this).fileupload('process', data).done(function (){
      var image=loadImage(data.files[0]);
      if (image.complete) {
	detect(image);
      } else {
	image.onload=function() {detect(image)};
      }
    })},
    progressall: function (e, data) {},
    process: [
		  {
		      action: 'load',
		      fileTypes: /^image\/(gif|jpeg|png)$/,
		      maxFileSize: 20000000 // 20MB
		  },
		  {
		      action: 'resize',
		      maxWidth: 1024,
		      maxHeight: 2048,
		      minWidth: 320,
		      minHeight: 200
		  },
		  {
		      action: 'save'
		  }
	      ]
  });
  
  var detect=function(image) {
    console.log($(image).facedetect({acync: false}));
  }
  
  
  });
  
  
  
