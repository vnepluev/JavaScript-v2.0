const viewUser = new List(['one', 'two', 'tree']);
const res = viewUser.render();
document.querySelector('#app').append(res);

const viewUser2 = new List2(['one', 'two', 'tree']);
viewUser2.render('User2');

const viewUser3 = new List2(['1', '2', '3']);
viewUser3.render('User3');

const viewUser4 = new List3(['text-center', 'bold', 'text-red'], ['3', '2', '1'])
const res1 = viewUser4.render();
document.querySelector('#app').append(res1);