var form = document.querySelector('.add');
var list = document.querySelector('.todo');
var search = document.querySelector('.search input');

 var saved = localStorage.getItem('list');

 if(saved){
     list.innerHTML = saved;
 }

const generate = item => {
var html = `
<li class="list-group-item d-flex justify-content-between align-items-center text-light">
            <span>${item}</span>
            <i class="far fa-trash-alt delete"></i>
</li>
`;

list.innerHTML += html;
localStorage.setItem('list', list.innerHTML);
};


form.addEventListener('submit', event => {

    event.preventDefault();

    var item = form.add.value.trim();

    if(item.length > 0)
    {
        generate(item);
        form.reset();
    }
    
});

list.addEventListener('click', event =>{
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove();
        localStorage.setItem('list', list.innerHTML);
    }
});

const filter = term => {

Array.from(list.children)
.filter( thing => !thing.textContent.toLowerCase().includes(term))
.forEach( thing  => thing.classList.add('d-none'));

Array.from(list.children)
.filter( thing => thing.textContent.toLowerCase().includes(term))
.forEach( thing  => thing.classList.remove('d-none'));


}

search.addEventListener('keyup',event => {
    var term = search.value.trim().toLowerCase();
    filter(term);
} );

