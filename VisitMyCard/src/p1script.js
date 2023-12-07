

function toggleButtons(buttonId, divId, divId2) {
    const buttons = document.querySelectorAll('.patternButton');
    const divs = document.querySelectorAll('div[id^="pt"]');
    const clickedButton = document.getElementById(buttonId);
    const associatedDiv = document.getElementById(divId);
    const associatedDiv2 = document.getElementById(divId2);

    divs.forEach((div) => div.style.display = 'none');
    buttons.forEach((div) => div.classList.remove('highlighted'));

    associatedDiv.style.display = 'block';
    associatedDiv2.style.display = 'block';
    clickedButton.classList.add('highlighted');
}

function changeColor(buttonId, color) {
    const targetDivs = document.querySelectorAll(".patt");
    const buttons = document.querySelectorAll('.colorButton');
    const clickedButton = document.getElementById(buttonId);

    buttons.forEach((div) => div.classList.remove('highlighted'));
    clickedButton.classList.add('highlighted');
    
    targetDivs.forEach(function(targetDiv) {
    targetDiv.style.backgroundColor = color;
    });
}

function updateText(info, textId1, textId2, textId3, textId4, textId5, textId6, textId7, textId8) {
    const textDisplay1 = document.getElementById(textId1);
    textDisplay1.textContent = info;

    const textDisplay2 = document.getElementById(textId2);
    textDisplay2.textContent = info;

    const textDisplay3 = document.getElementById(textId3);
    textDisplay3.textContent = info;

    const textDisplay4 = document.getElementById(textId4);
    textDisplay4.textContent = info;

    const textDisplay5 = document.getElementById(textId5);
    textDisplay5.textContent = info;

    const textDisplay6 = document.getElementById(textId6);
    textDisplay6.textContent = info;

    const textDisplay7 = document.getElementById(textId7);
    textDisplay7.textContent = info;

    const textDisplay8 = document.getElementById(textId8);
    textDisplay8.textContent = info;
}

function fontChange(font) {
    const selectedFont = font.value;

    if (selectedFont == "TimesNewRoman") {
        timesNewRomanFunction();
    } else if (selectedFont == "Arial") {
        arialFunction();
    } else if (selectedFont == "Cambria") {
        cambriaFunction();
    } else if (selectedFont == "Calibri") {
        calibriFunction();
    } else if (selectedFont == "Trebuchet") {
        trebuchetFunction();
    }
}
function timesNewRomanFunction() {
    const info = document.querySelectorAll(".font");

    info.forEach(function (div) {
        div.classList.remove("fontArial");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCambria");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCalibri");
    });
    info.forEach(function (div) {
        div.classList.remove("fontTrebuchet");
    });

    info.forEach(function (div) {
        div.classList.add("fontTimesNewRoman");
    });
}
function arialFunction() {
    const info = document.querySelectorAll(".font");

    info.forEach(function (div) {
        div.classList.remove("fontTimesNewRoman");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCambria");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCalibri");
    });
    info.forEach(function (div) {
        div.classList.remove("fontTrebuchet");
    });

    info.forEach(function (div) {
        div.classList.add("fontArial");
    });
}
function cambriaFunction() {
    const info = document.querySelectorAll(".font");

    info.forEach(function (div) {
        div.classList.remove("fontTimesNewRoman");
    });
    info.forEach(function (div) {
        div.classList.remove("fontArial");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCalibri");
    });
    info.forEach(function (div) {
        div.classList.remove("fontTrebuchet");
    });

    info.forEach(function (div) {
        div.classList.add("fontCambria");
    });
}
function calibriFunction() {
    const info = document.querySelectorAll(".font");

    info.forEach(function (div) {
        div.classList.remove("fontTimesNewRoman");
    });
    info.forEach(function (div) {
        div.classList.remove("fontArial");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCambria");
    });
    info.forEach(function (div) {
        div.classList.remove("fontTrebuchet");
    });

    info.forEach(function (div) {
        div.classList.add("fontCalibri");
    });
}
function trebuchetFunction() {
    const info = document.querySelectorAll(".font");

    info.forEach(function (div) {
        div.classList.remove("fontTimesNewRoman");
    });
    info.forEach(function (div) {
        div.classList.remove("fontArial");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCambria");
    });
    info.forEach(function (div) {
        div.classList.remove("fontCalibri");
    });

    info.forEach(function (div) {
        div.classList.add("fontTrebuchet");
    });
}

function handleFileSelect(event) {
    const fileInput = event.target;
    const selectedFile = fileInput.files[0];

    if (selectedFile && selectedFile.type.startsWith('image/')) {
        // Check if the selected file is an image
        const imgElement = document.createElement("img");
        imgElement.src = URL.createObjectURL(selectedFile);

        // Get the image containers
        const imageContainer1 = document.getElementById("pngPlace1");
        const imageContainer2 = document.getElementById("pngPlace2");
        const imageContainer3 = document.getElementById("pngPlace3");
        const imageContainer4 = document.getElementById("pngPlace4");
        const imageContainer5 = document.getElementById("pngPlace5");
        const imageContainer6 = document.getElementById("pngPlace6");
        const imageContainer7 = document.getElementById("pngPlace7");
        const imageContainer8 = document.getElementById("pngPlace8");

        // Clear the previous content of the image containers
        imageContainer1.innerHTML = '';
        imageContainer2.innerHTML = '';
        imageContainer3.innerHTML = '';
        imageContainer4.innerHTML = '';
        imageContainer5.innerHTML = '';
        imageContainer6.innerHTML = '';
        imageContainer7.innerHTML = '';
        imageContainer8.innerHTML = '';

        // Append the image to both image containers
        imageContainer1.appendChild(imgElement.cloneNode(true));
        imageContainer2.appendChild(imgElement.cloneNode(true));
        imageContainer3.appendChild(imgElement.cloneNode(true));
        imageContainer4.appendChild(imgElement.cloneNode(true));
        imageContainer5.appendChild(imgElement.cloneNode(true));
        imageContainer6.appendChild(imgElement.cloneNode(true));
        imageContainer7.appendChild(imgElement.cloneNode(true));
        imageContainer8.appendChild(imgElement.cloneNode(true));
    } else {
        // Handle cases where the selected file is not an image
        alert('Please select a valid PNG image.');
    }
}

function downloadDivs() {
    // Create a new instance of JSZip
    const zip = new JSZip();

    // Use html2canvas to capture the content of each div
    html2canvas(document.getElementById('frontCard')).then(canvas1 => {
        html2canvas(document.getElementById('backCard')).then(canvas2 => {
            // Convert the canvases to data URLs
            const dataUrl1 = canvas1.toDataURL('image/png');
            const dataUrl2 = canvas2.toDataURL('image/png');

            // Add the PNGs to the zip file
            zip.file('CardBack.png', dataUrl1.split(',')[1], { base64: true });
            zip.file('CardFront.png', dataUrl2.split(',')[1], { base64: true });

            // Generate the zip file
            zip.generateAsync({ type: 'blob' }).then(blob => {
                // Create a temporary link element
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = 'MyCard.zip';

                // Append the link to the body
                document.body.appendChild(link);

                // Trigger a click on the link to start the download
                link.click();

                // Remove the link from the DOM
                document.body.removeChild(link);
            });
        });
    });
}

function clearText() {
    document.getElementById("t1").value = "";
    document.getElementById("t2").value = "";
    document.getElementById("t3").value = "";
    document.getElementById("t4").value = "";
    document.getElementById("t5").value = "";
    document.getElementById("t6").value = "";
    document.getElementById("t7").value = "";

    document.getElementById("company-1").textContent="";
    document.getElementById("company-2").textContent="";
    document.getElementById("company-3").textContent="";
    document.getElementById("company-4").textContent="";
    document.getElementById("company-5").textContent="";
    document.getElementById("company-6").textContent="";
    document.getElementById("company-7").textContent="";
    document.getElementById("company-8").textContent="";

    document.getElementById("name-1").textContent="";
    document.getElementById("name-2").textContent="";
    document.getElementById("name-3").textContent="";
    document.getElementById("name-4").textContent="";
    document.getElementById("name-5").textContent="";
    document.getElementById("name-6").textContent="";
    document.getElementById("name-7").textContent="";
    document.getElementById("name-8").textContent="";

    document.getElementById("job-1").textContent="";
    document.getElementById("job-2").textContent="";
    document.getElementById("job-3").textContent="";
    document.getElementById("job-4").textContent="";
    document.getElementById("job-5").textContent="";
    document.getElementById("job-6").textContent="";
    document.getElementById("job-7").textContent="";
    document.getElementById("job-8").textContent="";

    document.getElementById("phone-1").textContent="";
    document.getElementById("phone-2").textContent="";
    document.getElementById("phone-3").textContent="";
    document.getElementById("phone-4").textContent="";
    document.getElementById("phone-5").textContent="";
    document.getElementById("phone-6").textContent="";
    document.getElementById("phone-7").textContent="";
    document.getElementById("phone-8").textContent="";

    document.getElementById("email-1").textContent="";
    document.getElementById("email-2").textContent="";
    document.getElementById("email-3").textContent="";
    document.getElementById("email-4").textContent="";
    document.getElementById("email-5").textContent="";
    document.getElementById("email-6").textContent="";
    document.getElementById("email-7").textContent="";
    document.getElementById("email-8").textContent="";

    document.getElementById("address-1").textContent="";
    document.getElementById("address-2").textContent="";
    document.getElementById("address-3").textContent="";
    document.getElementById("address-4").textContent="";
    document.getElementById("address-5").textContent="";
    document.getElementById("address-6").textContent="";
    document.getElementById("address-7").textContent="";
    document.getElementById("address-8").textContent="";

    document.getElementById("social-1").textContent="";
    document.getElementById("social-2").textContent="";
    document.getElementById("social-3").textContent="";
    document.getElementById("social-4").textContent="";
    document.getElementById("social-5").textContent="";
    document.getElementById("social-6").textContent="";
    document.getElementById("social-7").textContent="";
    document.getElementById("social-8").textContent="";

    const imageContainer1 = document.getElementById("pngPlace1");
    const imageContainer2 = document.getElementById("pngPlace2");
    const imageContainer3 = document.getElementById("pngPlace3");
    const imageContainer4 = document.getElementById("pngPlace4");
    const imageContainer5 = document.getElementById("pngPlace5");
    const imageContainer6 = document.getElementById("pngPlace6");
    const imageContainer7 = document.getElementById("pngPlace7");
    const imageContainer8 = document.getElementById("pngPlace8");

    // Clear the previous content of the image containers
    imageContainer1.innerHTML = '';
    imageContainer2.innerHTML = '';
    imageContainer3.innerHTML = '';
    imageContainer4.innerHTML = '';
    imageContainer5.innerHTML = '';
    imageContainer6.innerHTML = '';
    imageContainer7.innerHTML = '';
    imageContainer8.innerHTML = '';
}

function helpMe (){
    var button = document.getElementById('helpButton');
    var buttonx = document.getElementById('helpButtonExit');
    var hiddenDiv = document.getElementById('help');
        
    button.style.display = 'none';
    buttonx.style.display = 'block';
    hiddenDiv.style.display = 'block';

    setTimeout(() => {
        hiddenDiv.classList.remove('fade-in');
    }, 1);
}
function helpMeExit (){
    var button = document.getElementById('helpButton');
    var buttonx = document.getElementById('helpButtonExit');
    var hiddenDiv = document.getElementById('help');
        
    button.style.display = 'block';
    buttonx.style.display = 'none';
    hiddenDiv.classList.add('fade-in');

    setTimeout(() => {
        hiddenDiv.style.display = 'none';
    }, 100);
}