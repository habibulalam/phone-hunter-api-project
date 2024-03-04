const loadPhone = async(inputText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
    const data = await res.json();
    const phones = data.data;
    console.log(phones)
     displayPhones(phones); 
}

const displayPhones = (phones) => {
    const phoneContainer = document.getElementById('card-container')
    phoneContainer.textContent = ''

    // if result is more than 12 Card then display Show All button. If result is not more than 12 Card then don't display the button
    // const showAllButton = document.getElementById('show-all-phone')
    // if(phones.length > 12){
    //     showAllButton.classList.remove('hidden')
    // }
    // else{
    //     showAllButton.classList.add('hidden')
    // }

    // show only 12 phone card
    // phones = phones.slice(0,12)


    phones.forEach(phone => {
        // console.log(phone)
        const phoneCard = document.createElement('div')
        phoneCard.classList = `card bg-gray-100 p-3 shadow-xl`;
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" alt="Shoes" /></figure>
                <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
                </div>
        `
        phoneContainer.appendChild(phoneCard);

    });
    toggleLoader(false);
}

// Search input
const searchPhone = () => {
    toggleLoader(true);
    const inputField = document.getElementById('search')
    const inputText = inputField.value;
    loadPhone(inputText);
    inputField.value=''
}
// Spinner or loader function
const toggleLoader = (isLoading) => {
    const spinnerContainer = document.getElementById('loading')
    if(isLoading){
        spinnerContainer.classList.remove('hidden')
    }
    else{
        spinnerContainer.classList.add('hidden')
    }
}

loadPhone();