const accordion = (triggersSelector) => {
    const btns = document.querySelectorAll(triggersSelector);

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            this.classList.toggle('active-style');
            
            let cachedBlocks, cachedHeading;

            function clear(block) {
                if (!cachedBlocks) cachedBlocks = block.parentNode.querySelectorAll('.accordion-block');
                cachedBlocks.forEach(item => {
                    if (item != block) {
                        item.classList.remove('active-content');
                        item.style.maxHeight = '0px';
                    }
                });
                if (!cachedHeading) cachedHeading = block.parentNode.querySelectorAll('.accordion-heading');
                cachedHeading.forEach(item => {
                    if (item != block) item.classList.remove('active-style');
                });
            }

            if (this.classList.contains('active-style')) {
                clear(this);

                this.nextElementSibling.classList.add('active-content');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + "px";
            } 
            else {    
                clear(this);
            }
        });
    });

    // Решение через использование CSS классов
    // const blocks = document.querySelectorAll(itemsSelector);

    // blocks.forEach(block => {
    //     block.classList.add('animated', 'fadeInDown');
    // });

    // btns.forEach(btn => {
    //     btn.addEventListener('click', function() {
    //         if (!this.classList.contains('active')) {
    //             btns.forEach(btn => {
    //                 btn.classList.remove('active', 'active-style');
    //             });
    //             this.classList.add('active', 'active-style');
    //         }
    //     });
    // });
};

export default accordion;