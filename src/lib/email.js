import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransporter({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendNewRequestNotification(requestData) {
  try {
    const requestTypes = Object.entries(requestData.requestType)
      .filter(([_, selected]) => selected)
      .map(([type, _]) => {
        switch (type) {
          case 'clothes': return 'ملابس';
          case 'shoes': return 'أحذية';
          case 'papers': return 'أوراق';
          case 'bags': return 'حقائب';
          case 'books': return 'كتب';
          case 'furniture': return 'أثاث';
          default: return type;
        }
      }).join(' - ');

    const htmlContent = `
      <!DOCTYPE html>
      <html dir="rtl" lang="ar">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>طلب جديد - الباب الخيري</title>
        <style>
          body { font-family: 'Tahoma', 'Arial', sans-serif; background-color: #f5f5f5; margin: 0; padding: 20px; }
          .container { max-width: 600px; margin: 0 auto; background-color: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
          .header { background: linear-gradient(135deg, #16a34a, #15803d); color: white; padding: 30px; text-align: center; }
          .content { padding: 30px; }
          .info-row { display: flex; justify-content: space-between; padding: 12px 0; border-bottom: 1px solid #eee; }
          .label { font-weight: bold; color: #374151; }
          .value { color: #6b7280; }
          .request-types { background-color: #f0fdf4; padding: 15px; border-radius: 8px; margin: 15px 0; border-right: 4px solid #16a34a; }
          .footer { background-color: #f9fafb; padding: 20px; text-align: center; color: #6b7280; font-size: 14px; }
          .urgent { background-color: #fef2f2; border: 1px solid #fecaca; padding: 15px; border-radius: 8px; margin: 20px 0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🔔 طلب جديد - الباب الخيري</h1>
            <p>تم استلام طلب جديد من عميل</p>
          </div>
          
          <div class="content">
            <div class="urgent">
              <strong>⚠️ طلب جديد يتطلب المتابعة</strong><br>
              تاريخ الطلب: ${new Date().toLocaleDateString('ar-SA')} - ${new Date().toLocaleTimeString('ar-SA')}
            </div>
            
            <h2>تفاصيل العميل:</h2>
            
            <div class="info-row">
              <span class="label">👤 الاسم:</span>
              <span class="value">${requestData.name}</span>
            </div>
            
            <div class="info-row">
              <span class="label">📱 رقم الهاتف:</span>
              <span class="value">${requestData.phone}</span>
            </div>
            
            <div class="info-row">
              <span class="label">🏙️ المدينة:</span>
              <span class="value">${requestData.city}</span>
            </div>
            
            <div class="info-row">
              <span class="label">🏘️ الحي:</span>
              <span class="value">${requestData.neighborhood}</span>
            </div>
            
            <div class="request-types">
              <h3>📦 نوع الطلبات المختارة:</h3>
              <p style="font-size: 16px; margin: 0;"><strong>${requestTypes}</strong></p>
            </div>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="${process.env.NEXTAUTH_URL}/admin/dashboard" 
                 style="background-color: #16a34a; color: white; padding: 12px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                📊 عرض لوحة التحكم
              </a>
            </div>
          </div>
          
          <div class="footer">
            <p>هذا إشعار تلقائي من نظام الباب الخيري</p>
            <p>© 2025 الباب الخيري - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </body>
      </html>
    `;

    const mailOptions = {
      from: `"الباب الخيري - إشعارات" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `🔔 طلب جديد من ${requestData.name} - الباب الخيري`,
      html: htmlContent,
      // Also include plain text version
      text: `
طلب جديد - الباب الخيري

تفاصيل العميل:
الاسم: ${requestData.name}
الهاتف: ${requestData.phone}
المدينة: ${requestData.city}
الحي: ${requestData.neighborhood}
نوع الطلب: ${requestTypes}

تاريخ الطلب: ${new Date().toLocaleDateString('ar-SA')}
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error.message };
  }
}

// Test email function (optional)
export async function testEmailConnection() {
  try {
    await transporter.verify();
    console.log('SMTP connection verified successfully');
    return true;
  } catch (error) {
    console.error('SMTP connection failed:', error);
    return false;
  }
}