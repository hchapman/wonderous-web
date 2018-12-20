<template>
<div id="wonderous-app">
  <div class="table-scroll">
  <table>
  <player-score-header>
  </player-score-header>
  <tbody>
    <player-score-edit
      v-for="player in players"
      v-bind:player="player"></player-score-edit>
  </tbody>
  </table>
  </div>
  <br>
  <add-player v-on:add-player="players.push($event)"></add-player>
</div>
</template>

<script>
import Player from "./logic/Player.js";
import GameConfig from "./logic/GameConfig.js";
import PlayerScoreEdit from "./components/PlayerScoreEdit.vue";
import PlayerScoreHeader from "./components/PlayerScoreHeader.vue";
import AddPlayer from "./components/AddPlayer.vue";

let config = new GameConfig();
export default {
    name: 'wonderous-app',
    data: function() {
        return {
            message: "Hello!!",
            players: [new Player("Harrison", config.getWonders()[0])],
            gameConfig: config,
        };
    },
    components: {
        PlayerScoreEdit,
        PlayerScoreHeader,
        AddPlayer,
    },
    provide: function() {
        return {
            gameConfig: this.gameConfig
        };
    },
}
</script>

<style lang="scss">
#wonderous-app {
    
}

.player {
    .player-name{
        font-size: 2em;
    }
    
    width: 10em;
    position: -webkit-sticky;
    position: sticky;
    left: 0;
    z-index: 2;
    background: white;
    padding: 0;
}

.table-scroll {
    overflow-x: auto;
}
table {
    min-width: 20em;
}

</style>
