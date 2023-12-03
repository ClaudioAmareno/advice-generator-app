const numberAdvice = document.querySelector('.advice-number')
const randomAdvice = document.querySelector('.random-advice')
const btn = document.querySelector('.btn')

const URL = 'https://api.adviceslip.com/advice'

btn.addEventListener('click', () =>{
    fetch(URL)
	.then(res => res.json())
    .then(data => randomAdvice.textContent = ('src', data.slip.advice))
    .catch(err => console.error(err))

    fetch(URL)
	.then(res => res.json())
    .then(data => numberAdvice.textContent = `Advice #${'src', data.slip.id}`)
    .catch(err => console.error(err))

})


