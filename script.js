// รอให้หน้าเว็บโหลดโครงสร้าง HTML จนเสร็จก่อนเริ่มทำงาน
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. ระบบจำลองการนับยอดคลิก (Click Tracker)
    const productCards = document.querySelectorAll('.product-card');
    
    productCards.forEach((card, index) => {
        card.addEventListener('click', (event) => {
            // ดึงชื่อสินค้ามาแสดงใน Console เพื่อดูพฤติกรรมผู้ใช้งาน
            const productName = card.querySelector('h3').innerText;
            console.log(`[Tracker] มีคนกดสนใจสินค้าชิ้นที่ ${index + 1}: ${productName}`);
            
            // คุณสามารถนำไปต่อยอดเชื่อมกับ Google Analytics หรือหลังบ้านได้ในอนาคต
        });
    });

    // 2. เอฟเฟกต์เมื่อกดปุ่ม Social Media (สร้างความตื่นเต้น)
    const socialButtons = document.querySelectorAll('.social-box');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const socialName = button.querySelector('.social-name').innerText;
            alert(`กำลังพาทุกคนเดินทางไปยังช่อง ${socialName} ของเรานะ! 🚀`);
        });
    });

});
