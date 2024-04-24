import { useState, useEffect } from 'react';
import axios from '../../api/axios';
import ProtectedRoute from '../../components/ProtectedRoute';

const TenantVetting = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      try {
        const response = await axios.get('/tenants/pending');
        setTenants(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchTenants();
  }, []);

  const handleVetting = async (tenantId, vettingStatus, vettingDocuments) => {
    try {
      await axios.post('/tenants/vetting', {
        tenantId,
        vettingStatus,
        vettingDocuments
      });

      // Update the tenant list after successful vetting
      const updatedTenants = tenants.map((tenant) => {
        if (tenant._id === tenantId) {
          return { ...tenant, vettingStatus, vettingDocuments };
        }
        return tenant;
      });
      setTenants(updatedTenants);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProtectedRoute>
      <h1>Tenant Vetting</h1>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant._id}>
            <h2>{tenant.name}</h2>
            <p>Vetting Status: {tenant.vettingStatus}</p>
            <p>Documents:</p>
            <ul>
              {tenant.vettingDocuments.map((doc, index) => (
                <li key={index}>
                  <strong>{doc.type}:</strong> {doc.value}
                </li>
              ))}
            </ul>
            <button onClick={() => handleVetting(tenant._id, 'approved', tenant.vettingDocuments)}>
              Approve
            </button>
            <button onClick={() => handleVetting(tenant._id, 'rejected', tenant.vettingDocuments)}>
              Reject
            </button>
          </li>
        ))}
      </ul>
    </ProtectedRoute>
  );
};

export default TenantVetting;