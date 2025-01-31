function addEduField() {
    const educationFields = document.getElementById('educationFields');
    const newField = `
        <div class="row">
            <div class="education-group col-12 mb-4 d-flex align-items-center">
                <div class="col-12 mb-3 ">
                    <input type="text" class="form-control me-2 mb-2" placeholder="Institution Name" required>
                    <input type="text" class="form-control me-2 mb-2" placeholder="Course duration" required>
                    <input type="text" class="form-control me-2 mb-2" placeholder="Grade/Percentage" required>
                </div>
                <div class="col-4 ms-3 mb-2">
                    <button type="button" class="btn btn-sm btn-danger remove-btn" onclick="remEduField(this)">Remove</button>
                </div>
            </div>                
        </div>`;
    educationFields.insertAdjacentHTML('beforeend', newField);
}
function remEduField(button) {
    const educationGroup = button.closest('.education-group');
    
    if (educationGroup) {
        educationGroup.remove();
    }        
}    

function addExpField() {
    const experienceFields = document.getElementById('experienceFields');
    const newField = `
        <div class="row">
            <div class="experience-group mb-3 col-12 mb-4 d-flex align-items-center">
                <div class="col-12 mb-3 ">
                    <input type="text" class="form-control mb-2" placeholder="Company Name" required>
                    <input type="text" class="form-control mb-2" placeholder="Duration" required>
                    <input type="text" class="form-control mb-2" placeholder="Position" required>
                </div>
                <div class="col-4 ms-3 mb-2">
                    <button type="button" class="btn btn-sm btn-danger remove-btn" onclick="remExpField(this)">Remove</button>
                </div>
                
            </div>
        </div>`;
    experienceFields.insertAdjacentHTML('beforeend', newField);
}
function remExpField(button) {
    const expGroup = button.closest('.experience-group');        
    if (expGroup) {
        expGroup.remove();
    }        
}    


function addSkill() {
    const skillsSection= document.getElementById('skills-section');
    const newSkill= `
            <div class="skills-group row mb-3">
                <div class=" col-12 d-flex align-items-center">
                    <div class="col-12">
                        <input type="text" class="form-control form-control me-5" placeholder="Technical skill" required>
                    </div>
                    <div class="col-4 ms-3 mb-2">
                        <button type="button" class="btn btn-sm btn-danger remove-btn" onclick="remSklField(this)">Remove</button>
                    </div>
                </div>
                
            </div>`;
    skillsSection.insertAdjacentHTML('beforeend', newSkill);
}
function remSklField(button) {
    const skillGroup = button.closest('.skills-group');        
    if (skillGroup) {
        skillGroup.remove();
    }        
}


function addHobby() {
    const hobbiesSection= document.getElementById('hobbies-section');
    const newHobby= `
            <div class="hobbies-group row mb-3">
                <div class="col-12 d-flex align-items-center">
                    <div class="col-12">
                        <input type="text" class="form-control form-control-sm" placeholder="hobby" required>
                    </div>
                    <div class="col-4 ms-3 mb-2">
                        <button type="button" class="btn btn-sm btn-danger remove-btn" onclick="remHobField(this)">Remove</button>
                    </div>
                </div>
                
            </div>`;
    hobbiesSection.insertAdjacentHTML('beforeend', newHobby);
}
function remHobField(button) {
    const expGroup = button.closest('.hobbies-group');        
    if (expGroup) {
        expGroup.remove();
    }        
}

function addLanguage() {
    const languagesSection= document.getElementById('languages-section');
    const newLang= `
            <div class="languages-group row mb-3">
                <div class="col-12 d-flex align-items-center">
                    <div class="col-12">
                        <input type="text" class="form-control form-control me-5" placeholder="Language" required>
                    </div>
                    <div class="col-4 ms-3 mb-2">
                        <button type="button" class="btn btn-sm btn-danger remove-btn" onclick="remLngField(this)">Remove</button>
                    </div>
                </div>                    
            </div>`;
    languagesSection.insertAdjacentHTML('beforeend', newLang);
}
function remLngField(button) {
    const expGroup = button.closest('.languages-group');        
    if (expGroup) {
        expGroup.remove();
    }        
}

function addLink() {
    const linksSection= document.getElementById('links-section');
    const newLink= `
            <div class="links-group row mb-3">
                <div class="col-12 d-flex align-items-center">
                    <div class="col-12">
                        <input type="text" class="form-control form-control me-5" placeholder="Link" required>
                    </div>
                    <div class="col-4 ms-3 mb-2">
                        <button type="button" class="btn btn-sm btn-danger remove-btn" onclick="remLinkField(this)">Remove</button>
                    </div>
                </div>
                
            </div>`;
    linksSection.insertAdjacentHTML('beforeend', newLink);
}
function remLinkField(button) {
    const expGroup = button.closest('.links-group');        
    if (expGroup) {
        expGroup.remove();
    }        
}



function ResPreview()
{
    document.getElementById("NameP").innerText= document.getElementById("name").value;
    document.getElementById("ContactP").innerText = document.getElementById("contactNo").value;
    document.getElementById("EmailP").innerText = document.getElementById("email").value;
    document.getElementById("Address1P").innerText = document.getElementById("addressLine1").value;
    document.getElementById("Address2P").innerText = document.getElementById("addressLine2").value;
    document.getElementById("SummaryP").innerText=document.getElementById("summary").value;
    
    // document.addEventListener("DOMContentLoaded", function() {   });

    // let educationPreview = document.getElementById("EducationP");
    // educationPreview.innerHTML = "";
    // const educationFields = document.querySelectorAll("#educationFields .education-group");
    // console.log("Total education fields found:", educationFields.length);

    // educationFields.forEach((group, index) => {
    //     const inputs = group.querySelectorAll("input");
        
    //     console.log(`Education Group ${index + 1}:`, [...inputs].map(input => input.value));

    //     if (inputs.length < 3) return;

    //     let eduText = `${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value}`;
    //     let li = document.createElement("li");
    //     li.innerText = eduText;
    //     educationPreview.appendChild(li);
    // });
    
    const educationFields = document.querySelectorAll("#educationFields .education-group");
    const educationPreview = document.getElementById("EducationP");
    educationPreview.innerHTML = "";
    console.log("Total education fields found:", educationFields.length);

    educationFields.forEach((group, index) => {
        const inputs = group.querySelectorAll("input");
        
        console.log(`Education Group ${index + 1}:`, [...inputs].map(input => input.value));

        let eduText = `${inputs[0].value} <br> ${inputs[1].value} <br> ${inputs[2].value}`;
        let li = document.create("li");
        li.innerHTML = eduText;
        educationPreview.appendChild(li);
    });
        

    // Handling work experience fields
    const experienceFields = document.querySelectorAll("#experienceFields .experience-group");
    let workPreview = document.getElementById("WorkP");
    workPreview.innerHTML = "";

    experienceFields.forEach((group) => {
        const inputs = group.querySelectorAll("input");
        console.log(`Experience Group ${index + 1}:`, [...inputs].map(input => input.value));

        workPreview.innerHTML += `<p>${inputs[0].value}, ${inputs[1].value}, ${inputs[2].value}</p>`;
    });


    function displDynInputs(fieldId, previewId) {
        const field = document.getElementById(fieldId);
        const previewField = document.getElementById(previewId);
        previewField.innerHTML = ""; // Clear previous content

        const inputs = field.querySelectorAll("input");
        inputs.forEach(input => {
            if (input.value.trim() !== "") {
                const div = document.createElement("div");
                div.classList.add("border", "mb-2", "rounded");
                div.innerText = input.value;
                previewField.appendChild(div);
            }
        });
    }
    displDynInputs("skills-section", "SkillsP");
    displDynInputs("hobbies-section", "HobbiesP");
    displDynInputs("languages-section", "LanguagesP");
    displDynInputs("links-section", "LinksP");


    // Open Preview Accordion
    let previewAccordion= new bootstrap.Collapse(document.getElementById("previewBody"), {toggle: true});
}