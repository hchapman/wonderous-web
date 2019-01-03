<template>
  <div class="cash-input">
    <input type='number'
           class="score-input cash"
           max="1000"
           min="0"
           v-model.number="cash.value">
    <span>/3 = {{ cash.points }}</span>
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
.cash-input {
    white-space: nowrap;
}
</style>
