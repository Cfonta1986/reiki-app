
import {Card, CardContent, CardHeader, CardTitle, CardDescription} from '@/components/ui/card';

const ReikistaInfo = () => {
  const reikistaData = {
    name: 'Reiki Master Sarah',
    description:
      'Sarah is a certified Reiki Master with over 10 years of experience. She is dedicated to helping her clients find peace, balance, and healing through the power of Reiki. Contact her for a session today!',
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
            <strong>Contact:</strong>
          </p>
          <p>Phone: {reikistaData.contact.phone}</p>
          <p>Email: {reikistaData.contact.email}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReikistaInfo;

