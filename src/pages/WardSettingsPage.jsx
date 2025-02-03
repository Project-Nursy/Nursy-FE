// export default function WardSettingsPage() {
//   return (
//     <div>
//       <h1>Ward Settings Page</h1>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import apiClient from '../api/axios';
import { Button, Form } from 'react-bootstrap';
import { useOutletContext } from 'react-router-dom';

export default function WardSettingsPage() {
  const { ward } = useOutletContext(); // context에서 ward 정보 받기
  const [settings, setSettings] = useState({
    wardId: null,
    limitStreakCount: 0,
    weekdayDayShift: 0,
    weekdayEveningShift: 0,
    weekdayNightShift: 0,
    holidayDayShift: 0,
    holidayDayEveningShift: 0,
    holidayDayNightShift: 0,
  });

  useEffect(() => {
    // Fetch settings data for the ward
    const fetchSettings = async () => {
      try {
        const response = await apiClient.get(`/setting/${ward?.wardId}`);
        setSettings(response.data);
      } catch (err) {
        console.error('Error fetching settings:', err);
      }
    };

    fetchSettings();
  }, [ward?.wardId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: value,
    }));
  };
  const handleSaveSettings = async () => {
    try {
      settings.wardId = ward?.wardId;
      await apiClient.put('/setting/update', settings);
      alert('Settings updated successfully!');
    } catch (err) {
      console.error('Error saving settings:', err);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-sky-600 mb-6">병동 설정</h1>

      <div className="bg-white shadow-lg rounded-lg p-8">
        <h3 className="text-xl font-semibold text-sky-600 mb-4">병동 근무 설정</h3>
        <Form>
          {/* Streak Count */}
          <Form.Group controlId="limitStreakCount" className="mb-6">
            <Form.Label className="text-lg font-medium">연속 근무 제한</Form.Label>
            <Form.Control
              type="number"
              name="limitStreakCount"
              value={settings.limitStreakCount}
              onChange={handleInputChange}
              className="focus:ring-sky-500 border-2 border-sky-200"
              min="0"
            />
          </Form.Group>

          {/* Weekday Shifts */}
          <h4 className="text-lg font-semibold text-gray-800 mb-3">평일 근무</h4>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <Form.Group controlId="weekdayDayShift" className="flex flex-col">
              <Form.Label>Day 근무인원</Form.Label>
              <Form.Control
                type="number"
                name="weekdayDayShift"
                value={settings.weekdayDayShift}
                onChange={handleInputChange}
                className="focus:ring-sky-500 border-2 border-sky-200"
                min="0"
              />
            </Form.Group>
            <Form.Group controlId="weekdayEveningShift" className="flex flex-col">
              <Form.Label>Evening 근무인원</Form.Label>
              <Form.Control
                type="number"
                name="weekdayEveningShift"
                value={settings.weekdayEveningShift}
                onChange={handleInputChange}
                className="focus:ring-sky-500 border-2 border-sky-200"
                min="0"
              />
            </Form.Group>
            <Form.Group controlId="weekdayNightShift" className="flex flex-col">
              <Form.Label>Night 근무인원</Form.Label>
              <Form.Control
                type="number"
                name="weekdayNightShift"
                value={settings.weekdayNightShift}
                onChange={handleInputChange}
                className="focus:ring-sky-500 border-2 border-sky-200"
                min="0"
              />
            </Form.Group>
          </div>

          {/* Holiday Shifts */}
          <h4 className="text-lg font-semibold text-gray-800 mb-3">휴일 근무</h4>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <Form.Group controlId="holidayDayShift" className="flex flex-col">
              <Form.Label>Day 근무인원</Form.Label>
              <Form.Control
                type="number"
                name="holidayDayShift"
                value={settings.holidayDayShift}
                onChange={handleInputChange}
                className="focus:ring-sky-500 border-2 border-sky-200"
                min="0"
              />
            </Form.Group>
            <Form.Group controlId="holidayDayEveningShift" className="flex flex-col">
              <Form.Label>Evening 근무인원</Form.Label>
              <Form.Control
                type="number"
                name="holidayDayEveningShift"
                value={settings.holidayDayEveningShift}
                onChange={handleInputChange}
                className="focus:ring-sky-500 border-2 border-sky-200"
                min="0"
              />
            </Form.Group>
            <Form.Group controlId="holidayDayNightShift" className="flex flex-col">
              <Form.Label>Night 근무인원</Form.Label>
              <Form.Control
                type="number"
                name="holidayDayNightShift"
                value={settings.holidayDayNightShift}
                onChange={handleInputChange}
                className="focus:ring-sky-500 border-2 border-sky-200"
                min="0"
              />
            </Form.Group>
          </div>

          {/* Save Button */}
          <Button
            onClick={handleSaveSettings}
            variant="primary"
            size="lg"
            className="w-full py-3 text-white bg-sky-600 hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-md"
          >
            설정 저장
          </Button>
        </Form>
      </div>
    </div>
  );
}
