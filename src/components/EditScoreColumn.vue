<template>
<div
  class="edit-score-column sheet-column"
  v-bind:data-category="category.id">
  <div class="player-score header-row background-dark"
       v-bind:class="category.id">{{ category.toString() }}</div>
  <div class="player-score player-row background-light"
       v-bind:class="category.id"
       v-for="player in players">
    <div class="score-input-container"
         v-bind:class="category.id">
    <ScienceInput
      v-if="category.id == 'science'"
      v-bind:science="player.scores[category.id]"></ScienceInput>
    <CashInput
      v-else-if="category.id == 'money'"
      v-bind:cash="player.scores[category.id]"></CashInput>
    <input
      type='number'
      max="100"
      v-bind:min="category.id == 'military' ? -60 : 0"
      v-else
      v-model.number="player.scores[category.id].value">
    </div>
  </div>
</div>
</template>

<script>
import Player from "../logic/Player.js";
import Score from "../logic/ScoreDatum.js";

import CashInput from "./CashInput.vue";
import ScienceInput from "./ScienceInput.vue";

export default {
    name: 'edit-score-column',
    inject: ['gameConfig'],
    components: {
        CashInput, ScienceInput
    },
    props: ['players', 'category'],
}
</script>

<style lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

.edit-score-column {
    @media screen and (min-width: 900px) {
        display: flex;
        flex-direction: column;
        flex-shrink: 0;
        flex-grow: 1;
    }
    
    width: 100%;
    flex-grow: 100;
}

.player-score {
    text-align: center;
    display: flex;
    justify-content: center;
}

.score-input-container {
    @each $stage,$primarycolor in $stagecolors-primary {
        &.#{$stage} input {
            background-color: desaturate(lighten($primarycolor, 40), 0);
        }
    }
}

.score-input-container {
    input {
        width: 100%;
        text-align: center;
        border: 1px solid rgba(0,0,0,0.2);
        font-size: 1.2em;
        vertical-align: center;
    }
    margin: auto;
}
</style>
