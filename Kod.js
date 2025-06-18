function submitform()   {
    var imie = document.getElementById('imie').value;
    var nazwisko = document.getElementById('nazwisko').value;
    var email  = document.getElementById('email').value;
 
    if (imie === "" || nazwisko === "" || email === "") {
        alert("wszystkie pola muszą być wypełnione!");
    }   else    {
        alert("Imię: " + imie + "\nNazwisko: " + nazwisko + "\nWysłano formularz na email: " + email);
    }
 
}