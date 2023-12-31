const numberAdvice = document.querySelector('.advice-number')
const randomAdvice = document.querySelector('.random-advice')
const btn = document.querySelector('.btn')

const URL = 'https://api.adviceslip.com/advice'

btn.addEventListener("click", () => {
    fetch(URL, {cache: 'no-cache'})
        .then(res => res.json())
        .then(data => {
            randomAdvice.textContent = ("src", data.slip.advice);
            numberAdvice.textContent = `Advice #${("src", data.slip.id)}`;
        })
        .catch(err => console.error(err));
});
