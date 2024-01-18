const buyBtns = document.querySelectorAll('.js-buy-btn');
const closeTicket = document.querySelector('.js-close-ticket');
const modal = document.querySelector('.js-modal');
const modalContainer = document.querySelector('.js-modal-container')
//hàm thêm, xóa open
function showTicket(){
     modal.classList.add('open')
};
function hidenTicket(){
    modal.classList.remove('open')
};
// câu lệnh gọi khi click
for (const buyBtn of buyBtns){
    buyBtn.addEventListener('click', showTicket)
};
closeTicket.addEventListener('click',hidenTicket);
modal.addEventListener('click', hidenTicket);
modalContainer.addEventListener('click', function(event){
    event.stopPropagation()
});