import { get2000Date } from "./data";
import { eletrics } from './eledata';
new WOW().init();
let tbody = $('#table-tbody');
Object.keys(eletrics).forEach(ele => {
    let tr = document.createElement('tr');
    let text = `<td>${ele}</td><td>${eletrics[ele].name}</td><td>${eletrics[ele].seekId}</td>`;
    tr.innerHTML = text;
    tbody.append(tr);
    if (ele.includes('开关')) {
        tr.className = 'success';
    } else if (ele.includes('插座')) {
        tr.className = 'info';
    } else {
        tr.className = '';
    }
});
let data2000 = get2000Date();
for (const ele of data2000) {
    let tr = document.createElement('tr');
    let text = `<td>${ele}</td><td>${ele.name}</td><td>${ele.seekId}</td>`;
    tr.innerHTML = text;
    tbody.append(tr);
    if (ele.name.includes('开关')) {
        tr.className = 'success';
    } else if (ele.name.includes('插座')) {
        tr.className = 'info';
    } else {
        tr.className = '';
    }

}



