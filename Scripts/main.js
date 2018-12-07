window.onload = function() {
    document.getElementById("potvrda").addEventListener("click", function() {
        
        var uredu = true;

        var podaci = [];

        var ime = document.querySelector("#firstName").value.trim();
        var prezime = document.querySelector("#lastName").value.trim();
        var datumRodjenja = document.querySelector("#birDate").value.trim();
		
        var imeError = document.querySelector("#fnError");
        var prezimeError = document.querySelector("#lnError");
        var datumError = document.querySelector("#birDateError");

        var reDatRodjenja =  /^(19[\d]{2}|20(0[\d]|1[0-8]))\-(0[1-9]|1[012])\-(0[1-9]|[12][\d]|3[01])$/;
        var reIme = /^[A-Z][a-z]{2,11}$/;
        var rePrezime = /^[A-Z][a-z]{2,15}$/;
 
        if(ime == "") {
           imeError.innerHTML = "Молим вас попуните поље име"; 
           uredu = false;  
        } else if(!reIme.test(ime)) {
            imeError.innerHTML = "Погрешан формат имена";
            uredu = false;
        } else {
            podaci.push(ime);
            imeError.innerHTML = "";   
        }

        if(prezime == "") {
            prezimeError.innerHTML = "Молим вас попуните поље презиме"; 
            uredu = false;  
         } else if(!rePrezime.test(prezime)) {
             prezimeError.innerHTML = "Погрешан формат презимена";
             uredu = false;
            } else {
             podaci.push(prezime);
             prezimeError.innerHTML = "";   
         }

         if(datumRodjenja != "") {
            if(reDatRodjenja.test(datumRodjenja)) {
               datumError.innerHTML = "";
               podaci.push(datumRodjenja);        
            } else {
                uredu = false;
                datumError.innerHTML = "Унета недозвољена година";
            }
         } else {
             datumError.innerHTML = "";
         }
		 
         var chBox = document.getElementsByName("pol");

         var izabrano = false;

         for(var i = 0; i < chBox.length; i++) {
             if(chBox[i].checked) {
                 izabrano = true;
				 var pol=chBox[i].value;
                 break;
             }
         }

         if(izabrano) {
            document.getElementById("polError").innerHTML = "";
			
         } else {
            uredu = false;
            document.getElementById("polError").innerHTML = "Одаберите пол";
         }

         if(document.querySelector("#slazemSe").checked) {
            document.getElementById("slazemSeError").innerHTML = "";
        } else {
            uredu = false;
            document.getElementById("slazemSeError").innerHTML = "Нисте се сложили са условима регистрације";
        }
        if(uredu) {
            var output = "";
            for(var i =0; i < podaci.length; i++) {
                output += "<p class='podaci'>" + podaci[i] + "</p>";
            }
            document.querySelector("#feedback").innerHTML = output;
			if(pol=="male"){
			document.querySelector("#avatar").innerHTML="<img src='img/muskarac.jpg' alt='muskarac'>";
			document.querySelector(".wlc").innerHTML = "<p class='wlc'>Добродошли !</p>";
			
		} else { 
		if(pol=="female"){
			document.querySelector("#avatar").innerHTML="<img src='img/zena.jpg' alt='zena'>";
			document.querySelector(".wlc").innerHTML = "<p class='wlc'>Добродошли !</p>";}
		else {document.querySelector("#avatar").innerHTML=""}}
        } else {
            document.querySelector("#feedback").innerHTML = "";
        }
		
    });
	
}

		
