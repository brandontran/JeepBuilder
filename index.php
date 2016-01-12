<!DOCTYPE html>
<html lang="en">
  <head>
    <!--[if lt IE 9]>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <![endif]-->
    <!--[if (gte IE 9)|!(IE)]><!-->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <!--<![endif]-->
    <meta charset="utf-8">
    <title>Build A Jeep - Jeep Wheel Builder</title>
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8;">
    <link rel="stylesheet" type="text/css" href="css/jeep.css">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="apple-touch-icon" href="/apple-touch-icon-120x120.png">
    <script src="js/jeepdata.js"></script>
    <script src="js/jeep.js"></script>

    <meta property="og:site_name" content="Brandon Tran">
    <meta property="og:title" content="Build and Customize Your Jeep">
    <meta property="og:url" content="http://www.brandontran.com/jeep/">
    <meta property="og:description" content="Create a custom Jeep for fun! Lift it up, add custom wheels, tires, window tint, paint color and scenic backgrounds.">
    <meta property="og:type" content="article">
    <meta property="og:image" content="http://www.brandontran.com/jeep/img/fb-share-customize-your-jeep.jpg">
    <meta property="fb:admins" content="809344181">
    <meta property="fb:app_id" content="152744914767446">

</head>
<body>

  <div id="fb-root"></div>
  <script>(function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.5&appId=152744914767446";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));</script>


  <div class="modal">
    <div class="modal-overlay"></div>
    <div class="modal-wrapper">
      <div class="modal-scroller">
        <div class="modal-close">x</div>
        <h1>About "Build A Jeep" <i>by Brandon Tran</i></h1>

        <p class="modal-body">
          One day I wanted to customize my Jeep, but also I wanted to know what it would look like before spending $1000's
          on lift kits, wheels, gear and swag.
          It's always nice to be efficient with the dough you are going to invest into a hobby project.
          At first I started looking on the web for apps and sites to check out but I didn't have much luck.
          I then decided to create my own mini app to do just that.
          I present to you "Brandon's Build A Jeep" a lightweight jeep 2014 visualizer app.
        </p>

        <p class="modal-body">
          Today this app is very limited but stay tuned as I plan to expand it over time.
          Features coming soon:
        </p>

        <ul>
          <li>More wheels and tires</li>
          <li>Share your jeep image</li>
          <li>Sound effects</li>
        </ul>

        <p class="modal-body">
          Hope you get a kick out of it and share it with friends.
          Thanks for the support!
        </p>

        <p class="modal-body">
          <ul>
            <li>Build A Jeep App - &copy; Brandon Tran 2015</li>
            <li>Other Contributors: Luis Castro for design support and hand drawn custom icons</li>
            <li>Jeep Images and Photography - &copy; Jeep</li>
            <li>Background Images - Royalty Free</li>
          </ul>
        </p>

      </div>
    </div>
  </div>


  <div id="comments">
    <div class="modal-close">x</div>
    <h3>Leave us a comment, feedback or share your Jeep story</h3>
    <div class="comment-wrapper">
      <div class="fb-comments" data-href="http://www.brandontran.com/jeep/" data-width="100%" data-numposts="20"></div>
    </div>
  </div>

  <nav>
    <a class="icon-nav icon-paint active" data-category="paint-shop"><div>Paint Shop</div></a><!--
    --><a class="icon-nav icon-lift-kits" data-category="lift-kits"><div>Lift Kits</div></a><!--
    --><a class="icon-nav icon-window-tint" data-category="window-tint"><div>Window Tint</div></a><!--
    --><a class="icon-nav icon-wheels" data-category="wheels"><div>Wheels</div></a><!--
    --><a class="icon-nav icon-backgrounds" data-category="backgrounds"><div>Background</div></a>
  </nav>


  <div class="fb-like small" data-href="http://www.brandontran.com/jeep/" data-layout="button_count" data-action="like" data-show-faces="false" data-share="true"></div>
  <div class="fb-like large" data-href="http://www.brandontran.com/jeep/" data-layout="box_count" data-action="like" data-show-faces="true" data-share="true"></div>
  <a id="btn-info" title="Info About Build A Jeep">About</a>
  <a id="btn-comment" title="Leave A Comment">Comments</a>


<div class="slider-container">

  <!-- JEEP Paint Factory -->
  <div class="slider active" id="paint-shop">
    <div class="scroller">
      <div class="col-container"><!-- items here --></div>
    </div>
    <div class="btn-slider prev"></div>
    <div class="btn-slider next"></div>

  </div>

  <!-- JEEP Lift Kits -->
  <div class="slider" id="lift-kits">
    <div class="btn-slider prev"></div>
    <div class="btn-slider next"></div>
    <div class="scroller">
      <div class="col-container"><!-- items here --></div>
    </div>
  </div>

  <!-- JEEP Window Tint -->
  <div class="slider" id="window-tint">
    <div class="btn-slider prev"></div>
    <div class="btn-slider next"></div>
    <div class="scroller">
      <div class="col-container"><!-- items here --></div>
    </div>
  </div>

  <!-- JEEP Wheels -->
  <div class="slider" id="wheels">
    <div class="btn-slider prev"></div>
    <div class="btn-slider next"></div>
    <div class="scroller">
      <div class="col-container"><!-- items here --></div>
    </div>
  </div>

  <!-- JEEP Backgrounds -->
  <div class="slider" id="backgrounds">
    <div class="btn-slider prev"></div>
    <div class="btn-slider next"></div>
    <div class="scroller">
      <div class="col-container"><!-- items here --></div>
    </div>
  </div>
</div>














  <!-- JEEP Workshop -->
  <div id="canvas">
      <div class="jeep-container">
        <div class="jeep-wrapper">

          <div id="jeep-body">
            <div class="jeep-body-image"></div>
            <div id="jeep-window-tint">
              <div class="tint-back"></div>
              <div class="tint-front"></div>
            </div>
          </div>

          <div class="jeep-wheel wheel-left">
            <div class="wheel-wrapper">
              <div class="wheel"></div>
            </div>
          </div>

          <div class="jeep-wheel wheel-right">
            <div class="wheel-wrapper">
              <div class="wheel"></div>
            </div>
          </div>

        </div>
      </div>
  </div>








  <script type="text/javascript">
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-2896135-24']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  </script>

</body>
</html>