// 1. الاتصال بقاعدة البيانات
const supabaseUrl = 'https://vmrffieodjochyorkgve.supabase.co/rest/v1/cards';
const supabaseKey = 'sb_publishable_HZNkREzI_2VytqnpA0GvXg_2fGkqjny';
// تصحيح: المكتبة تظهر كـ supabase.createClient مباشرة
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function loadCards() {
    const { data: cards, error } = await supabase.from('cards').select('*');

    if (error) {
        console.error("خطأ من Supabase:", error);
        return;
    }

    const container = document.querySelector('.container');
    container.innerHTML = ''; 

    cards.forEach(card => {
        container.innerHTML += `
            <div class="card">
                <img class="card-image" src="${card.img_url}" alt="${card.title}">
                <div class="content-section">
                    <div class="button-group">
                        <button class="btn">واتساب</button>
                        <button class="btn">المزيد</button>
                    </div>
                    <div class="text-area">
                        <div class="title">${card.title}</div>
                        <div class="text">${Number(card.price).toLocaleString('ar-SD')} جنيه</div>
                    </div>
                </div>
            </div>
        `;
    });
}

loadCards();
