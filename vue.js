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
});

// Week 7
Vue.component('global', {
    template: `<span> {{ message }}</span>`,
    data: function () {
        return {
            message: 'This is an example of a globablly declared Vue component.'
        }
    }
});

var local = {
    data: function () {
        return {
            count: 0
        }
    },
    template: `<button v-on:click="count++"> You clicked me {{ count }} times.</button>`
}
 
var app9 = new Vue ({
    el: '#app-10',
    components: {
        local
    }
})

var props1 = {
    props: ['song'],
    template: `<div class="artist">
        <p> Artist: {{ song.artist }} Song: {{ song.title }} </p>
        </div>`
}


var app10 = new Vue ({
    el: "#app-11",
    data: {
        songs: [
            { id: 1, title: 'Long Story Short', artist: 'Taylor Swift'},
            { id: 2, title: 'Better', artist: 'Gracie Abrams'},
            { id: 3, title: 'deja vu', artist: 'Olivia Rodrigo'}
        ], 
    },
    components: {
        props1,
    }
})

var events = {
    props: ['myname'],
    template: `
        <div>
            <button v-on:click="$emit('enlarge-text')"> Click to Enlarge Text </button>
            <p> {{ myname.first }} {{ myname.last }}</p>
        </div>`
}

var app11 = new Vue ({
    el: "#app-12",
    data: {
        myname: {
            first: 'Liz',
            last: 'Milroy'
        }, 
        mynameFontSize: 1
    },
    components: {
        events
    }
})

var slots = {
    template: `
    <div id="slots">
        <slot> No Content </slot>
    </div>`
}

var app12 = new Vue ({
    el:"#app-13",
    components: {
        slots
    },
    template: `<slots><a href="canvas.html">Canvas</a></slots>`
})

var app13 = new Vue ({
    el:"#app-14",
    components: {
        slots
    },
    template: `<slots></slots>`
})

var app14 = new Vue ({
    el: "#app-15",
    components: {
        slots
    },
    template: `<slots><span>This is a span element.</span></slots>`
})