$.ajax({method: 'GET', url: '../data/data.json'}).done(data => {
    $(document).ready(function () {
        $('#header').text(data.name);
        $('#subheader').html(data.data.description);
        let bodycontent = ""
        let bodyprototype = []
        let cardprototype = []
        let iconprototype = ""
        $.each(data.children, (index, category) => {
            cardprototype = [];
            cardprototype.push(...['<div class="col-sm">', '<div class="card">', '<div class="card-header">', '<p class="card-title">',category.name, '</p>', '<p class="card-subtitle mb-2 text-muted">', category.data.description, '</p>', '</div>', '<div class="card-block">', '<ul class="list-group list-group-flush">']);
            $.each(category.children, (index, item) => {
                if (item.data.icon) {
                    iconprototype = '<div class="icon"><img src="' + '/img/icons/' + item.data.icon + '" height="42" width="42"></div>'
                } else {
                    iconprototype = ""
                }
                cardprototype.push(...['<li class="list-group-item">', iconprototype, '<a href="' + item.data.url + '">', item.name, '</a>', ' - ', item.data.description, '</li>'])
            });
            cardprototype.push(...['</ul>', '</div>', '</div>', '</div>']);
            bodyprototype.push(...cardprototype);
        });
        bodycontent = bodyprototype.join("");
        $('.bodycontent').html(bodycontent);
    });
});
