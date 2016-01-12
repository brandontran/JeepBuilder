$(function(){
  init();
  browserSupport();
  spinThoseWheels();
  // Render category sliders
  renderPaintColorsSlider();
  renderLiftKitsSlider();
  renderTintSlider();
  renderWheelsSlider();
  renderBackgroundsSlider();


  // Bind slider buttons
  initSlider();

  // Get Location Params
  getLocationParams();
});

function getLocationParams(){
  var params = location.params();
  //console.log('Params', params);
}


function init(){


  // COLOR
  $('[data-color]').on('click', function(e){
    e.preventDefault();
    var val = $(this).attr('data-color');
    $("#jeep-body").removeClass();
    $('#jeep-body').addClass(val);
  });

  // BACKGROUND
  $('[data-background]').on('click', function(e){
    e.preventDefault();
    var val = $(this).attr('data-background');
    $("body").removeClass();
    $('body').addClass(val);
  });


  // MENU NAV CATEGORY CHANGE
  $('nav [data-category]').on('click', function(e){
    e.preventDefault();
    // Change Active Sliders
    var val = $(this).attr('data-category');
    $(".slider").removeClass('active');
    $('#'+val).addClass('active');

    // Change active icon in menu
    $('nav [data-category]').removeClass('active');
    $(this).addClass('active');
    //console.log(val);
  });

  $('#btn-info').on('click', function(e){
    e.preventDefault();
    $('body').addClass('showmodal');
    bindCloseModal();
  });

  $('#btn-comment').on('click', function(e){
    e.preventDefault();
    $('body').addClass('showmodal2');
    bindCloseModal();
  });

}



// Close Modal
function bindCloseModal(cb){
  $(document).on("keydown.modal", function(e) {
    if (e.keyCode == 27) {
      e.preventDefault();
      closeModal(cb);
    }
  });
  $('.modal-overlay, .modal-close').on('click.modal', function(e) {
    closeModal(cb);
  });
  function closeModal(cb) {
      if(typeof cb === "function"){
        cb();
      }
      $(".modal-overlay, .modal-close").off("click.modal");
      $(document).off("keydown.modal");
      $("body").removeClass("showmodal showmodal2");
  }
}



// IS THIS A TOUCH DEVICE
function browserSupport(){
  var isTouch = false;
  if ("ontouchstart" in window || navigator.msMaxTouchPoints){
    isTouch = true;
    $('body').addClass('touch');
    noSwipeOnJeep();
  } else {
    $('body').addClass('notouch');
    isTouch = false;
  }
  isTouch=((document.ontouchstart!==null) ? false : true );
}


// Stop Page Swipe on Jeep
function noSwipeOnJeep(){
  $('#canvas').on('touchmove', function(e){
    e.preventDefault();
  });
}

// SPIN THOSE WHEELS
function spinThoseWheels(){
  var i=1;
  $('.jeep-wheel').on('click', function(e){
    $('.jeep-wheel').hide();
    if(i===4){
      i=0;
      $('.jeep-wheel').removeClass('speed1 speed2 speed3');
    } else {
      $('.jeep-wheel').removeClass('speed1 speed2 speed3');
      $('.jeep-wheel').addClass('speed'+i);
    }
    setTimeout(function(){
      $('.jeep-wheel').show();
    },1);
    i++;
  });
}


// PAINT COLORS SLIDER
function renderPaintColorsSlider(){
  // img/body/
  $.each(paintColors, function(k,v){
    v.active = v.active || "";
    var ele = $('<div>', {
      'class': 'col ' + v.active,
      'html': '<div class="thumbnail" style="background-color:' + v.color + ';">\
      <div class="name">' + v.name + '</div>\
      <div class="preload" style="background-image: url(\'img/body/' + v.image + '\');"></div>\
      </div>'
    }).appendTo($('#paint-shop .col-container'));

    ele.on('click', function(e){
      $("#jeep-body .jeep-body-image").css("background-image", "url('img/body/" + v.image +"')");
      $('#paint-shop .col').removeClass('active');
      $(this).addClass('active');
    });
  });
}


// LIFT KIT SLIDER
function renderLiftKitsSlider(){
  // img/body/
  $.each(liftKit, function(k,v){
    var ele = $('<a>', {
      'class': 'col ' + v.active,
      'html': '<div class="thumbnail"><div class="name">' + v.name + '</div></div>'
    }).appendTo($('#lift-kits .col-container'));

    ele.on('click', function(e){
      $("#jeep-body").css('transform', 'translate(0,' + v.value + ')');
      $('#lift-kits .col').removeClass('active');
      $(this).addClass('active');
    });

  });
}






// WINDOW TINT SLIDER
function renderTintSlider(){
  $.each(windowTint, function(k,v){
    var active = "";
    if(v.active){
      active = v.active;
    }
    var ele = $('<a>', {
      'class': 'col ' + active,
      'html': '<div class="thumbnail" style="background-color:rgba(0,0,0,' + v.value + ');"><div class="name">' + v.name + '</div></div>'
    }).appendTo($('#window-tint .col-container'));

    ele.on('click', function(e){
      $("#jeep-window-tint").css('opacity', v.value);
      $('#window-tint .col').removeClass('active');
      $(this).addClass('active');
    });

  });
}





// BACKGROUNDS SLIDER
function renderWheelsSlider(){
  // img/body/
  $.each(jeepWheels, function(k,v){
    v.active = v.active || "";
    var ele = $('<a>', {
      'class': 'col ' + v.active,
      'html': '<div class="thumbnail" style="background-image: url(\'img/wheel/' + v.image + '\');">\
      <div class="name">' + v.name + '</div>\
      </div>'
    }).appendTo($('#wheels .col-container'));

    ele.on('click', function(e){
      $(".jeep-wheel .wheel").css("background-image", "url('img/wheel/" + v.image +"')");
      $('#wheels .col').removeClass('active');
      $(this).addClass('active');
    });
  });
}





// BACKGROUNDS SLIDER
function renderBackgroundsSlider(){
  // img/body/
  $.each(backGrounds, function(k,v){
    v.active = v.active || "";
    var ele = $('<a>', {
      'class': 'col ' + v.active,
      'html': '<div class="thumbnail" style="background-image: url(\'img/background/' + v.image + '\');">\
      <div class="name">' + v.name + '</div>\
      </div>'
    }).appendTo($('#backgrounds .col-container'));

    ele.on('click', function(e){
      $("body").css("background-image", "url('img/background/" + v.image +"')");
      $('#backgrounds .col').removeClass('active');
      $(this).addClass('active');
    });
  });
}

















function initSlider(){
  var duration = 700;
  $('.btn-slider').on('click', function(e){
    var width = $(window).width() *.8;
    var direction;

    if($(this).hasClass('prev')){
      direction = '-=';
    } else {
      direction = '+=';
    }
    //console.log('next', direction+width);
    $(this).siblings($('.scroller')).animate({
        scrollLeft: direction + width
    }, 600);
  });
}






// Params Helper
// http://stackoverflow.com/a/28132596
location.params = function(params) {
  var obj = {}, i, parts, len, key, value;

  if (typeof params === 'string') {
    value = location.search.match(new RegExp('[?&]' + params + '=?([^&]*)[&#$]?'));
    return value ? value[1] : undefined;
  }

  var _params = location.search.substr(1).split('&');

  for (i = 0, len = _params.length; i < len; i++) {
    parts = _params[i].split('=');
    if (! parts[0]) {continue;}
    obj[parts[0]] = parts[1] || true;
  }

  if (typeof params !== 'object') {return obj;}

  for (key in params) {
    value = params[key];
    if (typeof value === 'undefined') {
      delete obj[key];
    } else {
      obj[key] = value;
    }
  }

  parts = [];
  for (key in obj) {
    parts.push(key + (obj[key] === true ? '' : '=' + obj[key]));
  }

  location.search = parts.join('&');
};

// location.params() will return an object with all the query parameters: {foo: 'bar', baz: true}.
// location.params('foo') will return 'bar'.
// location.params({foo: undefined, hello: 'world', test: true}) will change the URL to http://example.com/?baz&hello=world&test#some-hash.


