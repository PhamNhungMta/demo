var lists = [
        {manufacturerId:"19978451", addressline2:"Building 600", zip:"94530", phone:"650-555-0140", addressline1:"399 San Pablo Ave", fax:"408-555-0143", email:"www.allsushi@example.com", name:"All Sushi", state:"CA", city:"Cleveland", rep:"Teresa Ho"},
        {manufacturerId:"19971223", addressline2:"Building C5", zip:"94530", phone:"408-555-0183", addressline1:"5960 Inglewood Pkwy", fax:"408-555-0184", email:"www.billbank@example.com", name:"Bills Bank and Sons", state:"WI", city:"Pleasantville", rep:"Frank Smith"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
        {manufacturerId:"19985590", addressline2:"Building 14", zip:"95051", phone:"206-555-0178", addressline1:"4000 Cormorant Circle", fax:"206-555-0179", email:"ann.jones@example.com", name:"Birders United", state:"OR", city:"Burlington", rep:"Ann Jones"},
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
        html+="<tr>";
        html+="<td>"+lists[i].manufacturerId+"</td>";
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
function init() {
    
}
