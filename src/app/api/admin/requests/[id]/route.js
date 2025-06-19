import { executeQuery } from '@/lib/db';
import { NextResponse } from 'next/server';
import { verifyAdminToken } from '@/lib/auth';

export async function PUT(request, { params }) {
  try {
    // Verify admin authentication
    const adminData = await verifyAdminToken(request);
    if (!adminData) {
      return NextResponse.json(
        { success: false, message: 'غير مخول للوصول' },
        { status: 401 }
      );
    }

    const { id } = params;
    const { status, notes } = await request.json();

    const query = `
      UPDATE requests 
      SET status = ?, notes = ?, updated_at = CURRENT_TIMESTAMP 
      WHERE id = ?
    `;
    
    await executeQuery(query, [status, notes || null, id]);

    return NextResponse.json({
      success: true,
      message: 'تم تحديث حالة الطلب بنجاح'
    });

  } catch (error) {
    console.error('Error updating request:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في تحديث الطلب' },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    // Verify admin authentication
    const adminData = await verifyAdminToken(request);
    if (!adminData) {
      return NextResponse.json(
        { success: false, message: 'غير مخول للوصول' },
        { status: 401 }
      );
    }

    const { id } = params;
    
    await executeQuery('DELETE FROM requests WHERE id = ?', [id]);

    return NextResponse.json({
      success: true,
      message: 'تم حذف الطلب بنجاح'
    });

  } catch (error) {
    console.error('Error deleting request:', error);
    return NextResponse.json(
      { success: false, message: 'حدث خطأ في حذف الطلب' },
      { status: 500 }
    );
  }
}