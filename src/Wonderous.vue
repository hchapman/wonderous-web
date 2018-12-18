<template>
<div id="wonderous-app">
  <player-score-header>
  </player-score-header>
  <player-score-edit
    v-for="player in players"
    v-bind:player="player"></player-score-edit>
  <br>
  <add-player v-on:add-player="players.push($event)"></add-player>
</div>
</template>

<script>
import Player from "./logic/Player.js";
import PlayerScoreEdit from "./components/PlayerScoreEdit.vue";
import PlayerScoreHeader from "./components/PlayerScoreHeader.vue";
import AddPlayer from "./components/AddPlayer.vue";

export default {
    name: 'wonderous-app',
    data: () => { return {
        message: "Hello!!",
        players: [new Player("Harrison")],
    }; },
    components: {
        PlayerScoreEdit,
        PlayerScoreHeader,
        AddPlayer,
    }
}
</script>

<style lang="scss">
#wonderous-app {
}
</style>
