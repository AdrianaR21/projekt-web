  document.addEventListener("DOMContentLoaded", function() {
            const form = document.getElementById("myForm");
            form.addEventListener("submit", function(event) {
                event.preventDefault(); // Ndalo formën të dërgohet në mënyrë normale
        
                // Validimi i fushave
                let isValid = true;
                const emri = document.getElementById("emri").value.trim();
                const mbiemri = document.getElementById("mbiemri").value.trim();
                const email = document.getElementById("email").value.trim();
                const gjinia = document.querySelector('input[name="gjinia"]:checked');
                const preferenca1 = document.getElementById("adoleshent").checked;
                const preferenca2 = document.getElementById("mesem").checked;
                const preferenca3 = document.getElementById("rritur").checked;
                const password = document.getElementById("password").value.trim();
                const konfirmoPassword = document.getElementById("konfirmoPassword").value.trim();
                const numriCelularit = document.getElementById("numriCelularit").value.trim();
                const zgjedhja = document.getElementById("zgjedhja").value.trim();
                const file = document.getElementById("file").value;
        
                // Validimi i emrit dhe mbiemrit
                if (emri === "" || mbiemri === "") {
                    isValid = false;
                    alert("Ju lutem plotesoni emrin dhe mbiemrin.");
                }
        
                // Validimi i email-it
                const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailPattern.test(email)) {
                    isValid = false;
                    alert("Email-i nuk është i saktë.");
                }
        
                // Validimi i gjinisë
                if (!gjinia) {
                    isValid = false;
                    alert("Ju lutem zgjidhni një gjini.");
                }
        
                // Validimi i preferencave
                if (!preferenca1 && !preferenca2 && !preferenca3) {
                    isValid = false;
                    alert("Ju lutem zgjidhni të paktën një grup moshe.");
                }
        
                // Validimi i fjalëkalimeve
                if (password !== konfirmoPassword) {
                    isValid = false;
                    alert("Fjalëkalimet nuk përputhen.");
                }
        
                // Validimi i numrit të celularit
                const numriCelularitPattern = /^\d{3}-\d{7}$/;
                if (!numriCelularitPattern.test(numriCelularit)) {
                    isValid = false;
                    alert("Formati i numrit të celularit nuk është i saktë. P.sh. 123-4567890");
                }
        
                // Validimi i zgjedhjes
                if (zgjedhja === "") {
                    isValid = false;
                    alert("Ju lutem zgjidhni një status.");
                }
        
                // Validimi i ngarkimit të file-it
                if (file === "") {
                    isValid = false;
                    alert("Ju lutem ngarkoni një file.");
                }
        
                // Nëse është i vlefshëm, dorëzo formën
                if (isValid) {
                    form.submit();
                }
            });
        });