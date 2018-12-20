<template>
<thead id="player-score-edit">
  <tr>
    <th class="player">
      Name
    </th>
    <th class="score-input-header background-dark"
        v-for="category in gameConfig.getCategories()"
        v-bind:class="[category.id]">        
      {{ category.toString() }}
    </th>
    <th class="score-total-header">
    Total
  </th>
  </tr>
</thead>
</template>

<script>
export default {
    name: 'player-score-header',
    inject: ['gameConfig'],
    data: () => { return {
    }; }
}
</script>

<style scoped lang="scss">
@import '../styles/wonder-styles';

.score-input-header {
    width: 4em;
    text-align: center;
    color: white;
}
.score-total-header {
    width: 4em;
    text-align: center;
}
</style>
