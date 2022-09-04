let vue = new Vue({
    el: '#app-1',
    data: {
        todos: [
            { title: 'Yes', checked: false },
            { title: 'No', checked: false},
            { title: 'Maybe?', checked: false},
        ]
    }
});

var app1 = new Vue({
    el: '#app-2',
    data: {
        message: 'Hello World!'
    }
});

var app2 = new Vue ({
    el: '#app-3',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-4',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-5',
    data: {
        seen: true
    }
});

var app5 = new Vue ({
    el: '#app-6',
    data: {
        sith: [
            { text: 'Revan' },
            { text: 'Malak' },
            { text: 'Malgus' }
        ]
    }
});

var app6 = new Vue ({
    el: '#app-7',
    data: {
        user: '',
        pass: ''
    }
});

var app7 = new Vue({
    el: '#app-8',
    data: {
      checked: []
    }
})

var app8 = new Vue({
    el: '#app-9',
    data: {
        selected: '',
        options: [
            { text: 'Green', value: 'Green'},
            { text: 'Blue', value: 'Blue'},
            { text: 'Red', value: 'Red'}
        ]
    }
})