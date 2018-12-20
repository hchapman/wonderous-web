<template>
<tr id="player-score-edit">
  <td class="player">
    <span class="player-name">{{ player.name }}</span><br>
    <span class="player-wonder">{{ player.wonder.toString() }}</span>
  </td>
  <td v-for="cat in gameConfig.getCategories()"
      v-bind:class="[cat.id]"
      class="score-input background-light">
  <ScienceInput
    v-if="cat == 'Science'"
    v-bind:science="player.scores[cat.id]"></ScienceInput>
  <CashInput
    v-else-if="cat == 'Money'"
    v-bind:cash="player.scores[cat.id]"></CashInput>
  <input
    type='number'
    max="100"
    min="0"
    v-else
    v-model.number="player.scores[cat.id].value">
  </td>
  <td class="score-total">
    {{ player.getTotalScore() }}
  </td>
</tr>
</template>

<script>
import Player from "../logic/Player.js";
import ScienceInput from "./ScienceInput.vue";
import CashInput from "./CashInput.vue";

export default {
    name: 'player-score-edit',
    components: { ScienceInput, CashInput },
    inject: ['gameConfig'],
    props: {player: Player},
}
</script>

<style scoped lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

.score-input {
    input {
        width: 100%;
        text-align: center;
    }
    max-width: 7em;
    vertical-align: top;
    text-align: center;
}
.score-total {
    width: 4em;
    text-align: center;
    font-weight: bold;
}
</style>
