
let count = 0;
let totalPrice = 0;

// my_modal_1.showModal()

//seat map code start from here

const seats = document.getElementsByClassName('select-btn');

for (let seat of seats) {
    seat.addEventListener('click', function () {
        count += 1;
        if (count < 5) {
            seat.setAttribute('disabled', '');
            seat.classList.add('selected-seat');
            let seatName = seat.innerText;
            //seat left indicator
            let seatLeftNum = parseInt(document.getElementById('seat-left').innerText);
            seatLeftNum -= 1;
            document.getElementById('seat-left').innerText = seatLeftNum;
            //showing total selected
            document.getElementById('select-num').innerText = count;
            //showing list of selected seat
            showList(seatName);

            //show total price
            showTotalPrice()

        } else if (count === 5) {
            disableAllBtn()
        }
    })
}



//disable all btn function
function disableAllBtn() {
    alert('you can only select 4 seat');
    for (let seat of seats) {
        seat.setAttribute('disable', '');
        seat.style.background = 'red'
    }
}

//show list function

function showList(seatName){
    const div = document.createElement('div');
    div.classList.add('flex', 'justify-evenly');
    const ul = document.getElementById('seat-list');
    const li1 = document.createElement('li');
    li1.classList.add('text-[#65686e]');
    li1.innerText = seatName;
    div.appendChild(li1);

    const li2 = document.createElement('li');
    li2.classList.add('text-[#65686e]');
    li2.innerText = 'economy';
    div.appendChild(li2);

    const li3 = document.createElement('li');
    li3.classList.add('text-[#65686e]');
    li3.innerText = 550;
    div.appendChild(li3);

    ul.appendChild(div);
}

//total price function
function showTotalPrice(){
    totalPrice += 550;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('grand-total').innerText = totalPrice;
    
}