// ===================================
// OPAKOVACIA ÚLOHA - KONTAKTNÝ FORMULÁR
// ===================================
// ČO MÁTE NAPROGRAMOVAŤ:
// 1. Získať hodnoty z inputov (.value a .checked)
// 2. Validácia pomocou viacerých IF podmienok
// 3. Zobrazenie výsledku
// 4. Skrytie formulára a zobrazenie úspechu

// ===================================
// 1. ZÍSKANIE ELEMENTOV (HOTOVÉ)
// ===================================
document.addEventListener('DOMContentLoaded', function() {

const inputMeno = document.getElementById('meno');
const inputEmail = document.getElementById('email');
const inputVek = document.getElementById('vek');
const inputSprava = document.getElementById('sprava');
const inputSuhlas = document.getElementById('suhlas');
const btnOdosli = document.getElementById('odosli');

const formular = document.querySelector('.formular');
const uspechDiv = document.getElementById('uspech');
const menoVysl = document.getElementById('meno-vysl');
const emailVysl = document.getElementById('email-vysl');

// ===================================
// 2. FUNKCIA: ODOSLAŤ FORMULÁR (DOPLŇ!)
// ===================================
function odoslatFormular(e) {

    e.preventDefault(); // zabráni reloadu stránky

    // TODO 1: Získaj hodnoty z inputov
    // Pre textové inputy použi .value
    // Pre checkbox použi .checked (vráti true/false)
    
    const meno = inputMeno.value;
    const email = inputEmail.value;
    const vek = inputVek.value;
    const sprava = inputSprava.value;
    const suhlas = inputSuhlas.checked;
    
    
    // TODO 2: Validácia - vytvor 5 samostatných IF podmienok
    
    // Kontrola 1: MENO
    // Ak je meno === '', zobraz alert a ukonči funkciu (return)
    if (meno === '') {
        alert('Zadaj meno!');
        return;
    }
    
    
    // Kontrola 2: EMAIL
    // Ak je email === '', zobraz alert a ukonči funkciu
    if (email === '') {
        alert('Zadaj email!');
        return;
    }
    
    
    // Kontrola 3: VEK
    // Ak je vek === '' ALEBO vek < 13, zobraz alert a ukonči funkciu
    // POZOR: použi || (ALEBO)
    if (vek === '' || vek < 13) {
        alert('Musíš mať aspoň 13 rokov!');
        return;
    }
    
    
    // Kontrola 4: SPRÁVA
    // Ak je sprava === '', zobraz alert a ukonči funkciu
    if (sprava === '') {
        alert('Napíš správu!');
        return;
    }
    
    
    // Kontrola 5: SÚHLAS
    // Ak je suhlas === false, zobraz alert a ukonči funkciu
    if (suhlas === false) {
        alert('Musíš súhlasiť so spracovaním údajov!');
        return;
    }
    
    
    // TODO 3: Zobraz výsledky
    // Nastav meno do elementu menoVysl pomocou .textContent
    // Nastav email do elementu emailVysl pomocou .textContent
    menoVysl.textContent = meno;
    emailVysl.textContent = email;
    
    
    // TODO 4: Skry formulár a zobraz úspešnú hlášku
    // Pridaj CSS triedu 'hidden' k formular
    // Pridaj CSS triedu 'show' k uspechDiv
    formular.classList.add('hidden');
    uspechDiv.classList.add('show');
}

// ===================================
// 3. UDALOSŤ NA TLAČIDLO (HOTOVÉ)
// ===================================
btnOdosli.addEventListener('click', odoslatFormular);

});