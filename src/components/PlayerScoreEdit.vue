<template>
<div id="player-score-edit">
  <span class="player-name">
    {{ player.name }}
  </span>
  <input type='number'
         max="100"
         class="score-input"
         v-for="score in player.scores"
         v-model="score.value">
  <span class="score-total">
    {{ player.getTotalScore() }}
  </span>
</div>
</template>

<script>
import Player from "../logic/Player.js";

export default {
    name: 'player-score-edit',
    props: {player: Player},
}
</script>

<style scoped lang="scss">
.player-name {
    width: 10em;
    display: inline-block;
}
.score-input {
    width: 4em;
    text-align: center;
}
.score-total {
    width: 4em;
    display: inline-block;
    text-align: center;
}
</style>
