(function() {

	var
	namespace = 'acaan.jamesrock.me',
	savedGame = localStorage.getItem(namespace),
	saveGame = function() {

		var
		saveObject = {
			cards
		};

		localStorage.setItem(namespace, JSON.stringify(saveObject));

		return this;

	},
	startNewGame = function() {

		cards = makeDeck();
		saveGame();
		window.location.reload();

	},
	openSavedGame = function() {

		cards = makeDeckFromSaved(JSON.parse(savedGame));

	},
	makeDeck = function() {

		var
		out = [],
		maxValue = 13,
		maxSuit = 4;

		for(var suit=0;suit<maxSuit;suit++) {
			for(var value=0;value<maxValue;value++) {
				out.push(new Card(suits[suit], values[value], getPosition()));
			};
		};

		return out;

	},
	makeDeckFromSaved = function(saved) {

		var
		out = [];

		saved.cards.forEach(function(card) {
			out.push(new Card(card.suit, card.value, card.position));
		});

		return out;

	},
	makePositions = function() {

		var
		out = [],
		max = 52;

		for(var i=0;i<max;i++) {
			out.push(i);
		};

		return out;

	},
	makeCardSelect = function() {

		var
		select = document.createElement('select'),
		cardCount = cards.length;

		for(var cardIndex=0;cardIndex<cardCount;cardIndex++) {

			var
			node = document.createElement('option');
			node.innerHTML = cards[cardIndex].getName();
			node.value = cards[cardIndex].getId();
			select.appendChild(node);

		};

		return select;

	},
	makeNumberSelect = function() {

		var
		select = document.createElement('select'),
		cardCount = cards.length;

		for(var cardIndex=0;cardIndex<cardCount;cardIndex++) {

			var
			node = document.createElement('option');
			node.innerHTML = (cardIndex+1);
			node.value = cardIndex;
			select.appendChild(node);

		};

		return select;

	},
	makeCalculateButton = function() {

		var
		button = document.createElement('button');

		button.innerHTML = 'calculate';

		return button;

	},
	makeNewStackButton = function() {

		var
		button = document.createElement('button');

		button.innerHTML = 'new stack';

		return button;

	},
	makeWrapper = function(className) {

		var
		wrapper = document.createElement('div');

		wrapper.classList.add('wrapper');

		if(className) {
			wrapper.classList.add(className);
		};

		return wrapper;

	},
	makeLink = function(href, text) {

		var
		link = document.createElement('a');

		link.href = href;
		link.innerText = text;

		return link;

	},
	shuffle = function(collection) {

		return collection.sort(sorters.SHUFFLE);

	},
	getPosition = function() {

		var
		index = ROCK.MATH.random(0, (positions.length-1)),
		out = positions.splice(index, 1)[0];

		return out;

	},
	getCardToCut = function() {

		var
		card = cardsMap[cardSelect.value],
		position = (card.position-1),
		target = Number(numberSelect.value),
		diff = (position-target),
		cardToCut;

		if(position<target) {

			diff = (cards.length+diff);

		};

		cardToCut = sortedCards[diff];

		return cardToCut;

	},
	map = function(array, prop) {

		var
		out = {};

		cards.forEach(function(card) {
			out[card[prop]] = card;

		});

		return out;

	},
	makeCardsMap = function() {

		return map(cards, 'id');

	},
	makeStackDisplay = function() {

		var
		stack = document.createElement('div');

		stack.classList.add('cards-inner');

		sortedCards.forEach(function(card) {

			stack.appendChild(card.toHTML());

		});

		return stack;

	},
	empty = function(node) {

		node.innerHTML = '';
		return node;

	},
	toggleCardDisplay = function() {

		cardDisplayOpen = !cardDisplayOpen;
		cardDisplayWrapper.setAttribute('data-open', cardDisplayOpen);

	},
	cardDisplayOpen = true,
	test = window.test = function() {

		var
		randomCard = ROCK.MATH.random(0, 51),
		randomNumber = ROCK.MATH.random(0, 51);

		cardSelect.value = cards[randomCard].id;
		numberSelect.value = randomNumber;

		return this;

	},
	Card = ROCK.Object.extend({
		constructor: function Card(suit, value, position) {

			this.suit = suit;
			this.value = value;
			this.position = position;
			this.id = this.getId();
			this.name = this.getName();

		},
		getName: function() {

			return `${this.value}${this.suit}`;

		},
		getDisplayName: function() {

			var
			icon = suitIcons[this.suit];

			return `<div class="card-value"><div class="card-value-value">${this.value}</div><div class="card-value-icon">${icon}</div></div>`;

		},
		getColour: function() {

			return suitColours[this.suit];

		},
		getId: function() {

			return `${this.value}${this.suit}`;

		},
		toHTML: function() {

			var
			node = document.createElement('div');

			node.innerHTML = this.getDisplayName();

			node.classList.add('card');
			node.classList.add(this.getColour());

			return node;

		}
	}),
	sorters = {
		SHUFFLE: ROCK.SORT.NUMBER_ASCENDING(function() {
			return this.position;
		})
	},
	suits = [
		'C',
		'D',
		'H',
		'S'
	],
	suitIcons = {
		'C': '&#9827;&#65038;',
		'D': '&#9830;&#65038;',
		'H': '&#9829;&#65038;',
		'S': '&#9824;&#65038;'
	},
	suitColours = {
		'C': 'black',
		'D': 'red',
		'H': 'red',
		'S': 'black'
	},
	values = [
		'A',
		'2',
		'3',
		'4',
		'5',
		'6',
		'7',
		'8',
		'9',
		'10',
		'J',
		'Q',
		'K'
	],
	positions = makePositions(),
	cards,
	sortedCards,
	cardsMap,
	cardSelect,
	cardSelectWrapper,
	numberSelect,
	numberSelectWrapper,
	calculateButton,
	calculateButtonWrapper,
	newStackButton,
	newStackButtonWrapper,
	usageLink,
	usageLinkWrapper,
	stackDisplayWrapper,
	cardDisplayWrapper,
	stackDisplay;

	if(savedGame) {

		openSavedGame();

	}
	else {

		startNewGame();

	};

	cardSelect = makeCardSelect();
	cardSelectWrapper = makeWrapper();
	numberSelect = makeNumberSelect();
	numberSelectWrapper = makeWrapper();
	calculateButton = makeCalculateButton();
	calculateButtonWrapper = makeWrapper();
	newStackButton = makeNewStackButton();
	newStackButtonWrapper = makeWrapper();
	usageLink = makeLink('/usage.html', 'usage');
	usageLinkWrapper = makeWrapper();
	stackDisplayWrapper = makeWrapper('cards');
	cardDisplayWrapper = makeWrapper('card-display');

	sortedCards = shuffle([].concat(cards));
	cardsMap = makeCardsMap();
	stackDisplay = makeStackDisplay();

	cardSelectWrapper.appendChild(cardSelect);
	numberSelectWrapper.appendChild(numberSelect);
	calculateButtonWrapper.appendChild(calculateButton);
	newStackButtonWrapper.appendChild(newStackButton);
	usageLinkWrapper.appendChild(usageLink);
	stackDisplayWrapper.appendChild(stackDisplay);

	app.appendChild(cardSelectWrapper);
	app.appendChild(numberSelectWrapper);
	app.appendChild(calculateButtonWrapper);
	app.appendChild(newStackButtonWrapper);
	app.appendChild(usageLink);
	app.appendChild(stackDisplayWrapper);
	app.appendChild(cardDisplayWrapper);

	calculateButton.addEventListener('click', function() {

		var
		cardToCut = getCardToCut();

		empty(cardDisplayWrapper).appendChild(cardToCut.toHTML());
		toggleCardDisplay();

		// console.log('diff', diff);
		// console.log('message', message);
		// console.log('cardToCut', cardToCut);
		// console.log('card', card);

	});

	newStackButton.addEventListener('click', function() {

		if(confirm('make a new stack?')) {
			startNewGame();
		};

	});

	cardDisplayWrapper.addEventListener('click', function() {

		toggleCardDisplay();

	});

	// console.log('cards', cards);
	// console.log('cardsMap', cardsMap);
	// console.log('positions', positions);
	// console.log('cardSelect', cardSelect);
	// console.log('numberSelect', numberSelect);

	saveGame();
	toggleCardDisplay();

	/*

	5C @ 14 WORKS
	4D @ 14 WORKS
	2C @ 41 WORKS
	QD @ 28 WORKS
	JH @ 28 WORKS
	9C @ 15 WORKS

	*/

})();
