//contentloader
document.addEventListener('DOMContentLoaded', function(){

//delete book////////////////

		const list = document.querySelector('#book-list ul');

		list.addEventListener('click', function(e){
			if (e.target.className == 'delete') {
				let li = e.target.parentElement;
				// li.parentElement.removeChild(li);
				list.removeChild(li);
			}
		});

//add books///////////////////

		const addBook = document.forms['add-books'];

		addBook.addEventListener('submit', function(e){
			e.preventDefault();
			let addedBookname = addBook.querySelector('#add-books > input[type=text]').value;
			// console.log(addedBookname);

		//create element/////////////////////////

				let li = document.createElement('li');
				let bookName = document.createElement('span');
				let delBtn = document.createElement('span');


		//add value and class to the created element

				bookName.textContent = addedBookname;
				bookName.setAttribute('class','name');

				delBtn.textContent = 'Delete';
				delBtn.setAttribute('class','delete');

		//Another way is to add classlist
				// bookName.classList.add('name');
				// delBtn.classList.add('delete');


		//append child///////////////////////////

				li.appendChild(bookName);
				li.appendChild(delBtn);
				list.appendChild(li);
			});

//hide booklist///////////////
			
		let hideBox = document.querySelector('#hideBooks');
		let listHeader = document.querySelector('#book-list > h2');

		// console.log(hideBox);
		hideBox.addEventListener('change', function(e){
			if (hideBox.checked) {
				list.style.display = 'none';
				listHeader.textContent = 'Book titles were hidden.';
				listHeader.style.textAlign = 'center';
			

			}
			else{
				list.style.display = 'initial';
				listHeader.textContent = 'Book titles:';
			}
		});

//Filter book title//////////////
		
		let searchBar = document.querySelector('#search-books > input[type=text]');
		// console.log(searchBar);
		searchBar.addEventListener('keyup',function(e){
			let searchTerm = e.target.value.toLowerCase();
			// console.log(searchTerm);
			let booksExist = document.querySelectorAll('#book-list > ul > li .name');
			// console.log(booksExist);
			booksExist.forEach(function(existBook){
				let existBookname = existBook.textContent.toLowerCase();
				// console.log(existBookname);
				if (existBookname.indexOf(searchTerm) != -1) {
					existBook.style.display = 'inline-block';
				}
				else{
					existBook.parentElement.style.display = 'none';
				}
			});

		});

//tabbed /////////////////////
		
		let aboutBtn = document.querySelector('#tabbed-nav > li:nth-child(1) > button');
		let aboutCntnt = document.querySelector('.aboutCntnt');
		let contactBtn = document.querySelector('#tabbed-nav > li:nth-child(2) > button');
		let contactCntnt = document.querySelector('.contactCntnt');

		aboutBtn.onclick = function(){
			contactCntnt.className = 'hide';
			aboutCntnt.className = 'show';
		};

		contactBtn.onclick = function(){
			aboutCntnt.className = 'hide';
			contactCntnt.className = 'show';
		}

});