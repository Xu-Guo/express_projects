$(document).ready(() => {
    $('.category-delete').on('click', (e) => {
        console.log('in jquery');
        $target = $(e.target);
        const id = $target.attr('data-cat-id');
        $.ajax({
            type : 'DELETE',
            url : '/categories/delete/'+id,
            success : (response) => {
                alert('Deleting Category...');
                window.location.href='/';
            },
            error : (error) => {
                console.log(error);
            }
        });
    });

    $('.article-delete').on('click', (e) => {
        console.log('in jquery');
        $target = $(e.target);
        const id = $target.attr('data-art-id');
        $.ajax({
            type : 'DELETE',
            url : '/articles/delete/'+id,
            success : (response) => {
                alert('Deleting Article...');
                window.location.href='/';
            },
            error : (error) => {
                console.log(error);
            }
        });
    });
});
