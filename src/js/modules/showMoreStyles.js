import { getResource } from '../services/requests';

const showMoreStyles = (trigger, wrapper) => {
    const btn = document.querySelector(trigger);
    const wrapperElement = document.querySelector(wrapper);

    // cards.forEach(card => {
    //     card.classList.add('animated', 'fadeInUp');

    // });

    // btn.addEventListener('click', () => {
    //     cards.forEach(card => {
    //         card.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
    //         card.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
    
    //     });

    //     // btn.style.display = 'none';
    //     btn.remove();
    // });

    btn.addEventListener('click', function() {
        const errorMsgId = 'moreStylesErrorMsg';
        let errorMsg = wrapperElement.querySelector(`#${errorMsgId}`);
        if (errorMsg) {
            errorMsg.remove();
        }

        getResource('assets/db.json') //('http://localhost:3000/styles')
        .then(result => { 
            createCards(result.styles);//(result); 
            this.remove();
        })
        .catch(error => {
            //console.log(error);
            errorMsg = document.createElement('div');
            errorMsg.setAttribute('id', errorMsgId);
            errorMsg.textContent = error;
            errorMsg.classList.add('col-sm-12', 'error-msg');

            wrapperElement.appendChild(errorMsg);
        });
    });

    function createCards(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');

            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');

            card.innerHTML = `
                <div class="styles-block">
                    <img src="${src}" alt="style">
                    <h4>${title}</h4>
                    <a href="${link}">Подробнее</a>
                </div>
            `;

            wrapperElement.appendChild(card);
        });
    }
};

export default showMoreStyles;