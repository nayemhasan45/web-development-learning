var courses = ['html', 'css', 'bootstrap', 'tailwind-css', 'js', 'variabls', 'loop', 'arrays'];
// method-1
/* for(var i=0; i<courses.length; i++){
    console.log(courses[i]);
} */

// method-2

/* for(i of courses){
    console.log(i);
} */

// for loop
/* for(var i =30; i<=86; i++ ){
    console.log(i);
    if(i>=44){
        break;
    }
} */

var book1Price = [123, 129, 200, 150, 120, 300, 400, 270] ;
for(var i=0; i<book1Price.length; i++){
    // var book2Price = book1Price[i];
    if(book1Price[i]>=140){
        continue;
    }
    console.log(book1Price[i]);
}