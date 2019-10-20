    // query selector
    let divJS = document.querySelector('#javascriptDomMethods');
{
    let selectLi = document.querySelector('.list');

    divJS.innerHTML = `<p class="dom">result of selecting selector by class .list using <mark>1 - querySelector()</mark> method</p>` + selectLi.innerHTML;
}

    // query selector all
{
    let allImg = document.querySelectorAll('img');

    let pQSA = document.createElement('p');
    pQSA.className = 'dom';
    pQSA.innerHTML = `this is the using of methods: <mark>2 - querySelectorsAll()</mark> - select all element into array by selectors, class, id etc 
    <br><mark>3 - appendChild()</mark> - inserting to our div new selectors or other data
    <br><mark>4 - createElement()</mark> - creating selector in javascript for inserting it to DOM`;

    divJS.appendChild(pQSA);
    allImg.forEach((img) => {
        let dumpImg = document.createElement('img');
        dumpImg.style.padding = '10px';
        dumpImg.style.display = 'block';
        dumpImg.src = img.src;
        divJS.appendChild(dumpImg);
    });

    console.log(allImg);
}

    // add event listener
{



}
