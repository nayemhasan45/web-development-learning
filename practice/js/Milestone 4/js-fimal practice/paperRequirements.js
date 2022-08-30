function paperRequirements(book1Quantity,book2Quantity,book3Quantity){
    const perBook1Page=100;    
    const perBook2Page=200;    
    const perBook3Page=300;
    const book1page = perBook1Page*book1Quantity;
    const book2page = perBook2Page*book2Quantity;
    const book3page = perBook3Page*book3Quantity;
    const totalPage = book1page+book2page+book3page;
    return totalPage;    
}

const input = paperRequirements(1,1,1);
console.log(input,'pages Total :)');