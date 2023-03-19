// const andi = document.querySelector('#andi')
// const claire = document.querySelector('#claire')
// const sharleen = document.querySelector('#sharleen')

// document.querySelector('#andiNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#claireNext').addEventListener('click', /*INSERTCODE*/)
// document.querySelector('#sharleenNext').addEventListener('click', /*INSERTCODE*/)

// function andiNext(){
// 	claire.classList.add(/*INSERTCODE*/)
// 	sharleen.classList.add(/*INSERTCODE*/)
// 	andi.classList.toggle(/*INSERTCODE*/)
// }

// function claireNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }

// function sharleenNext(){
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.add(/*INSERTCODE*/)
// 	/*INSERTCODE*/.classList.toggle(/*INSERTCODE*/)
// }
//-------------------------------------------------------------------------------------------
const andi = document.querySelector('#andi')

document.querySelector('#andiNext').addEventListener('click',andiNext)

function andiNext() {
	claire.classList.add('hidden')
	sharleen.classList.add('hidden')
	andi.classList.toggle('hidden')
}

const claire = document.querySelector('#claire')

document.querySelector('#claireNext').addEventListener('click', claireNext)

function claireNext(){

	andi.classList.add('hidden')
	sharleen.classList.add('hidden')
	claire.classList.toggle('hidden')

}

const sharleen = document.querySelector('#sharleen')

document.querySelector('#sharleenNext').addEventListener('click', sharleenNext)

function sharleenNext() {
	andi.classList.add('hidden')
	claire.classList.add('hidden')
	sharleen.classList.toggle('hidden')
}




