const SUITS = ["♣", "♥", "♠", "♦"];
// const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R"];
const VALUES = ["A", "7", "8", "9", "10", "V", "D", "R"];

// let cards52 = document.getElementById('52cards');
// let cards32 = document.getElementById('32cards');
// let output = "";
// var form = document.querySelector("form");
// var log = document.querySelector("#log");
// let choiceCards = document.getElementsByName('choice-cards');
// let choiceContentValue;
// let btnSubmit = document.getElementById('btn-submit');
// testBouton = testBouton();

// form.addEventListener("submit", submit, false);

// function submit(event) {
//     let data = new FormData(form);

//     for (const entry of data) {
//         output = entry[0] + "=" + entry[1] + "\r";

//         // if (entry[1] == 32) {
//         //     log.innerText = cards32.value;
//         //     // event.preventDefault();
//         // } else {
//         //     log.innerText = cards52.value;
//         // }
//     };
//     // log.innerText = cards52.value;
//     // log.innerText = output;

//     // event.preventDefault();
// }


// btnSubmit.addEventListener('click', (event) => {
//     let radio = document.querySelector('input[type="radio"]:checked');
//     output = radio.value;
//     log.innerText = output;

//     if (output == 52) {
//         VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "V", "D", "R"];

//         console.log(output);
//     }
//     event.preventDefault();
// })

export default class Deck {
    constructor(cards = freshDeck()) {
        this.cards = cards;
    }

    get numberOfCards() {
        return this.cards.length;
    }

    pop() {
        return this.cards.shift();
    }

    push(card) {
        this.cards.push(card);
    }

    shuffle() {
        for (let i = this.numberOfCards - 1; i > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1));
            const oldValue = this.cards[newIndex];
            this.cards[newIndex] = this.cards[i];
            this.cards[i] = oldValue;
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }

    get color() {
        return this.suit === '♣' || this.suit === '♠' ? 'black' : 'red';
    }

    getHTML() {
        const cardDiv = document.createElement('div');
        cardDiv.innerText = this.suit;
        cardDiv.classList.add('card', this.color);
        cardDiv.dataset.value = `${this.value}${this.suit}`;
        return cardDiv;
    }
}

function freshDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value);
        })
    })
}