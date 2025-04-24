'use client';

import {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const phrases = [
  'Reiki fluye a través de mí, sanando mi mente, cuerpo y espíritu.',
  'Estoy abierto/a a recibir la energía vital universal.',
  'Libero todos los bloqueos y permito que la sanación se manifieste.',
  'Cada día, me lleno de paz, amor y compasión.',
  'Estoy agradecido/a por el poder sanador del Reiki.',
  'Envío Reiki para sanar el mundo y traer paz a todos los seres.',
  'Confío en el proceso y permito que Reiki guíe mi camino.',
  'Mi energía está equilibrada, y estoy conectado/a al momento presente.',
  'Soy un canal para la energía sanadora, y la comparto libremente.',
  'Estoy rodeado/a de amor y luz, protegido/a y guiado/a por Reiki.',
];

const PhraseDisplay = () => {
  const [phrase, setPhrase] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setPhrase(phrases[randomIndex]);
  }, []);

  return (
    <Card className="w-full max-w-md mx-auto bg-primary/20 shadow-md">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-center">Frase Reiki Diaria</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-center">{phrase}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PhraseDisplay;

