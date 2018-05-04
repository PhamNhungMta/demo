var url_string = window.location.href;
	    var url = new URL(url_string);
	    var id = url.searchParams.get("id");
	    var x = document.getElementById("content");
	    var y = document.getElementById("content2");
	    if (id != null) {
	    	y.style.display = "none";
	    	for(var i=0;i<lists.length;i++) {
	    		if (id == lists[i].manufacturerId) {
	    			document.getElementById("menufactureId").value = lists[i].manufacturerId;
	    			document.getElementById("addressline2").value = lists[i].addressline2;
	    			document.getElementById("zip").value = lists[i].zip;
	    			document.getElementById("phone").value = lists[i].phone;
	    			document.getElementById("addressline1").value = lists[i].addressline1;
	    			document.getElementById("fax").value = lists[i].fax;
	    			document.getElementById("email").value = lists[i].email;
	    			document.getElementById("name").value = lists[i].name;
	    			document.getElementById("state").value = lists[i].state;
	    			document.getElementById("city").value = lists[i].city;
	    			document.getElementById("rep").value = lists[i].rep;
	    		}
	    	}
	    } else {
	    	x.style.display = "none";
	    }
	    function validate(){
			var menufactureId = document.getElementById("menufactureId").value;
			var addressline2 = document.getElementById("addressline2").value;
			var zip = document.getElementById("zip").value;
			var phone = document.getElementById("phone").value;
			var addressline1 = document.getElementById("addressline1").value;
			var fax = document.getElementById("fax").value;
			var email = document.getElementById("email").value;
			var name = document.getElementById("name").value;
			var state = document.getElementById("state").value;
			var city = document.getElementById("city").value;
			var rep = document.getElementById("rep").value;
			if (menufactureId == "") {
				document.getElementById("error1").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error1").innerHTML = "";
			}
			if (addressline2 == "") {
				document.getElementById("error2").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error2").innerHTML = "";
			}
			if (zip == "") {
				document.getElementById("error3").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error3").innerHTML = "";
			}
			if (phone == "") {
				document.getElementById("error4").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error4").innerHTML = "";
			}
			if (addressline1 == "") {
				document.getElementById("error5").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error5").innerHTML = "";
			}
			if (fax == "") {
				document.getElementById("error6").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error6").innerHTML = "";
			}
			if (email == "") {
				document.getElementById("error7").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error7").innerHTML = "";
			}
			if (name == "") {
				document.getElementById("error8").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error8").innerHTML = "";
			}
			if (state == "") {
				document.getElementById("error9").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error9").innerHTML = "";
			}
			if (city == "") {
				document.getElementById("error10").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error10").innerHTML = "";
			}
			if (rep == "") {
				document.getElementById("error11").innerHTML = "**Please fill in here";

			} else {
				document.getElementById("error11").innerHTML = "";
			}
			if (menufactureId == "" || addressline1 == "" || addressline2 == "" || phone == "" || zip == "" || fax == "" ||
				 email == "" || name == "" || state == "" || city == "" || rep == "") {
				return false;
			} else {
				return true;
			}
		}
	    function update1(){
	    	if (validate()) {
				var menufactureId = document.getElementById("menufactureId").value;
				var addressline2 = document.getElementById("addressline2").value;
				var zip = document.getElementById("zip").value;
				var phone = document.getElementById("phone").value;
				var addressline1 = document.getElementById("addressline1").value;
				var fax = document.getElementById("fax").value;
				var email = document.getElementById("email").value;
				var name = document.getElementById("name").value;
				var state = document.getElementById("state").value;
				var city = document.getElementById("city").value;
				var rep = document.getElementById("rep").value;
				update(menufactureId,addressline2,zip,phone,addressline1,fax,email,name,state,city,rep);
			}
		}
		function add1(){
			if (validate()) {
				var menufactureId = document.getElementById("menufactureId").value;
				var addressline2 = document.getElementById("addressline2").value;
				var zip = document.getElementById("zip").value;
				var phone = document.getElementById("phone").value;
				var addressline1 = document.getElementById("addressline1").value;
				var fax = document.getElementById("fax").value;
				var email = document.getElementById("email").value;
				var name = document.getElementById("name").value;
				var state = document.getElementById("state").value;
				var city = document.getElementById("city").value;
				var rep = document.getElementById("rep").value;
				add(menufactureId,addressline2,zip,phone,addressline1,fax,email,name,state,city,rep);
			}
		}
		function delete1(){
		    del(document.getElementById("menufactureId").value);
		}
		function check(){	
				var menufactureId = document.getElementById("menufactureId").value;
				var addressline2 = document.getElementById("addressline2").value;
				var zip = document.getElementById("zip").value;
				var phone = document.getElementById("phone").value;
				var addressline1 = document.getElementById("addressline1").value;
				var fax = document.getElementById("fax").value;
				var email = document.getElementById("email").value;
				var name = document.getElementById("name").value;
				var state = document.getElementById("state").value;
				var city = document.getElementById("city").value;
				var rep = document.getElementById("rep").value;
				if (menufactureId == "" || addressline1 == "" || addressline2 == "" || phone == "" || zip == "" || fax == "" || email == "" || name == "" || state == "" || city == "" || rep == "") {
					document.getElementById("btn").disabled = true;
				} else {
					document.getElementById("btn").disabled = false;
				}
		}
function add(manufacturerId,addressline2,zip,phone,addressline1,fax,email,name,state,city,rep){
    var customer = new Object();
    customer.manufacturerId = manufacturerId;
    customer.addressline1 = addressline1;
    customer.addressline2 = addressline2;
    customer.zip = zip;
    customer.phone = phone;
    customer.fax = fax;
    customer.email = email;
    customer.name = name;
    customer.state = state;
    customer.city = city;
    customer.rep = rep;
    var lists = JSON.parse(localStorage.getItem("array"));
    lists[lists.length] = customer;
    localStorage.setItem("array", JSON.stringify(lists));
    var lists = JSON.parse(localStorage.getItem("array"));
    document.location.href = "index.html";
    changePage(1);
}

function del(manufacturerId){
    var lists = JSON.parse(localStorage.getItem("array"));
    var r = confirm("Xac nhan xoa phan tu co id = "+manufacturerId+"!");
    if (r == true) {
        for (var i = 0; i <lists.length ; i++) {
        if (lists[i].manufacturerId == manufacturerId) {
            lists.splice(i, 1);
            }
        }
    } 
    localStorage.setItem("array", JSON.stringify(lists));
    document.location.href = "index.html";
    changePage(1);
}
function update(manufacturerId,addressline2,zip,phone,addressline1,fax,email,name,state,city,rep){
    var lists = JSON.parse(localStorage.getItem("array"));
    for (var i = 0; i <lists.length ; i++) {
        if (lists[i].manufacturerId == manufacturerId) {
            lists[i].addressline1 = addressline1;
            lists[i].addressline2 = addressline2;
            lists[i].zip = zip;
            lists[i].phone = phone;
            lists[i].fax = fax;
            lists[i].email = email;
            lists[i].name = name;
            lists[i].state = state;
            lists[i].city = city;
            lists[i].rep = rep;
            }
        }  
    localStorage.setItem("array", JSON.stringify(lists)); 
    document.location.href = "index.html"; 
    changePage(1);  
}