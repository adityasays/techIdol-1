const initialCardCount = 6; // Number of initially visible cards
let currentCardCount = initialCardCount; // Current total number of cards

function getCardName(index, option) {
    // Generate card name based on the option and index
    const baseName = `Heading ${(option.charCodeAt(6) - 1) * 6 + index + 1}`;
    return baseName;
}

function showCards(option) {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    for (let i = 0; i < currentCardCount; i++) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="ph"></div>
            <div class="headin">${getCardName(i, option)}</div>
            <div class="para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br>
                adipiscing elit, sed do eiusmod tempor<br>
                Lorem ipsum dolor sit amet, consect
            </div>
            <div class="bh">
                <div>Raised: $500</div>
                <div>Goal: $800</div>
            </div>
            <div class="loading-bar">
                <div class="fill"></div>
            </div>
        `;
        cardContainer.appendChild(card);
    }

    // Remove active class and reset text color for all options
    document.querySelectorAll('.option').forEach(opt => {
        opt.classList.remove('active');
        opt.style.color = '#333';
    });

    // Add active class and set text color for the selected option
    const activeOption = document.querySelector('.option' + '.' + option);
    activeOption.classList.add('active');
    activeOption.style.color = '#5044EB';

    // Reset currentCardCount to its initial value
    currentCardCount = initialCardCount;
}

function showMoreCards() {
    currentCardCount += 3;
    showCards(document.querySelector('.active').classList[1]); // Show cards for the currently active option
}

// Show cards for option1 initially
showCards('option1');
