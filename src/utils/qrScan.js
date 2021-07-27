import React, { useContext } from 'react';
import QrReader from 'react-qr-reader';
import StudentContext from '../context/student/studentContext';

const QrCode = () => {
  const delay = 5000;

  const studentContext = useContext(StudentContext);

  const { createStudentClass, removeLoading, getAttendanceClass } = studentContext;

  const handleScan = async (data) => {
    if (data) {
      alert('QR Scan Successful, Click Okay to continue');
      await createStudentClass(JSON.parse(data));
      await getAttendanceClass();
      removeLoading();
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <QrReader delay={delay} onError={handleError} onScan={handleScan} style={{ width: '60%' }} />
  );
};

export default QrCode;
