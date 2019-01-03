<template>
<div
  id="add-player"
  class="add-player-bar">
  <input v-model="player.name"
         placeholder="Player Name">
  <select v-model="player.wonder">
    <option disabled value="">Choose Wonder</option>
    <option v-for="wonder in gameConfig.getWonders()" v-bind:value="wonder">{{ wonder.toString() }}</option>
  </select>
  <button v-on:click="addPlayer()">Add Player</button>
</div>
</template>

<script>
import Player from "../logic/Player.js";

export default {
    name: 'add-player',
    data: () => { return {
        player: new Player("",""),
    }; },
    inject: ['gameConfig'],
    methods:  {
        addPlayer: function() {
            this.$emit('add-player', this.player);
            this.player = new Player("","");
        },
    },
}
</script>

<style lang="scss">
.add-player-bar {
    background-color: #aaa;
    height: 3rem;
    width: 100%;
    position: fixed;
    bottom: 0;
}


</style>
