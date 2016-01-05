
$(function($) {

    var issue_list = 'https://api.github.com/repos/LoeiFy/Recordum/issues',
        issue_single = 'https://api.github.com/repos/LoeiFy/Recordum/issues'+'id',
        issue_comment = 'https://api.github.com/repos/LoeiFy/Recordum/issues'+'id'+'/comments';

    var to_comment = '#new_comment_field';

    /*
    $.ajax({
        type: 'GET',
        url: 'https://api.github.com/repos/LoeiFy/Recordum/issues',
        data: {
            filter: 'created',
            access_token: 'da3fb4003c268a958949'+'6b36b39b5d43a62831b3',
            page: 1,
            per_page: 2
        },
        success: function(data) {
            console.log(JSON.stringify(data))
        }
    })
    */

    var html = '';

    for (var i = 0; i < O.length; i ++) {
        var labels = '';
        for (var j = 0; j < O[i].labels.length; j ++) {
            labels += '<mark style="background:#'+ O[i].labels[j].color +'">#'+ O[i].labels[j].name +'</mark>'
        }

        html += '<li class="post">'+
                '<h1 class="title">'+ O[i].title +'</h1>'+
                '<time class="time">Updated at<span>'+ O[i].updated_at.split('T')[0] +'</span></time>'+
                '<article class="content">'+ marked(O[i].body) +'</article>'+
                '<section class="labels">'+ labels +'</section>'+
                '</li>'
    }

    $('#posts').html(html)

    $('pre code').each(function(i, block) {
        hljs.highlightBlock(block)
    })

})