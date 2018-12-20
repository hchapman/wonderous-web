<template>
  <div>
    <input type='number'
           max="10"
           min="0"
           class="science-input"
           v-model.number="science.valueA">
    <input type='number'
           max="10"
           min="0"
           class="science-input"
           v-model.number="science.valueB">
    <input type='number'
           max="10"
           min="0"
           class="science-input"
           v-model.number="science.valueC">
    <input type='number'
           max="10"
           min="0"
           class="science-input"
           v-model.number="science.valueW">
  </div>
</template>

<script>
import {ScienceScore} from "../logic/ScoreDatum.js";

export default {
    name: 'science-input',
    props: {science: ScienceScore},
}
</script>

<style scoped lang="scss">
.player-name {
    width: 10em;
}
input.science-input {
    width: 2em;
}
.score-total {
    width: 4em;
    text-align: center;
}
</style>
