<template>
<div id="add-player">
  <input v-model="player.name">
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
</style>
