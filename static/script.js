console.log('hello world')

let companyData = {
    companyName: "New Horizon",
    rescources: {
        human: [
            {
                name: "Arnaud",
                surname: "Garing",
            },
            {
                name: "John",
                surname: "Doe",
            },
            {
                name: "Mary",
                surname: "Sue",
            }
        ],
        material: [
            {
                name: "Podomètre",
                quantity: 24,
            },
            {
                name: "Balance",
                quantity: 12,
            },
            {
                name: "Tensiomètres",
                quantity: 67,
            },
        ],
        software: [
            {
                name: "Licence logicielles Pycharm",
                quantity: 25,
            },
            {
                name: "Abonnement Entreprise Gitlab",
                quantity: 1,
            },
        ]
    },
    data: [
        {
            name: "Donnés A",
            description: "Lorem Ipsum"
        },
        {
            name: "Donnés F",
            // description: "Lorem Ipsum"
        },
        {
            name: "Donnés B",
            description: "Lorem Ipsum"
        },
        {
            name: "Donnés G2",
            description: "Lorem Ipsum"
        },
    ],
    process: [
        {
            name: "Processus A",
            description: "Lorem Ipsum"
        },
        {
            name: "Processus 556",
            description: "Lorem Ipsum"
        },
        {
            name: "Processus B54",
            // description: "Lorem Ipsum"
        },
        {
            name: "Processus Z6",
            description: "Lorem Ipsum"
        },
    ],
}

function setCompanyName() {
    let companyNamePlaceholders = document.querySelectorAll('.companyName');
    for (const placeholder of companyNamePlaceholders) {
        placeholder.textContent = companyData.companyName;
    }
}

function setHumanResources() {
    let humanResourceList = document.querySelector('#humanResources');
    for (const human of companyData.rescources.human) {
        humanResourceList.innerHTML += `<li>${human.name} ${human.surname}</li>`
    }
}

function setMaterialResources() {
    let materialResourceList = document.querySelector('#materialResources');
    for (const material of companyData.rescources.material) {
        materialResourceList.innerHTML += `<li>${material.quantity} ${material.name}</li>`
    }
}

function setSoftwareResources() {
    let softwareResourceList = document.querySelector('#softwareResources');
    for (const software of companyData.rescources.software) {
        softwareResourceList.innerHTML += `<li>${software.quantity} ${software.name}</li>`
    }
}

function setData() {
    let dataList = document.querySelector('#dataList');
    for (const data of companyData.data) {
        dataList.innerHTML += `<li><strong>${data.name}</strong>${data.description === undefined ? "" : " : " + data.description}</li>`
    }
}

function setProcess() {
    let processList = document.querySelector('#processList');
    for (const process of companyData.process) {
        processList.innerHTML += `<li><strong>${process.name}</strong>${process.description === undefined ? "" : " : " + process.description}</li>`
    }
}

function init() {
    setCompanyName();
    setHumanResources();
    setMaterialResources();
    setSoftwareResources();
    setData();
    setProcess();
}

window.addEventListener('load', init);


