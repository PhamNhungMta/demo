var lists = [
        {manufacturerId:"19978451", addressline2:"Building 600", zip:"94530", phone:"650-555-0140", addressline1:"399 San Pablo Ave", fax:"408-555-0143", email:"www.allsushi@example.com", name:"All Sushi", state:"CA", city:"Cleveland", rep:"Teresa Ho"},
        {manufacturerId:"19971223", addressline2:"Building C5", zip:"94530", phone:"408-555-0183", addressline1:"5960 Inglewood Pkwy", fax:"408-555-0184", email:"www.billbank@example.com", name:"Bills Bank and Sons", state:"WI", city:"Pleasantville", rep:"Frank Smith"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985588", addressline2:"Building 11", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95058", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985593", addressline2:"Building 14", zip:"95055", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"506-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"}];


function showList(){
    var html = "<table border='1|1'>";
    for (var i = 0; i < lists.length; i++) {
        html += "<tr onclick = editRow(" + i + ")>";
        html += "<td> <a href=''>" + lists[i].manufacturerId + "</a></td>";
        html+="<td>"+lists[i].addressline2+"</td>";
        html+="<td>"+lists[i].zip+"</td>";
        html+="<td>"+lists[i].phone+"</td>";
        html+="<td>"+lists[i].addressline1+"</td>";
        html+="<td>"+lists[i].fax+"</td>";
        html+="<td>"+lists[i].email+"</td>";
        html+="<td>"+lists[i].name+"</td>";
        html+="<td>"+lists[i].state+"</td>";
        html+="<td>"+lists[i].city+"</td>";
        html+="<td>"+lists[i].rep+"</td>";
        html+="</tr>";

    }
    html+="</table>";
    document.getElementById("content").innerHTML = html;
}
showList();
var click = 0;
var click_new = 0;
var x = 0;
function sort(id) {
    click++;
    if (x != id && x!=0){
        click_new = 1;
        document.getElementById(x).className = "header";
    }
    else {
        click_new = click;
    }
    if (click_new % 2 != 0) {
        if (id != 1) {
            document.getElementById(id).className = "headerSortUp";
        }
        
        sortManufacturerId_asc(id);
    }
    if (click_new % 2 == 0 && click_new != 0) {
        document.getElementById(id).className = "headerSortDown";
        sortManufacturerId_desc(id);
    }
    x = id;
    click_new = click;
}
sort(1);
function sortManufacturerId_asc(id) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1) ; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[id-1];
            y = rows[i + 1].getElementsByTagName("TD")[id-1];
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function sortManufacturerId_desc(id) {
    var table, rows, switching, i, x, y, shouldSwitch;
    table = document.getElementById("myTable");
    switching = true;
    while (switching) {
        switching = false;
        rows = table.getElementsByTagName("TR");
        for (i = 1; i < (rows.length - 1) ; i++) {
            shouldSwitch = false;
            x = rows[i].getElementsByTagName("TD")[id-1];
            y = rows[i + 1].getElementsByTagName("TD")[id-1];
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                shouldSwitch = true;
                break;
            }
        }
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
        }
    }
}

function editRow(i) {
    window.location.href = "http://localhost:65019/editor.html";
    alert(i);
}