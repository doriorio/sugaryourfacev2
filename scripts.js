document.addEventListener('DOMContentLoaded', () => {
    var menuExpand = document.querySelectorAll(['.content-selector']);
 
    
    Array.prototype.forEach.call(menuExpand, menu => {
        var expanderType = '.visually-hidden[data-type="';
        if (menu.hasAttribute('data-type')) {
            expanderType+= menu.getAttribute('data-type') + '"]' ;

            var expander = document.querySelector([expanderType]);
            let otherExpanders = document.getElementsByClassName('click-expand');
            menu.addEventListener('click', function(){
                expander.classList.toggle('visually-hidden');
                Array.prototype.forEach.call(otherExpanders, otherItem => {
                    if (otherItem != expander) {
                        otherItem.classList.contains('visually-hidden') ? '' : otherItem.classList.add('visually-hidden'); 

                    }
                });
            });
        }
        

    });


});