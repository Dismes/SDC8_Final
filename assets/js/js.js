
    $('.toptext').on('click', (evt) => {
        $(this).hide(); // does not run a DOM query
        //$('.class-name').hide() // runs a DOM query
        var test = $(this)
        console.log($(this).attr('id'));
    }); 
  
