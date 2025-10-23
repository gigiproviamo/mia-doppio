import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const RevenueChart = ({ selectedIndustry }) => {
  const restaurantData = [
    { name: 'Lun', revenue: 420, orders: 28 },
    { name: 'Mar', revenue: 380, orders: 25 },
    { name: 'Mer', revenue: 520, orders: 35 },
    { name: 'Gio', revenue: 680, orders: 42 },
    { name: 'Ven', revenue: 890, orders: 58 },
    { name: 'Sab', revenue: 1240, orders: 76 },
    { name: 'Dom', revenue: 980, orders: 62 }
  ];

  const salonData = [
    { name: 'Lun', revenue: 320, appointments: 18 },
    { name: 'Mar', revenue: 280, appointments: 16 },
    { name: 'Mer', revenue: 420, appointments: 24 },
    { name: 'Gio', revenue: 580, appointments: 32 },
    { name: 'Ven', revenue: 690, appointments: 38 },
    { name: 'Sab', revenue: 890, appointments: 48 },
    { name: 'Dom', revenue: 450, appointments: 26 }
  ];

  const data = selectedIndustry === 'restaurant' ? restaurantData : salonData;
  const dataKey = selectedIndustry === 'restaurant' ? 'orders' : 'appointments';
  const label = selectedIndustry === 'restaurant' ? 'Ordini' : 'Appuntamenti';

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload?.length) {
      return (
        <div className="bg-white border border-border rounded-lg shadow-brand p-3">
          <p className="text-sm font-medium text-foreground">{label}</p>
          <p className="text-sm text-primary">
            Fatturato: €{payload?.[0]?.payload?.revenue}
          </p>
          <p className="text-sm text-accent">
            {label}: {payload?.[0]?.payload?.[dataKey]}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-lg border border-border">
      <div className="p-6 border-b border-border">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Andamento Settimanale</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Fatturato e {label?.toLowerCase()} degli ultimi 7 giorni
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full"></div>
              <span className="text-sm text-muted-foreground">Fatturato</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <span className="text-sm text-muted-foreground">{label}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="w-full h-64" aria-label="Weekly Revenue and Activity Chart">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
              <XAxis 
                dataKey="name" 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12 }}
              />
              <YAxis 
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#64748B', fontSize: 12 }}
              />
              <Tooltip content={<CustomTooltip />} />
              <Bar 
                dataKey="revenue" 
                fill="#128C7E" 
                radius={[4, 4, 0, 0]}
                name="Fatturato"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">€4.610</p>
            <p className="text-sm text-muted-foreground">Fatturato totale</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-accent">
              {data?.reduce((sum, day) => sum + day?.[dataKey], 0)}
            </p>
            <p className="text-sm text-muted-foreground">{label} totali</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;