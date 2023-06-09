


document.addEventListener('DOMContentLoaded', function() {

    const swictherTheme = document.querySelector('.main__check');
    const root = document.documentElement;

    if(root.getAttribute('data-theme') === 'dark'){
      swictherTheme.checked = true;      
    } 

    function toggleTheme(){
        
        const setTheme = this.checked ? 'dark' : 'light';
        root.setAttribute('data-theme', setTheme);
    
        localStorage.setItem('theme', setTheme);
    }
    

    swictherTheme.addEventListener('click', toggleTheme);

});






