<template>
<div class="player-name-column sheet-column">
  <div class="player header-row">Name</div>
  <div class="player player-row"
       v-for="player in players">
    <span class="player-name">{{ player.name }}</span><br>
    <span class="player-wonder">{{ player.wonder.toString() }}</span>
  </div>
</div>
</template>

<script>
import Player from "../logic/Player.js";

export default {
    name: 'player-name-column',
    inject: ['gameConfig'],
    props: ['players'],
}
</script>

<style scoped lang="scss">
@import '../styles/_variables';
@import '../styles/wonder-styles';

.player-name-column {
    @media screen and (min-width: 900px) {
        flex-grow: 1;
    }
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 1;
}
</style>
