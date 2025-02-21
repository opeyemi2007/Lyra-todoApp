import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle } from 'lucide-react';
import '../styles/verify.css';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
  const [verifying, setVerifying] = useState(true);
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState('');

  const location = useLocation();
  const locationValue = new URLSearchParams(location.search);
  const token = locationValue.get('token');

  const navigate = useNavigate()

  const apiUrl = `https://free-todo-api.vercel.app/user/verify-email?token=${token}`;

  const handleVerify = async () => {
    try {
      const response = await axios.get(apiUrl);
      console.log(response.data);
      setIsVerified(true);
    } catch (err) {
      console.error(err);
      setError('Verification failed. Please try again.');
    } finally {
      setVerifying(false);
      setTimeout(() => navigate('/'), 2500); 
    }
  };

  useEffect(() => {
    handleVerify();
  }, []);

  return (
    <div className="verifying-container">
      {verifying ? (
        <motion.div
          className="verifying-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
          />
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Verifying...
          </motion.h2>
        </motion.div>
      ) : isVerified ? (
        <motion.div
          className="verified-content"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <CheckCircle size={80} color="green" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Verified!
          </motion.h2>
        </motion.div>
      ) : (
        <motion.div
          className="error-content"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 100 }}
        >
          <XCircle size={80} color="red" />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {error}
          </motion.h2>
        </motion.div>
      )}
    </div>
  );
};

export default Verify;
