'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchRequests();
  }, [filter]);

  const fetchRequests = async () => {
    try {
      const response = await fetch(`/api/requests?status=${filter}`);
      const result = await response.json();
      
      if (result.success) {
        setRequests(result.requests);
      } else {
        if (response.status === 401) {
          router.push('/admin');
        }
      }
    } catch (error) {
      console.error('Error fetching requests:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateRequestStatus = async (id, status, notes = '') => {
    try {
      const response = await fetch(`/api/admin/requests/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, notes }),
      });

      const result = await response.json();
      
      if (result.success) {
        fetchRequests();
        setSelectedRequest(null);
        alert(result.message);
      } else {
        alert(result.message);
      }
    } catch (error) {
      alert('حدث خطأ في تحديث الطلب');
    }
  };

  const deleteRequest = async (id) => {
    if (confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
      try {
        const response = await fetch(`/api/admin/requests/${id}`, {
          method: 'DELETE',
        });

        const result = await response.json();
        
        if (result.success) {
          fetchRequests();
          alert(result.message);
        } else {
          alert(result.message);
        }
      } catch (error) {
        alert('حدث خطأ في حذف الطلب');
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'in_progress': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'في الانتظار';
      case 'in_progress': return 'قيد التنفيذ';
      case 'completed': return 'مكتمل';
      case 'cancelled': return 'ملغي';
      default: return status;
    }
  };

  const formatRequestTypes = (requestType) => {
    try {
      const types = JSON.parse(requestType);
      const selectedTypes = Object.entries(types)
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
        });
      return selectedTypes.join(' - ');
    } catch {
      return 'غير محدد';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">جاري التحميل...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100" dir="rtl">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <h1 className="text-3xl font-bold text-gray-900">لوحة التحكم - الباب الخيري</h1>
            <button
              onClick={() => {
                document.cookie = 'admin_token=; Max-Age=0; path=/';
                router.push('/admin');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
            >
              تسجيل الخروج
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter buttons */}
        <div className="mb-6 flex space-x-2 space-x-reverse">
          {[
            { key: 'all', label: 'جميع الطلبات' },
            { key: 'pending', label: 'في الانتظار' },
            { key: 'in_progress', label: 'قيد التنفيذ' },
            { key: 'completed', label: 'مكتملة' },
            { key: 'cancelled', label: 'ملغية' }
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`px-4 py-2 rounded-lg font-medium ${
                filter === key
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Requests table */}
        <div className="bg-white shadow-sm rounded-lg overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الاسم</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الهاتف</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">المدينة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحي</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">نوع الطلب</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الحالة</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">تاريخ الطلب</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">الإجراءات</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {request.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.phone}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.city}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {request.neighborhood}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {formatRequestTypes(request.request_type)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(request.status)}`}>
                      {getStatusText(request.status)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(request.created_at).toLocaleDateString('ar-SA')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2 space-x-reverse">
                    <button
                      onClick={() => setSelectedRequest(request)}
                      className="text-blue-600 hover:text-blue-900"
                    >
                      تحديث
                    </button>
                    <button
                      onClick={() => deleteRequest(request.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {requests.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              لا توجد طلبات
            </div>
          )}
        </div>
      </div>

      {/* Update modal */}
      {selectedRequest && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <h3 className="text-lg font-medium mb-4">تحديث حالة الطلب</h3>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  الحالة الجديدة
                </label>
                <select
                  defaultValue={selectedRequest.status}
                  onChange={(e) => setSelectedRequest({...selectedRequest, status: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                >
                  <option value="pending">في الانتظار</option>
                  <option value="in_progress">قيد التنفيذ</option>
                  <option value="completed">مكتمل</option>
                  <option value="cancelled">ملغي</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ملاحظات
                </label>
                <textarea
                  defaultValue={selectedRequest.notes || ''}
                  onChange={(e) => setSelectedRequest({...selectedRequest, notes: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="3"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-2 space-x-reverse mt-6">
              <button
                onClick={() => setSelectedRequest(null)}
                className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                إلغاء
              </button>
              <button
                onClick={() => updateRequestStatus(selectedRequest.id, selectedRequest.status, selectedRequest.notes)}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}