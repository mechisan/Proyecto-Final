"use strict";
const url = 'https://64126439f9fe8122ae231390.mockapi.io/parkingsys/reclamos';


async function postJson(e){
    e.preventDefault();
    let reclamo = document.querySelector("#tipo-reclamo").value;
    let name = document.querySelector("#namefull").value;
    let email = document.querySelector("#mail").value;
    let phone = document.querySelector("#aTelefono").value;
    let comment = document.querySelector("#description").value;
    let cliente = {
        "reclamo" : reclamo,
        "name" : name,
        "email" : email,
        "telefono" : phone,
        "comment" : comment
    }

    try {
        let response = await fetch(url, {
            "method" : "POST",
            "headers": {"Content-type": "application/json" },
            "body": JSON.stringify(cliente)
        });
        if (response.status === 201) {
            console.log("posted");
        }
    } catch (error) {
        console.log(error);
    }

    postedMsg();
    obtenerDatos();
}

async function obtenerDatos() {
    try {
        let res = await fetch(url); // GET url
        let json = await res.json(); // texto json a objeto
        console.log(json);

    } catch (error) {
        console.log(error);
    }

}

function postedMsg() {
    document.getElementById("enviado").classList.toggle("hidden");
}


document.querySelector("#reclamo").addEventListener("click", postJson);