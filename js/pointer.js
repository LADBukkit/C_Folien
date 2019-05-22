function Address(number, value, type, name) {
    this.number = number;
    this.value = value;
    this.type = type;
    this.name = name;
}

function displayTable(arr) {
    var tbl = document.getElementById("bruch_table");
    tbl.innerHTML = "";

    var header = document.createElement("tr");
    header.innerHTML = "";
    header.innerHTML += "<td>Adresse</td>";
    header.innerHTML += "<td>Wert</td>";
    header.innerHTML += "<td>Typ</td>";
    header.innerHTML += "<td>Name</td>";
    tbl.appendChild(header);

    for(var obj of arr) {
        var row = document.createElement("tr");

        row.innerHTML = "";
        row.innerHTML += "<td>0x" + obj.number.toString(16).toUpperCase() + "</td>";
        row.innerHTML += "<td>" + obj.value + "</td>";
        row.innerHTML += "<td>" + obj.type + "</td>";
        row.innerHTML += "<td>" + obj.name + "</td>";
        tbl.appendChild(row);
    }
}

function stage8(arr, desc, ptr) {
    desc.innerHTML = "Nun ist das Programm zuende.";
    ptr.style.top = 35 + 21.5 * 16;
    var btn = document.getElementById("play_bruch");
    btn.innerHTML = "Abspielen";
}

function stage7(arr, desc, ptr) {
    desc.innerHTML = "Zuletzt wird dem Zeiger auf den bruch zeigt l_br zugewiesen.";
    ptr.style.top = 35 + 21.5 * 11;
    arr[9].value = "0x" + arr[5].number.toString(16).toUpperCase();
    displayTable(arr);
    setTimeout(stage8, 5000, arr, desc, ptr);
}

function stage6(arr, desc, ptr) {
    desc.innerHTML = "Dann wird überprüft, ob der Zeiger auf den bruch zeigt, nicht auf die Speicherzelle 0x00 zeigt. Wenn er nicht draufzeigt, soll der Speicher freigegeben werden.";
    ptr.style.top = 35 + 21.5 * 8;
    setTimeout(stage7, 5000, arr, desc, ptr);
}

function stage5(arr, desc, ptr) {
    desc.innerHTML = "Danach wird dem Attribut nenner des structs Bruch auf das l_br zeigt der Wert von nenner(Parameter) zugewiesen.";
    arr[3].value = "3";
    displayTable(arr);
    ptr.style.top = 35 + 21.5 * 7;
    setTimeout(stage6, 5000, arr, desc, ptr);
}

function stage4(arr, desc, ptr) {
    desc.innerHTML = "Nun wird dem Attribut zaehler des structs Bruch auf das l_br zeigt der Wert von zaehler(Parameter) zugewiesen.";
    arr[4].value = "4";
    displayTable(arr);
    ptr.style.top = 35 + 21.5 * 6;
    setTimeout(stage5, 5000, arr, desc, ptr);
}

function stage3(arr, desc, ptr) {
    desc.innerHTML = "Die Variable l_br wird deklariert und ihr wird ein Zeiger auf einen mit malloc reservierten Speicher zugewiesen.";
    ptr.style.top = 35 + 21.5 * 5;
    arr[5].value = "0x" + arr[4].number.toString(16).toUpperCase();
    arr[5].type = "struct Bruch*";
    arr[5].name = "l_br";
    arr[4].type = "int";
    arr[4].name = "(*l_br).zaehler";
    arr[3].type = "int";
    arr[3].name = "(*l_br).nenner";
    displayTable(arr);
    setTimeout(stage4, 5000, arr, desc, ptr);
}

function stage2(arr, desc, ptr) {
    desc.innerHTML = "Die Methode neuerBruch wird mit einem Zeiger auf br, 4 und 3 aufgerufen.";
    ptr.style.top = 35 + 21.5 * 15;
    arr[8].value = "0x" + arr[9].number.toString(16).toUpperCase();
    arr[8].type = "struct Bruch**"
    arr[8].name = "bruch";
    arr[7].value = "4";
    arr[7].type = "int";
    arr[7].name = "zaehler";
    arr[6].value = "3";
    arr[6].type = "int";
    arr[6].name = "nenner";
    displayTable(arr);
    setTimeout(stage3, 5000, arr, desc, ptr);
}

function stage1(arr, desc, ptr) {
    desc.innerHTML = "Die Variable br wird deklariert und ihr wird der Wert (struct Bruch)0 zugewiesen.";
    ptr.style.top = 35 + 21.5 * 14;
    arr[9].value = "0x00";
    arr[9].type = "struct Bruch*"
    arr[9].name = "br";
    displayTable(arr);
    setTimeout(stage2, 5000, arr, desc, ptr);
}

function play_bruch() {
    var desc = document.getElementById("bruch_desc");
    var ptr = document.getElementById("bruch_pointer");
    var btn = document.getElementById("play_bruch");
    if(btn.innerHTML != "Abspielen") {
        return;
    }
    btn.innerHTML = "...Warten...";

    var start = Math.floor(Math.random() * 100) + 100;
    var arr = [];
    for(var i = 0; i < 10; i++) {
        arr[9 - i] = new Address(start + i, Math.floor(Math.random() * 1024), "", "");
    }

    desc.innerHTML = "Das Programm startet. Unser Adressraum fängt bei 0x" + start.toString(16).toUpperCase() + " an.<br>In den Speicherzellen ist momentan nur Speichermüll.";
    ptr.style.top = 35 + 21.5 * 13;
    displayTable(arr);
    setTimeout(stage1, 5000, arr, desc, ptr);
}
