

// var booknamecon = document.createElement('div');
// booknamecon.classList.add('container');
// booknamecon.style.height = '600px';
// booknamecon.style.border = '2px solid red'

// var booknamerow = document.createElement('div');
// booknamerow.classList.add('row');
// booknamerow.style.height = '400px';
// booknamerow.style.border = '2px solid red'


// var booknamecol1 = document.createElement('div');
// booknamecol1.classList.add('col-6');
// booknamecol1.style.height = '200px'
// booknamecol1.style.border = '2px solid red'
// var bkname = document.createElement('h1');
// bkname.innerText = name;
// booknamecol1.append(bkname);

// booknamerow.append(booknamecol1);
// booknamecon.append(booknamerow);
// document.body.append(booknamecon);



var chars = [];

var page = 1;

document.body.style.backgroundColor = '#616bcf';
var charfetch = async () =>{

    var response = await fetch(`https://www.anapioficeandfire.com/api/books?page=${page}&pageSize=5`);
    var character = await response.json();
    chars = character;
    // var search = document.createElement('div');
    //     search.classList.add('container');
    //     search.style.height = '100px';
        
    //     var input = document.createElement('input');
    //     input.classList.add('form-control');
    //     input.setAttribute('id','search');
    //     var butt = document.createElement('button');`
    //     butt.classList.add('btn');
    //     butt.classList.add('btn-primary');
    //     butt.classList.add('m-2');
    //     butt.setAttribute('onClick','search()');
    //     butt.innerText = ('Search');
    //     search.append(input,butt);
    //     document.body.append(search);

        


    chars.forEach( ({name,isbn,numberOfPages,authors,publisher,released,characters}) => {

        


        var booknamecon = document.createElement('div');
        booknamecon.classList.add('container-lg')
        booknamecon.style.height = '750px';
        booknamecon.style.border = '2px solid black'
        booknamecon.style.backgroundColor = 'white'
        var booknamerow = document.createElement('div');


        booknamerow.classList.add('row','m-2','border-bottom' , 'border-danger');
        booknamerow.style.height = '350px';
       

        var booknamecol1 = document.createElement('div');
        booknamecol1.classList.add('col-6','m-1','border-end','border-danger','col-sm-4');
        booknamecol1.style.height = '200px'
        var bkname = document.createElement('h1');
        bkname.innerText = name;
        bkname.style.margin = '5%'
        booknamecol1.append(bkname);
        booknamerow.append(booknamecol1);

        var isbncol2 = document.createElement('div');
        isbncol2.classList.add('col-4','p-5','col-sm-3');
        isbncol2.style.height = '150px'
        
        var isbn = document.createElement('p');
        isbn.style.margin = '0%'
        isbn.innerText = `ISBN : ${Number(isbn)}`;
        var pages = document.createElement('p');
        pages.innerText = `Pages : ${numberOfPages}`;
        isbncol2.append(isbn);
        isbncol2.append(pages);
        booknamerow.append(isbncol2);


        var authname = document.createElement('div');
        authname.classList.add('col-12','p-sm-5','col-sm-4');
        authname.style.height = '200px'
        //authname.style.textAlign = 'center'
        var authh1 = document.createElement('h4');
        var author = document.createElement('p');
        authh1.innerText = 'Author :'
        authh1.style.margin = '0%';
        author.style.margin = '0%';
        author.style.padding = '4%'
        author.innerText=`${authors}`
        authname.append(authh1);
        authname.append(author);
        booknamerow.append(authname);
        
        var booknamerow2 = document.createElement('div');
        booknamerow2.classList.add('row','m-2');
        booknamerow2.style.height = '400px';
        

        var pubname = document.createElement('div');
        pubname.classList.add('col-6','m-1','col-sm-4');
        pubname.style.height = '100px'
        
        var pname = document.createElement('p');
        pname.innerText = `Publisher - ${publisher} `;
        var date = document.createElement('p');
        date.innerText = `Date - ${released} `;
        date.style.margin = '0%'
        pubname.append(pname);
        pubname.append(date);
        booknamerow2.append(pubname);


  
        var cast = document.createElement('div');
        cast.classList.add('col-3','m-1','col-sm-6');
        cast.style.height = '250px'
        var tit = document.createElement('h4');
        tit.innerText = 'Characters : ';
        cast.append(tit);


        
        
        for(var i = 0 ; i < 5; i++){
         fetch(`${characters[i]}`).then((response) =>{
            return response.json();
        }).then((cha)=>{
            var cname = document.createElement('ul');
            var li = document.createElement('li');
            if(cha.name == ''){
                li.innerText = 'No Name';
            }
            else{
                li.innerText = ` ${cha.name} `;
            }
            cname.append(li);
            cast.append(cname);
        })

        }
        
        booknamerow2.append(cast);

        var empdiv = document.createElement('div');
        empdiv.classList.add('container');
        empdiv.style.height = '50px';

        booknamecon.append(booknamerow);
        booknamecon.append(booknamerow2);
        document.body.append(booknamecon,empdiv);
        


    });

    var budiv = document.createElement('div');
    budiv.classList.add('d-flex','justify-content-between');
    var but1 = document.createElement('button');
    but1.innerText = 'prev';
    but1.classList.add('btn-primary','m-2');
    but1.setAttribute('onClick','prevPageFunc()');
    var but2 = document.createElement('button');
    but2.innerText = 'next';
    but2.classList.add('btn-primary', 'm-2');
    but2.setAttribute('onClick','nextPageFunc()');
    budiv.append(but1,but2);
    document.body.append(budiv);



}




const search = () =>{
    const value = document.getElementById('search').value;
    charfetch(value);
    console.log(value)
}

const nextPageFunc = () => {
    page++;
    document.body.innerHtml = '';
    charfetch();
    console.log(page)
  }

const prevPageFunc = () => {
    page--;
    charfetch();
  }

  charfetch();
