let d = document.getElementById('btn');
// the current cutton will get distroyed and two new buttons will get added
// i want it to work continuesly
d.addEventListener('click', function(){
    let btn1 = document.createElement('button');
    let btn2 = document.createElement('button');
    btn1.innerHTML = 'Double';
    btn2.innerHTML = 'Double';
    btn1.id = 'btn';
    btn2.id = 'btn';
    d.replaceWith(btn1, btn2);
}
);