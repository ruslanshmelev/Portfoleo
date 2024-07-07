const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      overlay = document.querySelector('.menu__overlay'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active'),
    overlay.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
    overlay.classList.remove('active');
});



const counters = document.querySelectorAll ('.skill-percent__number'),
      lines = document.querySelectorAll ('.skill-percent__scale span');
      counters.forEach((item, i) =>{
        lines[i].style.width = item.innerHTML;
      });
      function validateForms(form){
        $(form).validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                
                email: {
                    required: true,
                    email: true
                }
            },
            messages: {
                name: {
                    required: "Пожалуйста, введите свое имя",
                    minlength: jQuery.validator.format("Введите {0} символа!")
                  },
                
                email: {
                  required: "Пожалуйста, введите свою почту",
                  email: "Неправильно введен адрес почты"
                }
            }
        });
    };

    validateForms('.contacts__form');

    
      
      $('form').submit(function(e){ 
        e.preventDefault; 
         if (!$(this).valid()){ 
            return; 
             } 
        $.ajax ({ 
            type: "POST", 
            url: "mailer/smart.php", 
            data: $(this).serialize() 
            }).done(function(){ 
        $(this).find("input").val(""); 
        $(form).trigger('reset'); 
        }); 
        return false; 
    }); 
      

      

