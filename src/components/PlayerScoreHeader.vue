<template>
<div id="player-score-edit">
  <span class="player-name-header">
    Name
  </span>
  <span class="score-input-header">
    Mil
  </span>
  <span class="score-input-header">
    Mil
  </span>
  <span class="score-input-header">
    Mil
  </span>
  <span class="score-input-header">
    Mil
  </span>
  <span class="score-input-header">
    Mil
  </span>
  <span class="score-input-header">
    Mil
  </span>
  <span class="score-total-header">
    Total
  </span>
</div>
</template>

<script>
export default {
    name: 'player-score-header',
}
</script>

<style scoped lang="scss">
.player-name-header {
    width: 10em;
    display: inline-block;
}
.score-input-header {
    width: 4em;
    display: inline-block;
    text-align: center;
}
.score-total-header {
    width: 4em;
    display: inline-block;
    text-align: center;
}
</style>
