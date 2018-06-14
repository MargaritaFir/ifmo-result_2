
let h =document.body.appendChild(document.createElement('h4'));
h.setAttribute('title', 'GossJS');
h.setAttribute('id', 'author');
h.textContent += 'MargaritaFir' + '\n';


function clckFunc() {
	this.textContent = this.id;
}

document.querySelector('#bt1')
        .addEventListener('click', clckFunc);
document.querySelector('#bt2')
        .addEventListener('click', ({target}) => (target::clckFunc)());