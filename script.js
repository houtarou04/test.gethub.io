// 1. الإعداد والاتصال (ضع رابطك ومفتاحك هنا)
const supabaseUrl = 'https://vmrffieodjochyorkgve.supabase.co/rest/v1/cards';
const supabaseKey = 'sb_publishable_HZNkREzI_2VytqnpA0GvXg_2fGkqjny';

// تأكد أن supabaseClient هي الطريقة الصحيحة للاتصال
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

async function loadCards() {
    console.log("جاري جلب البيانات..."); // للتأكد في الـ Console أن الكود يعمل

    // جلب البيانات من جدول 'cards'
    const { data: cards, error } = await supabase.from('cards').select('*');

    if (error) {
        console.error("خطأ في جلب البيانات:", error);
        return;
    }

    console.log("البيانات التي تم جلبها:", cards); // لرؤية البيانات في الـ Console

    const container = document.querySelector('.container');
    container.innerHTML = ''; // تفريغ الـ section

    // عرض البطاقات
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

// تشغيل الدالة
loadCards();
