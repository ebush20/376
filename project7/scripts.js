var fullDeckValues = ["s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13","s14",
                    "h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12","h13","h14",
                    "c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14",
                    "d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13","d14"
                    ];
                
var fullDeckText = ["🂢","🂣","🂤","🂥","🂦","🂧","🂨","🂩","🂪","🂫","🂭","🂮","🂡",
                "🂲","🂳","🂴","🂵","🂶","🂷","🂸","🂹","🂺","🂻","🂽","🂾","🂱",
                "🂲","🃓","🃔","🃕","🃖","🃗","🃘","🃙","🃚","🃛","🃝","🃞","🃁",
                "🃂","🃃","🃄","🃅","🃆","🃇","🃈","🃉","🃊","🃋","🃍","🃎","🃑"];

var deck = [];

var money = 50;

var lower;
var upper;

$(document).ready(function() {
  shuffleDeck();
});

function shuffleDeck() {
    console.log("Shuffled");
    
    deck = [];
    for(var i = 0; i < 52; i++) {
        var rand = Math.floor(Math.random() * fullDeckValues.length);
        deck.push(fullDeckValues[rand]);
        fullDeckValues.splice(rand, 1);
    }

    fullDeckValues = ["s2","s3","s4","s5","s6","s7","s8","s9","s10","s11","s12","s13","s14",
                    "h2","h3","h4","h5","h6","h7","h8","h9","h10","h11","h12","h13","h14",
                    "c2","c3","c4","c5","c6","c7","c8","c9","c10","c11","c12","c13","c14",
                    "d2","d3","d4","d5","d6","d7","d8","d9","d10","d11","d12","d13","d14"
                    ];
}

function getBounds() {
    if(deck.length < 5) {
        shuffleDeck();
    }
    
    $("#flippedCard").text("");
    $("#bet").val="0";
    
    var card1 = deck.pop();
    var card2 = deck.pop();
    
    console.log("card1 = " + card1);
    console.log("card2 = " + card2);
    
    var value1 = parseInt(card1.toString().substr(1));
    var value2 = parseInt(card2.toString().substr(1));

    if(value1 == 14) {
        console.log("Ace");
        if(14 - value2 < 7) {
            value1 = 1;
        }
    }
    
    if(value2 == 14) {
        console.log("Ace");
        if(14 - value1 < 7) {
            value2 = 1;
        }
    }
    
    if(value1 > value2) {
        lower = card2;
        upper = card1; 
    } else if(value2 > value1) {
        lower = card1;
        upper = card2;
    } else if(value1 == value2) {
        lower = card1;
        upper = card2;
    }
    
    var idxLower = fullDeckValues.indexOf(lower);
    var idxUpper = fullDeckValues.indexOf(upper);
    
    $("#lower").text(fullDeckText[idxLower]);
    $("#upper").text(fullDeckText[idxUpper]);
    
    $("#getBounds").prop("disabled", true);
    $("#getCard").prop("disabled", false);
}

function getCard() {
    var bet = parseInt($("#bet").val());
    
    if(bet <= money) {
        var card = deck.pop();
        var cardValue = parseInt(card.toString().substr(1));
        
        $("#flippedCard").text(fullDeckText[fullDeckValues.indexOf(card)]);
            
        var lowerValue = parseInt(lower.toString().substr(1));
        var upperValue = parseInt(upper.toString().substr(1));
        console.log("cardValue = " + cardValue);
        
        if(cardValue < upperValue && cardValue > lowerValue) {
            money += bet;
            console.log("Win");
        } else if(cardValue > upperValue || cardValue < lowerValue) {
            money -= bet;
            console.log("Lose");
        } else if(cardValue == upperValue || cardValue == lowerValue) {
            money -= bet * 2;
            console.log("Lose x2");
        }
        
        console.log("Bet = " + bet);
        $("#money").text("$" + money);
        
        $("#getBounds").prop("disabled", false);
        $("#getCard").prop("disabled", true);
    } else if(bet > money) {
        console.log("Too high of a bet");
    }
}

