const numInput = document.getElementById('numInput');
const nameInput = document.getElementById('nameInput');
const dt = document.getElementById('dt');
const cvcInput = document.getElementById('cvcInput');
const name = document.getElementById('name');
const nameErr = document.getElementById('nameErr');
const num = document.getElementById('num');
const numErr = document.getElementById('numErr');
const date = document.getElementById('date');
const dateYY = document.getElementById('dateYY');
const dateErr = document.getElementById('dateErr');
const cvc = document.getElementById('cvc');
const cvcErr = document.getElementById('cvcErr');
const confirm = document.getElementById('confirm');
const completeBtn = document.getElementById('completeBtn');
const form = document.getElementById('form');
const complete = document.getElementById('complete');

confirm.addEventListener('click', () => {
    if(name.value == null || name.value == 0) {
        nameErr.dataset.salah = 'yes';
        name.dataset.salah = "yes";
    } else {
        nameErr.dataset.salah = "no";
        name.dataset.salah = 'no';
        if(num.value == null || num.value == 0) {
            num.dataset.salah = 'yes';
            numErr.dataset.salah = 'yes';
        } else {
            num.dataset.salah = 'no';
            numErr.dataset.salah = 'no';
            if(date.value == null || date.value == 0) {
                dateErr.dataset.salah = 'yes';
                date.dataset.salah = 'yes';
            } else {
                if(date.value > 12) {
                    dateErr.dataset.salah = 'yes';
                    date.dataset.salah = 'yes';
                } else {
                    if(dateYY.value == null || dateYY.value == 0) {
                        dateErr.dataset.salah = 'yes';
                        dateYY.dataset.salah = 'yes';
                    } else {
                        dateErr.dataset.salah = 'no';
                        dateYY.dataset.salah = 'no';
                        if(cvc.value == null || cvc.value == 0) {
                            cvcErr.dataset.salah = 'yes';
                            cvc.dataset.salah = 'yes';
                        } else {
                            cvcErr.dataset.salah = 'no';
                            cvc.dataset.salah = 'no';
                            cvcInput.innerHTML = cvc.value;
                            numInput.innerHTML = num.value;
                            nameInput.innerHTML = name.value;
                            dt.innerHTML = `${date.value}/${dateYY.value}`;
                            form.dataset.muncul = 'no';
                            complete.dataset.muncul = 'yes';
                        }
                    }
                }
            }
        }
    }
});

completeBtn.addEventListener('click', () => {
    form.dataset.muncul = 'yes';
    complete.dataset.muncul = 'no';
    name.value = '';
    num.value = '';
    date.value = '';
    dateYY.value = '';
    cvc.value = '';
});