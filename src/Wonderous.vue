<template>
<div id="wonderous-app">
  <category-tabs
    v-bind:categories="gameConfig.getCategories()"
    v-on:tab-selected="scoreFlik.selectCell('.'+$event)">
  </category-tabs>
  <div class="score-sheet-container">
    <player-name-column
      v-bind:players="players">
    </player-name-column>
    <div class="score-sheet-scores">
      <div
        class="score-sheet-edit-scores"
        ref="editScoresSlider">
        <edit-score-column
          v-for="category in gameConfig.getCategories()"
          v-bind:key="category.id"
          v-bind:players="players"
          v-bind:category="category"
          v-bind:class="category.id">
        </edit-score-column>
      </div>
      <total-score-column
        v-bind:players="players">
      </total-score-column>
    </div>
  </div>
  <br>
  <add-player v-on:add-player="players.push($event)"></add-player>
</div>
</template>

<script>
import Player from "./logic/Player.js";
import GameConfig from "./logic/GameConfig.js";
import PlayerNameColumn from "./components/PlayerNameColumn.vue";
import EditScoreColumn from "./components/EditScoreColumn.vue";
import TotalScoreColumn from "./components/TotalScoreColumn.vue";
import CategoryTabs from "./components/CategoryTabs.vue";
import AddPlayer from "./components/AddPlayer.vue";

import 'tiny-slider/dist/tiny-slider.css';
import {tns} from "tiny-slider/src/tiny-slider";

import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity';

let config = new GameConfig();
export default {
    name: 'wonderous-app',
    data: function() {
        return {
            message: "Hello!!",
            players: [new Player("Harrison", config.getWonders()[0])],
            gameConfig: config,
        };
    },
    components: {
        PlayerNameColumn,
        EditScoreColumn,
        TotalScoreColumn,
        CategoryTabs,
        AddPlayer,
    },
    provide: function() {
        return {
            gameConfig: this.gameConfig
        };
    },
    watch: {
        players: function () {
            this.$nextTick(function() {
                this.scoreFlik.resize();
            });
        }
    },
    mounted: function() {
        this.$nextTick(function() {
            this.scoreFlik = new Flickity( this.$refs.editScoresSlider, {
                cellAlign: 'left',
                watchCSS: true
            });
            this.scoreFlik.resize();
            return;
            this.scoreSlider = tns({
                container: this.$refs.editScoresSlider,
                items: 1,
                loop: false,
                nav: false,
                controls: false,
                autoWidth: false,
                responsive: {
                    700: {
                        disable: true,
                    },
                }
            });
        });
    },
};
</script>

<style lang="scss">
#wonderous-app, body {
    padding: 0;
    margin: 0;
}

.score-sheet-container {
    display: flex;
    width: 100%;
}

.total-score-column {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    flex-shrink: 1;
}

.score-sheet-edit-scores {
    &:after {
        content: 'flickity';
        display: none;
    }

    @media screen and (min-width: 900px) {
        &:after {
            content: '';
        }

        overflow: auto;
        display: flex;
        flex-direction: row;
        flex-grow: 2;
    }
    flex-grow: 5;
}

.score-sheet-scores {
    overflow: hidden;
    display: flex;
    flex-direction: row;
    flex-grow: 4;
}

.player-row {
    height: 4em;
    border-top: 1px solid #444;
    padding-top: 0.3em;
    padding-bottom: 0.3em;
    padding-left: 0.3em;
    padding-right: 0.3em;
}

.edit-score-column {
    @media screen and (max-width: 700px) {
    }

    flex: 1 1 auto;
}

.header-row {
    font-weight: bold;
    text-align: center;
    padding-bottom:0.5em;
    padding-top: 0.5em;
    padding-left: 0.3em;
    padding-right: 0.3em;
}


.background-dark {
    color: white;
}

.sheet-column {
}

.player {
    .player-name{
        @media screen and (max-width: 900px) {
            font-size: 1.3em;
        }
        font-size: 2em;
    }
}

.table-scroll {
    overflow-x: auto;
}
table {
    min-width: 20em;
}

</style>
