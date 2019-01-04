<template>
<div class="score-sheet">
  <category-tabs
    v-bind:categories="gameConfig.getCategories()"
    v-on:tab-selected="changeTab($event)">
  </category-tabs>
  <div class="score-sheet-container category-tabs__fixed-adjust add-player__fixed-adjust">
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
  <add-player v-on:add-player="players.push($event)"></add-player>
</div>
</template>

<script>
import Player from "../logic/Player.js";

import CategoryTabs from "./CategoryTabs.vue";

import PlayerNameColumn from "./PlayerNameColumn.vue";
import EditScoreColumn from "./EditScoreColumn.vue";
import TotalScoreColumn from "./TotalScoreColumn.vue";

import AddPlayer from "./AddPlayer.vue";

import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity';

export default {
    name: 'score-sheet',
    data: function() {
        return {
            players: [new Player("Harrison", this.gameConfig.getWonders()[0])],
        };
    },
    inject: ['gameConfig'],
    components: {
        CategoryTabs,
        PlayerNameColumn,
        EditScoreColumn,
        TotalScoreColumn,
        AddPlayer,
    },
    methods: {
        changeTab: function(event) {
            console.log(event);
            //this.currentTab = event;
            this.scoreFlik.selectCell('.'+event);
        },
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
                watchCSS: true,
                prevNextButtons: false,
                pageDots: false,
            });
            let $self = this;
            this.scoreFlik.on('change', function(index) {
                $self.currentTab = this.cells[index].element.dataset['category'];
            });
            this.scoreFlik.resize();
            
            return;
        });
    },
};
</script>

<style lang="scss">
.category-tabs__fixed-adjust {
    padding-top: 48px;
}
.add-player__fixed-adjust {
    padding-bottom: 3rem;
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

.flickity-button {
    background: none;
    top: 1.3em;
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

</style>
