// // const andi = document.querySelector('#andi')

// const andi = document.querySelector('#andi')

// // const claire = document.querySelector('#claire')

// const claire = document.querySelector('#claire')

// // const sharleen = document.querySelector('#sharleen')

// const sharleen = document.querySelector('#sharleen')

// // document.querySelector('#andiNext').addEventListener('click', andiNext)

// document.querySelector('#andiNext').addEventListener('click', andiNext)

// // document.querySelector('#claireNext').addEventListener('click', claireNext)

// document.querySelector('#claireNext').addEventListener('click', claireNext)

// // document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

// // function andiNext(){
// // 	claire.classList.add('hidden')
// // 	sharleen.classList.add('hidden')
// // 	andi.classList.toggle('hidden')
// // }

// function andiNext() {
// 	claire.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	andi.classList.toggle('hidden')
// }

// // function claireNext(){
// // 	andi.classList.add('hidden')
// // 	sharleen.classList.add('hidden')
// // 	claire.classList.toggle('hidden')
// // }

// function claireNext()  {
// 	andi.classList.add('hidden')
// 	sharleen.classList.add('hidden')
// 	claire.classList.toggle('hidden')
// }

// function sharleenNext(){
// 	claire.classList.add('hidden')
// 	andi.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }

// function sharleenNext()  {
// 	andi.classList.add('hidden')
// 	claire.classList.add('hidden')
// 	sharleen.classList.toggle('hidden')
// }

const claire = document.querySelector('#claire')
const andi = document.querySelector('#andi')
const sharleen = document.querySelector('#sharleen')

document.querySelector('#claireNext').addEventListener('click', claireNext)

function claireNext() {

	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')


}

document.querySelector('#andiNext').addEventListener('click', andiNext)

function andiNext() {

	andi.classList.toggle('hidden')
	sharleen.classList.add('hidden')
	claire.classList.add('hidden')


}

document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function sharleenNext() {

	andi.classList.add('hidden')
	sharleen.classList.toggle('hidden')
	claire.classList.add('hidden')


}