document.addEventListener("DOMContentLoaded", function() {
document.getElementById("details")
.addEventListener("submit",function(event)
{
    event.preventDefault();
    let Name=document.getElementById("name").value;
    let Email=document.getElementById("mail").value;
    let Phone=document.getElementById("phone").value;
    let Age=document.getElementById("age").value;
    let Address=document.getElementById("address").value;

    const selectedGender = document.querySelector('input[name="gender"]:checked');
    let gender = selectedGender ? selectedGender.value : 'Not selected';

    let documents = [];
    document.querySelectorAll('input[name="document"]:checked').forEach(function(item) {
        documents.push(item.value);
    });

    document.getElementById("p1").innerText="Name: "+Name;
    document.getElementById("p2").innerText="Email: "+Email;
    document.getElementById("p3").innerText="Mobile: "+Phone;
    document.getElementById("p4").innerText="Age: "+Age;
    document.getElementById("p5").innerText="Gender: "+gender;
    document.getElementById("p6").innerText="Address: "+Address;

    const docsText = "Documents: "+(documents.length ? documents.join(', ') : 'None');
    const p7 = document.getElementById("p7");
    if (p7) {
        p7.innerText = docsText;
    } else {
        const detailsSection = document.getElementById("p6");
        if (detailsSection) {
            const newP = document.createElement("p");
            newP.id = "p7";
            newP.innerText = docsText;
            detailsSection.insertAdjacentElement('afterend', newP);
        }
    }

    let Image=document.getElementById("image").files[0];
    if(Image)
    {
        let read = new FileReader();
        read.onload = function(e)
        {
            document.getElementById("dp").src=e.target.result;
        };
        read.readAsDataURL(Image);
    }
});
});