
const trips = [
  { 
    id: 1,
    title: "رحلة الرياض", 
    category: "رحلات سياحية", 
    description: "استكشف عاصمة المملكة وتمتع بمعالمها التاريخية والحديثة" 
  },
  { 
    id: 2,
    title: "رحلة جدة الساحلية", 
    category: "رحلات سياحية", 
    description: "استرخي على الشواطئ الجميلة واستمتع بالمأكولات البحرية الطازجة" 
  },
  { 
    id: 3,
    title: "رحلة المدينة المنورة", 
    category: "رحلات دينية", 
    description: "زر المسجد النبوي الشريف وتعمق في التاريخ الإسلامي" 
  },
  { 
    id: 4,
    title: "رحلة الدمام", 
    category: "رحلات سياحية", 
    description: "اكتشف جمال الخليج وحدائقه الخضراء الرائعة" 
  },
  { 
    id: 5,
    title: "رحلة الطائف", 
    category: "رحلات جبلية", 
    description: "استمتع بالطقس البارد والطبيعة الساحرة في الجبال" 
  },
  { 
    id: 6,
    title: "رحلة الأحساء", 
    category: "رحلات سياحية", 
    description: "اكتشف واحة الأحساء وحدائق النخيل الخضراء الشهيرة" 
  }
];

for (let i = 0; i < trips.length; i++) {
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `
    <img src="image_${trips[i].id}.jpg" class="card_img" alt="${trips[i].title}">
    <div class="card_body">
      <h3 class="card_title">${trips[i].title}</h3>
      <span class="card_category">${trips[i].category}</span>
      <p class="card_text">${trips[i].description}</p>
    </div>
  `;
  document.querySelector('section').appendChild(card);
}
