document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
    
  });
  
  $(document).ready(function(){
        var imgItems = $('.slider li').length; 
    for (i = 1; i <= imgItems; i++){
    $('.pagination').append('<li><span class="fas fa-adjust"></span></li>');
         
    }


    $('.slider li').hide();
    $('.slider li:first').show();
    $('.pagination li:first').css({'color' : '#34A9B8'});

    $('.pagination li').click(pagination);
   
    function pagination(){
        var paginationPos = $(this).index() + 1;

        $('.slider li').hide();
        $('.slider li:nth-child('+ paginationPos +')').fadeIn();

        $('.pagination li').css({'color' : '#858585'});
        $(this).css({'color' : '#34A9B8'});
    }

});
  
  ScrollReveal().reveal('.showcase');
  ScrollReveal().reveal('.news-cards', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-one', { delay: 500 });
  ScrollReveal().reveal('.cards-banner-two', { delay: 500 });
