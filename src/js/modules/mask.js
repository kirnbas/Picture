const mask = (selector) => {

    let setCursorPosition = (pos, elem) => {
        elem.focus();

        //console.log('pos: ', pos);

        if (elem.setSelectionRange) {
            elem.setSelectionRange(pos, pos);
        } else if (elem.createTextRange) {
            let range = elem.createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    
    function createMask(event) {
        //console.log('event: ', event);

        if (!this.value.startsWith('+7')) { // HW DONE
            this.value = '+7';
        }

        let matrix = '+7 (___) ___ __ __';
        let i = 0;
        let def = matrix.replace(/\D/g, '');
        let val = this.value.replace(/\D/g, '');

        if (def.length >= val.length) {
            val = def;
        }

        this.value = matrix.replace(/./g, function(a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? '' : a;
        });

        if (event.type === 'blur') {
            if (this.value.length == 2) {
                this.value = '';
            }
        } else {
            setCursorPosition(this.value.length, this);
        }
    }

    let inputs = document.querySelectorAll(selector);

    inputs.forEach(input => {
        input.addEventListener('input', createMask);
        input.addEventListener('focus', createMask);
        input.addEventListener('blur', createMask);
    });
};

export default mask;