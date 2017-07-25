var query = 'fresh';
$.ajax({
    url: 'http://127.0.0.1:3000/translator',
    type: 'get',
    data: {
        word: query,
    },
    success: function (data) {
        console.log(data);
    }
});