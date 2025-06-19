import { executeQuery } from '@/lib/db';
import { sendNewRequestNotification } from '@/lib/email';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, city, neighborhood, requestType } = body;

    // Validate required fields
    if (!name || !phone || !city || !neighborhood) {
      return NextResponse.json(
        { success: false, message: 'جميع الحقول مطلوبة' },
        { status: 400 }
      );
    }

    // Check if at least one request type is selected
    const hasSelectedType = Object.values(requestType).some(value => value === true);
    if (!hasSelectedType) {
      return NextResponse.json(
        { success: false, message: 'يرجى اختيار نوع واحد على الأقل من الطلبات' },
        { status: 400 }
      );
    }

    // Insert into database
    const query = `
      INSERT INTO requests (name, phone, city, neighborhood, request_type, status)
      VALUES (?, ?, ?, ?, ?, 'pending')
    `;
    
    const result = await executeQuery(query, [
      name,
      phone,
      city,
      neighborhood,
      JSON.stringify(requestType)
    ]);

    // Send email notification
    try {
      await sendNewRequestNotification(body);
      console.log('Email notification sent successfully');
    } catch (emailError) {
      console.error('Failed to send email notification:', emailError);
      // Don't fail the request if email fails, just log it
    }

    return NextResponse.json({
      success: true,
      message: 'تم إرسال طلبكم بنجاح! سيتم التواصل معكم قريباً',
      requestId: result.insertId
    });

  } catch (error) {
    console.error('Error creating request:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في النظام. يرجى المحاولة مرة أخرى' },
      { status: 500 }
    );
  }
}


export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status');
    
    let query = 'SELECT * FROM requests ORDER BY created_at DESC';
    let params = [];
    
    if (status && status !== 'all') {
      query = 'SELECT * FROM requests WHERE status = ? ORDER BY created_at DESC';
      params = [status];
    }
    
    const requests = await executeQuery(query, params);
    
    return NextResponse.json({ success: true, requests });
  } catch (error) {
    console.error('Error fetching requests:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في جلب الطلبات' },
      { status: 500 }
    );
  }
}