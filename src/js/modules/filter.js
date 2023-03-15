const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
    items = menu.querySelectorAll('li'),
    btnAll = menu.querySelector('.all'),
    btnLovers = menu.querySelector('.lovers'),
    btnChef = menu.querySelector('.chef'),
    btnGirl = menu.querySelector('.girl'),
    btnGuy = menu.querySelector('.guy'),
    btnGrandmother = menu.querySelector('.grandmother'),
    btnGranddad = menu.querySelector('.granddad'),
    wrapper = document.querySelector('.portfolio-wrapper'),
    markAll = wrapper.querySelectorAll('.all'),
    // markGirl = wrapper.querySelectorAll('.girl'),
    // markLovers = wrapper.querySelectorAll('.lovers'),
    // markChef = wrapper.querySelectorAll('.chef'),
    // markGuy = wrapper.querySelectorAll('.guy'),
    no = document.querySelector('.portfolio-no');

    const typeFilter = (markTypeSelector) => {
        const markType = document.querySelectorAll(markTypeSelector);

        markAll.forEach(mark => {
            mark.style.display = 'none';
            mark.classList.remove('animated', 'fadeIn');
        });

        no.style.display = 'none';
        no.classList.remove('animated', 'fadeIn');

        if (markType.length > 0) {
            markType.forEach(mark => {
                mark.style.display = 'block';
                mark.classList.add('animated', 'fadeIn');
            });
        } else {
            no.style.display = 'block';
            no.classList.add('animated', 'fadeIn');
        }
    };

    btnAll.addEventListener('click', () => typeFilter('.all'));
    btnLovers.addEventListener('click', () => typeFilter('.lovers'));
    btnChef.addEventListener('click', () => typeFilter('.chef'));
    btnGirl.addEventListener('click', () => typeFilter('.girl'));
    btnGuy.addEventListener('click', () => typeFilter('.guy'));
    btnGrandmother.addEventListener('click', () => typeFilter());
    btnGranddad.addEventListener('click', () => typeFilter());

    menu.addEventListener('click', (e) => {
        let target = e.target;

        if (target && target.tagName == 'LI') {
            items.forEach(btn => {
                btn.classList.remove('active');
                target.classList.add('active');
            });
        }
    });
};

export default filter;