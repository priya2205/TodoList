const list = document.querySelector('.list');
const li= document.querySelector('li');
const todo = document.querySelector('.todo');
const btn= document.querySelector('.btn');
const search = document.querySelector('.searchrounded');
const trash = document.querySelector('.delete');

 const generateTemplate = ul =>{
     const html = `<li class="sublist"><span class="delete" style="padding-right:70px ;">${ul}</span><i class="fa fa-trash-o" ></i></li>`;
     list.innerHTML += html; 
     
     
    
    };
btn.addEventListener('click',(e)=>{
    e.preventDefault();
    //ul.innerHTML+=`<li>something</li>`;
    const ul= todo.itemadd.value.trim();
    if(ul.length){
        generateTemplate(ul);
        todo.reset();
    }
});
const filterTodos = (term) =>{
    Array.from(list.children)
    .filter((sample) => !sample.textContent.includes(term)).
    forEach(sample=> sample.classList.add('filtered'));

    Array.from(list.children)
    .filter((sample) => sample.textContent.includes(term)).
    forEach(sample=> sample.classList.remove('filtered'));
}
search.addEventListener('keyup',e=>{
    const term = todo.search.value.trim();
    filterTodos(term);
});
list.addEventListener('click',e=>{

     if(e.target.classList.contains('fa-trash-o'))
     {
        e.target.parentElement.remove();
     } 
    
});
