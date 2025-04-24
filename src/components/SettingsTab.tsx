'use client';

import {useEffect, useState} from 'react';
import {useTheme} from 'next-themes';
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Label} from '@/components/ui/label';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/components/ui/select';

const SettingsTab = () => {
  const {setTheme, theme} = useTheme();
  const [mounted, setMounted] = useState(false);
  const [notificationTime, setNotificationTime] = useState('09:00'); // Default time

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Store or retrieve notification time from local storage or a database
    // This is a placeholder; implement actual notification scheduling
  }, [notificationTime]);

  if (!mounted) {
    return null;
  }

  const handleTimeChange = (time: string) => {
    setNotificationTime(time);
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-accent/20 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">Configuración</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        <div>
          <Label htmlFor="theme">Modo</Label>
          <Select defaultValue={theme} onValueChange={setTheme}>
            <SelectTrigger id="theme">
              <SelectValue placeholder="System"/>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="system">Sistema</SelectItem>
              <SelectItem value="light">Claro</SelectItem>
              <SelectItem value="dark">Oscuro</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="notification-time">Horario de Notificación</Label>
          <Select value={notificationTime} onValueChange={handleTimeChange}>
            <SelectTrigger id="notification-time">
              <SelectValue placeholder="Seleccionar Horario"/>
            </SelectTrigger>
            <SelectContent>
              {Array.from({length: 24}, (_, i) => {
                const hour = i.toString().padStart(2, '0');
                return (
                  <SelectItem key={hour} value={`${hour}:00`}>{`${hour}:00`}</SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default SettingsTab;
