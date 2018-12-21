<template>
  <div>
    <input type='number'
           max="1000"
           min="0"
           v-model.number="cash.value">
    <span>{{ cash.points }}</span>
  </div>
</template>

<script>
import {CoinScore} from "../logic/ScoreDatum.js";

export default {
    name: 'cash-input',
    props: {cash: CoinScore},
}
</script>

<style scoped lang="scss">
.player-name {
    width: 10em;
}
.score-input {
    input {
        width: 100%;
        text-align: center;
    }
}
.score-total {
    width: 4em;
    text-align: center;
}
</style>
