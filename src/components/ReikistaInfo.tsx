'use client';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUpRight,
} from 'lucide-react';

const ReikistaInfo = () => {
  const reikistaData = {
    name: 'Reiki Master Sarah',
    description:
      'Sarah es una Maestra de Reiki certificada con más de 10 años de experiencia. Ella está dedicada a ayudar a sus clientes a encontrar paz, equilibrio y sanación a través del poder del Reiki. ¡Contáctala para una sesión hoy!',
    contact: {
      phone: '+1-555-123-4567',
      email: 'sarah@reikimaster.com',
      facebook: 'https://www.facebook.com/reikimaster',
      instagram: 'https://www.instagram.com/reikimaster',
      linkedin: 'https://www.linkedin.com/in/reikimaster',
      tiktok: 'https://www.tiktok.com/reikimaster',
    },
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-secondary/20 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">
          {reikistaData.name}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-center mb-4">
          {reikistaData.description}
        </CardDescription>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-row flex-wrap items-center justify-center gap-2">
            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
            >
              <a
                href={`https://wa.me/${reikistaData.contact.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center px-3 py-2 rounded-md"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 448 512"
                  className="mr-2"
                >
                  <path
                    fill="white"
                    d="M380.9 97.1C339 55.1 283.2 21.1 221 21.1c-62.2 0-118 34-159.1 76C36.5 153.4 18 199.9 18 247.5c0 47.6 18.5 94.1 51.9 139.7l-23.2 90.6c-1.3 5.1 1.9 9.8 6.8 11.2 2.6.8 5.3.8 7.9 0l42.3-11.1c44.6 28.5 92.7 43.4 140.5 43.4 62.2 0 118-34 159.1-76 33.4-45.6 51.9-92.1 51.9-139.7 0-47.6-18.5-94.1-51.9-139.7zM221.5 405.7c-31.3 0-59.2-12.7-80.1-35.7-2.9-3.3-5.4-7.3-7.5-11.6l-.3-.6c-5.7-11.6 3.5-24.2 15.1-29.9l45.2-23.6c1.4-.7 2.3-2.2 2.6-3.8l-.5-2.3c-.9-3.9-3.1-7.4-6.1-10.1-1.5-1.4-3.4-2.6-5.4-3.4l-24.3-12.8c-5.1-2.7-7.3-8.6-5.2-13.9 1.1-2.8 2.5-5.5 4.1-8.1 1.4-2.2 2.6-4.5 3.5-6.8l.4-.9c2.6-6.4 9.2-10.5 16.3-9.9l55.9 29.2c7.6 4 12.3 11.3 12.3 19.3.1 8.1-4.6 15.3-12.3 19.3l-55.9 29.2c-7.2.6-13.8-3.6-16.4-10-1-2.3-2.2-4.6-3.5-6.9l-.4-.9c-.9-2.3-2.3-4.6-3.6-6.9 2.1-.8 3.9-2 5.6-3.5 3-2.7 5.2-6.2 6.2-10.2l.5-2.3c.3-1.6-1-3.1-2.4-3.8l-45.2-23.6c-11.6-6.1-20.8-1.3-15.1 11.3l.3.6c2.1 4.3 4.6 8.2 7.5 11.6 20.9 24 48.8 36.7 80.1 36.7z"
                  />
                </svg>
                WhatsApp <ArrowUpRight className="h-4 w-4 ml-1" />
              </a>
            </Button>

            <Button
              asChild
              className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
            >
              <a
                href={`tel:${reikistaData.contact.phone}`}
                className="flex items-center px-3 py-2 rounded-md"
              >
                <Phone className="mr-2 h-4 w-4" color="white" />
                Llamar <ArrowUpRight className="h-4 w-4 ml-1" color="white" />
              </a>
            </Button>
            {reikistaData.contact.email && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
              >
                <a
                  href={`mailto:${reikistaData.contact.email}`}
                  className="flex items-center px-3 py-2 rounded-md"
                >
                  <Mail className="mr-2 h-4 w-4" color="white" />
                  Email <ArrowUpRight className="h-4 w-4 ml-1" color="white" />
                </a>
              </Button>
            )}
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-2">
            {reikistaData.contact.facebook && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
              >
                <a
                  href={reikistaData.contact.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md"
                >
                  <Facebook className="mr-2 h-4 w-4" color="white" />
                  Facebook <ArrowUpRight className="h-4 w-4 ml-1" color="white" />
                </a>
              </Button>
            )}
            {reikistaData.contact.instagram && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
              >
                <a
                  href={reikistaData.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md"
                >
                  <Instagram className="mr-2 h-4 w-4" color="white" />
                  Instagram <ArrowUpRight className="h-4 w-4 ml-1" color="white" />
                </a>
              </Button>
            )}
            {reikistaData.contact.linkedin && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
              >
                <a
                  href={reikistaData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md"
                >
                  <Linkedin className="mr-2 h-4 w-4" color="white" />
                  Linkedin <ArrowUpRight className="h-4 w-4 ml-1" color="white" />
                </a>
              </Button>
            )}
            {reikistaData.contact.tiktok && (
              <Button
                asChild
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white hover:from-purple-600 hover:to-indigo-600"
              >
                <a
                  href={reikistaData.contact.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center px-3 py-2 rounded-md"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 448 512"
                    className="mr-2"
                  >
                    <path
                      fill="white"
                      d="M448,209.1A57.6,57.6,0,0,0,416.8,136.8c-16.6-15.7-36-24.1-58.3-24.7V82.1A10.3,10.3,0,0,0,348.5,71.8a10.5,10.5,0,0,0-9.3-6.6H323.4a10.3,10.3,0,0,0-10.3,10.3v36.3c-23.8,1.4-43.6,9.7-62,25.7-5.7,4.8-11.1,10.3-16.2,16.2V109.1a10.3,10.3,0,0,0-10.3-10.3H195.6a10.3,10.3,0,0,0-10.3,10.3v36.3c-28,3.1-50.7,14.6-70.8,34.8a58,58,0,0,0-.7,86.9c16.6,15.7,36,24.1,58.3,24.7v32.8a10.3,10.3,0,0,0,10.3,10.3h15.7a10.3,10.3,0,0,0,10.3-10.3V302.5c23.8-1.4,43.6-9.7,62-25.7,5.7-4.8,11.1-10.3,16.2-16.2v36.3a10.3,10.3,0,0,0,10.3,10.3h15.7a10.3,10.3,0,0,0,10.3-10.3V302.5c28-3.1,50.7-14.6,70.8-34.8a57.6,57.6,0,0,0,31.2-72.4ZM144.9,327.9c-24.7-24.7-42.3-57.1-47.4-94.7,5.1-37.6,22.8-70,47.4-94.7,24.7-24.7,57.1-42.3,94.7-47.4,37.6,5.1,70,22.8,94.7,47.4,24.7,24.7,42.3,57.1,47.4,94.7-5.1,37.6-22.8,70-47.4,94.7-24.7,24.7-57.1,42.3-94.7,47.4C202,370.2,169.6,352.6,144.9,327.9Z"
                    />
                  </svg>
                  Tiktok <ArrowUpRight className="h-4 w-4 ml-1" color="white" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ReikistaInfo;
