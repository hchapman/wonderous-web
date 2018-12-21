<template>
<div class="total-score-column sheet-column">
  <div class="total-score header-row">Total</div>
  <div class="total-score player-row"
       v-for="player in players">
    <div class="score-total">{{ player.getTotalScore() }}</div>
  </div>
</div>
</template>

<script>
import Player from "../logic/Player.js";

export default {
    name: 'total-score-column',
    inject: ['gameConfig'],
    props: ['players'],
}
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

.total-score-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.total-score {
    display: flex;
    justify-content: center;
}

.score-total {
    font-size: 2em;
    text-align: center;
    font-weight: bold;
    margin: auto;
}
</style>
