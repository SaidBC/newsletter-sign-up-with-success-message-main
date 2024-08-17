const container = document.querySelector('.container')
const form = document.querySelector('.container .left-side form')
const submit_btn = document.querySelector('.container .left-side form button');
const user_input = document.querySelector('.container .left-side form input');
const success_section = document.querySelector('.success-section')
const user_email = document.querySelector('.success-section p b')



submit_btn.addEventListener('click', () => {
    if (/\w+\@\w+\.\w+/g.test(user_input.value)) {
        form.classList.remove('error');
        container.remove()
        success_section.classList.remove('hide')
        user_email.textContent = user_input.value
    } else {
        form.classList.add('error')
    }
})