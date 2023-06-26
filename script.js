function dosomethingcool() {
  // alert ('WARNING!') ;
  // var x = 'WARNING (but in a var)';
  var x = Math.random() * 10;
  var y = Math.floor(x);

  alert(y);
  var name = document.querySelector('#name').value;
  // concatenation 
  alert(name + ' Is cool');
  var div = document.querySelector('.child');
  var name = document.querySelector('#name').value;
  var p = document.createElement ('p')
  p.textcontent = name;
  div.appendChild(p);
}

