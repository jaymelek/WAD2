<template>
    <div >
        <div id="game-board" class="rounded">
        </div>
       
        <div class="user-player-hand rounded" id="user_hand"
        :draggable="true" @dragstart="startDrag(card, index)"
        >
            <div :class="[card, 'rounded']" 
            id="sashimi1"
            style = "position: relative; display: inline-block;"
            v-for="(card, index) in user_hand" :key="index"
            ></div>
        </div>

        <div class="other-player-hand rounded" id="other_hand"
        v-for="(card, index) in other_hand" :key="index"
        > 
            <div :class="[card, 'rounded']" 
            id="sashimi1"></div>
        </div>

        <div class="user-played-area rounded" id="user_area" 
        @dragover.prevent="allowDrop" @drop="dropCard"
        >
            <div :class="[card, 'rounded']" 
            id="sashimi1"
            style = "position: relative; display: inline-block;"
            v-for="(card, index) in user_area" :key="index"
            ></div>
        </div>

        <div class="other-played-area rounded" id="player2_area"
        >
        </div>

        <div class="deck-area rounded" id="deck-area" 
        v-for="(card, index) in deck" :key="index"
        > 
            <div :class="[card, 'rounded']" 
            id="sashimi1"></div>
            <!-- <div class="salmon rounded" id="salmon1"></div>
            <div class="sashimi rounded" id="sashimi2"></div>
            <div class="sashimi rounded" id="sashimi3"></div>
            <div class="sashimi rounded" id="sashimi4"></div>
            <div class="sashimi rounded" id="sashimi5"></div>
            <div class="sashimi rounded" id="sashimi6"></div>
            <div class="squid rounded" id="squid1"></div>
            <div class="squid rounded" id="squid2"></div>
            <div class="squid rounded" id="squid3"></div>
            <div class="squid rounded" id="squid4"></div>
            <div class="squid rounded" id="squid5"></div>
            <div class="sashimi rounded" id="sashimi2"></div>
            <div class="sashimi rounded" id="sashimi3"></div>
            <div class="sashimi rounded" id="sashimi4"></div>
            <div class="sashimi rounded" id="sashimi5"></div>
            <div class="sashimi rounded" id="sashimi6"></div>
            <div class="squid rounded" id="squid1"></div>
            <div class="squid rounded" id="squid2"></div>
            <div class="squid rounded" id="squid3"></div>
            <div class="squid rounded" id="squid4"></div>
            <div class="squid rounded" id="squid5"></div> -->
            
        </div>


        <button @click="distributeCards()" class="btn btn-primary distCardBtn" id="distCardBtn" 
        :style="display=distCardBtnShow">
        Distribute Cards</button>

    </div>
</template>

<script>
    export default {
        data() {
            return{
                user_hand: [],
                other_hand: [],
                user_area: [],
                player2_area: [],
                deck: ["sashimi", "salmon", "squid", "sashimi", "salmon", "salmon", "squid", "salmon"],
                distCardBtnShow: "",
            }
        },

        methods: {
            distributeCards() {
                console.log("Draw Card Started ===========");
                const deck = this.deck;
                const user_hand = this.user_hand
                const other_hand = this.other_hand

                this.distCardBtnShow = "none";

                for (let i = 0; i < 4; i++) {
                    // console.log(deck.length)
                    let card = deck[0];
                    let other_card = deck[1];
                    // card.style = "position: relative; display: inline-block;";
                    // card.draggable = true;
                    user_hand.push(card);
                    other_hand.push(other_card);
                    deck.splice(0, 2);
                }

                console.log(user_hand)
            },

            allowDrop(event) {
                // event.preventDefault();
                console.log("EVENT:: ")
                console.log(event)
            },

            drop(event) {
                // event.preventDefault();
                const cardId = event
                const card = document.getElementById(cardId);
                console.log(card)

                // Move the card to the player's area
                // const playerArea = document.getElementById('user-played-area');
                // playerArea.appendChild(card);
            }
        },
    }
</script>

<style scoped>
    /* Add CSS styles for the game board */

    .distCardBtn {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    #game-board {
            width: 1000px;
            height: 450px;
            /* background-color: rgb(156, 94, 0); */
            background-image: url('../assets/woodBg.jpg');
            position: relative;
            margin: auto;
        }

        .user-player-hand {
            width: 760px;
            height: 120px;
            background-color: #e1e1e1;
            /* border: 2px solid #000; */
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
        }

        .user-played-area {
            width: 760px;
            height: 120px;
            background-color: #007b2d4d;
            /* border: 2px solid #000; */
            position: absolute;
            bottom: 150px;
            left: 50%;
            transform: translateX(-50%);
        }

        .other-played-area {
            width: 760px;
            height: 120px;
            background-color: #e1e1e180;
            /* border: 2px solid #000; */
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
        }

        .other-player-hand {
            width: 760px;
            height: 120px;
            background-color: #e1e1e180;
            /* border: 2px solid #000; */
            position: absolute;
            top: 70px;
            left: 50%;
            transform: translateX(-50%);
            display: none;
        }

        .deck-area {
            width: 85px;
            height: 120px;
            background-color: #ff676780;
            /* border: 1px solid #ff2727; */
            position: absolute;
            top: 50%;
            left: 20px;
            transform: translateY(-50%);
        }

        /* .card {
            width: 65px;
            height: 100px;
            background-image: url('../assets/squid_nigiri.svg');
            border: 1px solid #414141;
            position: absolute;
            margin: 10px;
        } */

        .squid {
            width: 65px;
            height: 100px;
            /* background-color: #fff; */
            background-image: url('../assets/squid_nigiri.svg');
            border: 1px solid #414141;
            position: absolute;
            margin-top: 10px;
            margin-left: 10px;
            margin-bottom: 10px;
        }

        .sashimi {
            width: 65px;
            height: 100px;
            /* background-color: #fff; */
            background-image: url('../assets/sashimi.svg');
            border: 1px solid #414141;
            position: absolute;
            margin-top: 10px;
            margin-left: 10px;
            margin-bottom: 10px;
        }

        .salmon {
            width: 65px;
            height: 100px;
            /* background-color: #fff; */
            background-image: url('../assets/salmon_nigiri.svg');
            border: 1px solid #414141;
            position: absolute;
            margin-top: 10px;
            margin-left: 10px;
            margin-bottom: 10px;
        }
</style>