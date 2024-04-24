import { useState } from 'react';
import axios from '../../api/axios';
import { setAuthToken } from '../../utils/auth';

const TenantRegistration = () => {
  // ... (tenant registration form code from previous example)

  return (
    <form onSubmit={handleSubmit}>
      {/* Render input fields */}
      <button type="submit">Register</button>
    </form>
  );
};

export default TenantRegistration;