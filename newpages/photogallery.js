const initialCardCount = 9; // Number of initially visible cards
let currentCardCount = initialCardCount; // Current total number of cards


const optionContents = {
    option1: [
        { heading: ``, description: ``, raised: ``, goal: `` },
    ],
    option2: [
        { heading: `Heading 1`, description: ``,  },
        { heading: `Heading 2`, description: ``, },
        { heading: `Heading 3`,description: ``,  },
        { heading: `Heading 4`, description: ``, },
        { heading: `Heading 5`,description: ``,  },
        { heading: `Heading 6`,description: ``,  },
        { heading: `Heading 7`, description: ``, },
        { heading: `Heading 8`,description: ``,  },
        { heading: `Heading 9`,description: ``,  },
       
        
    ],
    option3: [
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },

    ],
    option4: [
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        { heading: `HeadLine`, description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor adipiscing elit, sed do eiusmod tempor Lorem ipsum dolor sit amet, consect`,  },
        
       
    ],
    
};

function showCards(option) {
    const headingchange = document.getElementsByClassName('pictext')[0]
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';

    const optionContent = optionContents[option];
    if (option === 'option1')
    {
        headingchange.innerHTML=`Home / Gallery <br>
        <h2>Photo Gallery</h2>`;
    }
    if (option === 'option2')
    {
        headingchange.innerHTML=`Home / Gallery <br>
        <h2>Video Gallery</h2>`;
    }
    if (option === 'option3')
    {
        headingchange.innerHTML=`Home / Gallery <br>
        <h2>Media</h2>`;
    }
    if (option === 'option4')
    {
        headingchange.innerHTML=`Home / Gallery <br>
        <h2>Success Story</h2>`;
    }

    if (optionContent) {
        for (let i = 0; i < currentCardCount; i++) {
            const card = document.createElement('div');
            card.className = 'card';

            // Get content for the current card
            const currentCard = optionContent[i % optionContent.length];
            if (currentCard.heading === '') {
                const imageSrc = `images/${option}/card_image_${i % 9 + 1}.png`;
              
                card.innerHTML = `
                  <div class="ph" onclick="openModal('${imageSrc}')">
                    <img src="${imageSrc}" alt="Image ${i + 1}">
                  </div>
                `;
                cardContainer.appendChild(card);
              }
          else if (currentCard.description==='' && currentCard.heading !== ''  ) {
            card.innerHTML = `
                <div class="ph">
                <img src="images/${option}/card_image_${i % 9 + 1}.png" alt="Image ${i + 1}">

                </div>
                <div class="headin exxmar">${currentCard.heading}</div>
                
               
               `;
            cardContainer.appendChild(card); } 

            else {
                card.innerHTML = `
                    <div class="ph">
                    <img src="images/${option}/card_image_${i % 9 + 1}.png" alt="Image ${i + 1}">
    
                    </div>
                    <div class="headin">${currentCard.heading}</div>
                    <div class="para">${currentCard.description}</div>
                    <button id="km"> Know More </button>
                   
                   `;
                cardContainer.appendChild(card); } 
        }

        // Removeing  active class and reset text color for all options
        document.querySelectorAll('.option').forEach(opt => {
            opt.classList.remove('active');
            opt.style.color = '#333';
        });

        // Adding  active class and set text color for the selected option
        const activeOption = document.querySelector('.option' + '.' + option);
        activeOption.classList.add('active');
        activeOption.style.color = '#5044EB';
    }

    // Reset currentCardCount to its initial value
    currentCardCount = initialCardCount;
}

function showMoreCards() {
    currentCardCount += 3;
    showCards(document.querySelector('.active').classList[1]); // Show cards for the currently active option
}

// Show cards for option1 initially
showCards('option1');
function openModal(imageSrc) {
    const modal = document.getElementById('myModal');
    const modalImage = document.getElementById('modalImage');
  
    modal.style.display = 'block';
    modalImage.src = imageSrc;
  }
  
  function closeModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
  }