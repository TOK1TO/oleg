
  let wrapper = document.querySelector(".wrapper");
  function loaded() {
    wrapper.classList.add("_loaded");

  }

  function mobileMenu() {
    let body = document.querySelector("body");
    var checkBox = document.getElementById("mobile-menu");
    if (checkBox.checked == true){
      body.style.position = "fixed";
      body.style.overflow = "hidden";
      checkBox.style.color = "red";
    } else {
      body.style.position = null;
      body.style.overflow = null;
    }
  }
  
  setTimeout(loaded, 100);

  var pageSlider;

  const sliderInit = () => {
    pageSlider = new Swiper(".page", {
      wrapperClass: "page__wrapper",
      slideClass: "page__screen",
  
      direction: "vertical",
      slidesPerView: "auto",
  
      parallax: true,
      swipe: false,
      // SWIPE
      allowTouchMove: false,
      // SWIPE

  
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pagegUpDown: true,
      },
  
      mousewheel: {
        sensitivity: 1,
      },
  
      watchOverflow: true,
      speed: 800,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,
  
      pagination: {
        el: ".page__pagination",
        // dynamicBullets: true,
        type: "bullets",
        clickable: true,
        bulletClass: "page__bullet",
        bulletActiveClass: "page__bullet_active",
      },
  
      scrollbar: {
        el: ".page__scroll",
        dragClasss: "page__drag-scroll",
        draggable: true,
      },
    });
  }

  const nosliderInit = () => {

    var body = document.querySelector("body");
    
    body.classList.add("small__screen");
    var elements = document.getElementsByClassName("page__screen");
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add("swiper-slide-active");
    }
  }


  if (window.innerHeight > 650 && window.innerWidth > 990) {
    sliderInit();
  }else {
    nosliderInit();
  }


// let wrapper = document.querySelector(".wrapper");
// function loaded() {
//   wrapper.classList.add("_loaded");
// }

// setTimeout(loaded, 100);

// let pageSlider = new Swiper(".page", {
//   wrapperClass: "page__wrapper",
//   slideClass: "page__screen",

//   direction: "vertical",
//   slidesPerView: "auto",

//   parallax: true,

//   keyboard: {
//     enabled: true,
//     onlyInViewport: true,
//     pagegUpDown: true,
//   },

//   mousewheel: {
//     sensitivity: 1,
//   },

//   watchOverflow: true,
//   speed: 800,
//   observer: true,
//   observeParents: true,
//   observeSlideChildren: true,

//   pagination: {
//     el: ".page__pagination",
//     type: "bullets",
//     clickable: true,
//     bulletClass: "page__bullet",
//     bulletActiveClass: "page__bullet_active",
//   },

//   scrollbar: {
//     el: ".page__scroll",
//     dragClasss: "page__drag-scroll",
//     draggable: true,
//   },
// });

$(".lg").on("click", function (event) {
  $(this).toggleClass("active");
  $(this).find(".popover").toggleClass("visible");
});


function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tabs__link");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

$(document).ready(function () {
  var btnChangeTheme = document.getElementById("changeTheme");
  var btnChangeThemeMob = document.getElementById("changeThemeMob");
  var body = document.getElementById("body");
  btnChangeTheme.addEventListener("click", function () {
    ChangeTheme();
  });
  btnChangeThemeMob.addEventListener("click", function () {
    ChangeTheme();
  });
});

function ChangeTheme() {
  let lightTheme = "light";
  let darkTheme = "dark";

  var currTheme = body.getAttribute("data-theme");
  var theme = "";

  if (currTheme == lightTheme) {
    currTheme = darkTheme;
    theme = "dark";
  } else {
    currTheme = lightTheme;
    theme = "light";
  }

  body.setAttribute("data-theme", currTheme);
  $("body").toggleClass("light");
  $("body").toggleClass("dark");

  $("#dntog").toggleClass("light");
  $("#dntog").toggleClass("dark");
  $("#dntogMob").toggleClass("light");
  $("#dntogMob").toggleClass("dark");
  
  if (theme == "light") {
    $("#logo__header").attr("src", "img/logo-dark.svg");
    $("#main-section__bg").attr("src", "img/main-bg-red.svg");
  } else {
    $("#logo__header").attr("src", "img/logo.png");
    $("#main-section__bg").attr("src", "img/main-bg.svg");
  }

  $("#toggledaynight").toggleClass("light");
  $("#toggledaynight").toggleClass("dark");

  SaveTheme(theme);
}

function SaveTheme(theme) {
  var Request = new XMLHttpRequest();
  Request.open("GET", "/components/theme.php?theme=" + theme, true);
  Request.send();
}

$('.reviews-slide__body')
    .on('mouseenter', function() {
      pageSlider.mousewheel.disable();
    })
    .on('mouseleave', function() {
      pageSlider.mousewheel.enable();
    });

  function sendAjaxForm(form_result, ajax_form, url) {     
     var mes = $('#'+ajax_form).serialize();
     $.ajax({
       type: 'POST',
       url: 'components/ajax.php',
       data: mes,
       success: function (data) {
         $('#'+form_result).html(data);
       }
     });

  }

if (document.querySelector("#forClients_left__currency")) {
  document.querySelector("#forClients_left__currency").addEventListener('change', function (e) {
    document.getElementById("forClients_left__currency_input").value = e.target.value;
  })  
}
if (document.querySelector("#forClients_right__currency")) {
  document.querySelector("#forClients_right__currency").addEventListener('change', function (e) {
    document.getElementById("forClients_right__currency_input").value = e.target.value;
  })
}



  (function() {
    'use strict';
  
    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;
  
      if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove('back_to_top-show');
      }
    }
  
    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
      }
    }
  
    var goTopBtn = document.querySelector('.back_to_top');
  
    window.addEventListener('scroll', trackScroll);
    goTopBtn.addEventListener('click', backToTop);
  })();


