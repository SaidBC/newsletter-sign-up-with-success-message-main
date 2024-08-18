const container = document.querySelector('.container')
const form = document.querySelector('.container .left-side form')
const submit_btn = document.querySelector('.container .left-side form button');
const user_input = document.querySelector('.container .left-side form input');
const success_section = document.querySelector('.success-section')
const user_email = document.querySelector('.success-section p b')
const dismissBtn = document.querySelector('.dismiss-btn')



submit_btn.addEventListener('click', () => {
    if (/\w+\@\w+\.\w+/g.test(user_input.value)) {
        form.classList.remove('error');
        container.classList.add('submitted')
        success_section.classList.remove('hide')
        user_email.textContent = user_input.value
    } else {
        form.classList.add('error')
    }
})

dismissBtn.addEventListener('click', () => {
    container.classList.remove('submitted')
    success_section.classList.add('hide')
    form.reset()
})
