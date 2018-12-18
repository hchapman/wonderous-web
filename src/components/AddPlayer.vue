<template>
<div id="add-player">
  <input v-model="player.name">
  <input v-model="player.wonder">
  <button v-on:click="addPlayer()">Add Player</button>
</div>
</template>

<script>
import Player from "../logic/Player.js";

export default {
    name: 'add-player',
    data: () => { return {
        player: new Player(""),
    }; },
    methods:  {
        addPlayer: function() {
            this.$emit('add-player', this.player);
            this.player = new Player("");
        },
    },
}
</script>

<style lang="scss">
</style>
