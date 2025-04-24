import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

const ReikistaInfo = () => {
  const reikistaData = {
    name: 'Reiki Master Sarah',
    description:
      'Sarah es una Maestra de Reiki certificada con más de 10 años de experiencia. Ella está dedicada a ayudar a sus clientes a encontrar paz, equilibrio y sanación a través del poder del Reiki. ¡Contáctala para una sesión hoy!',
    contact: {
      phone: '+1-555-123-4567',
      email: 'sarah@reikimaster.com',
    },
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-secondary/20 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">{reikistaData.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-center mb-4">
          {reikistaData.description}
        </CardDescription>
        <div className="text-center">
          <p>
            <strong>Contacto:</strong>
          </p>
          <p>Teléfono: {reikistaData.contact.phone}</p>
          <p>Email: {reikistaData.contact.email}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReikistaInfo;

