
for (let i = 1; i <= 6; i++) {
const card = document.createElement('div');
card.className='card';
card.innerHTML = `
  <img src="=${i}" class="card_img">
  <div class="card_body">
    <p class="card_text">وصف...</p>
  </div>
    <span class="card_category">رحلات سياحية</span> <!-- هنا واحد مش اتنين -->
`;
document.querySelector('section').appendChild(card)
}
