Vue.component('button-counter', {
    data: () => {
        return {
            count: 0
        };
    },
    template: `
        <button v-on:click="count++">You clicked me {{ count }} times.</button>
    `
});

Vue.component('player-score', {
    props: ['player'],
    template: `
        <div class="player-score">
            <span class="player-name">{{ player.name }}</span>
            <span class="player-score">{{ player.score }}</span>
        </div>
    `
});

class Player {
    constructor(name) {
        this.name = name;
        this.score = 0;
    }
}

var vm = new Vue({
    el: '#wonderous-app',
    data: {
        message: 'Hello Vue!',
        player: new Player("Harrison")
    }
});
