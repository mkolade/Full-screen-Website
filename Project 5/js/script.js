

function openmenubutton()
{
    var scrollbar  =   document.getElementById('scrollbar')

    if(scrollbar.getAttribute('class') == 'scrollbar close')
    {
        openwindow();
    }
   
}

function closemenubutton()
{
    var scrollbar  =   document.getElementById('scrollbar')
    if(scrollbar.getAttribute('class') == 'scrollbar open')
    {
        closewindow();
    }
   
}


function openwindow()
{
 var scrollbar  =   document.getElementById('scrollbar');

 scrollbar.setAttribute('class','scrollbar open');
}

function closewindow()
{
 var scrollbar  =   document.getElementById('scrollbar');

 scrollbar.setAttribute('class','scrollbar close');
}


var backtotop = document.getElementById('backtotop');

   window.addEventListener('scroll',() =>
   {
  
    if(window.pageYOffset > 500)
    {
        visible();
    }
    else
    {
        notvisible();
    }
   })
    


function visible()
{

    var backtotop = document.getElementById('backtotop');

    backtotop.setAttribute('class','backtotop active');
}

function notvisible()
{

    var backtotop = document.getElementById('backtotop');

    backtotop.setAttribute('class','backtotop');
}

notvisible()

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:1000,
    responsive:{
        0:{
            items:6
        },
        600:{
            items:6
        },
        1000:{
            items:6
        }
    }
})