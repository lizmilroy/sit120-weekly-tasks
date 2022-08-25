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