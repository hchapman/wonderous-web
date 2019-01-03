<template>
  <div class="science-input-container">
    <input type='number'
           max="10"
           min="0"
           class="score-input science-input science-a"
           v-model.number="science.valueA">
    <input type='number'
           max="10"
           min="0"
           class="score-input science-input science-b"
           v-model.number="science.valueB">
    <input type='number'
           max="10"
           min="0"
           class="score-input science-input science-c"
           v-model.number="science.valueC">
    <input type='number'
           max="10"
           min="0"
           class="score-input science-input science-wild"
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
.science-input-container {
    white-space: nowrap;
}
.score-total {
    width: 4em;
    text-align: center;
}
</style>
