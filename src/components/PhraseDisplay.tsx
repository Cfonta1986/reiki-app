
'use client';

import {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';

const phrases = [
  'Reiki flows through me, healing my mind, body, and spirit.',
  'I am open to receiving the universal life force energy.',
  'I release all blockages and allow healing to manifest.',
  'Every day, I am filled with peace, love, and compassion.',
  'I am grateful for the healing power of Reiki.',
  'I send Reiki to heal the world and bring peace to all beings.',
  'I trust the process and allow Reiki to guide my path.',
  'My energy is balanced, and I am grounded in the present moment.',
  'I am a channel for healing energy, and I share it freely.',
  'I am surrounded by love and light, protected and guided by Reiki.',
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
        <CardTitle className="text-lg font-semibold text-center">Daily Reiki Phrase</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-md text-center">{phrase}</CardDescription>
      </CardContent>
    </Card>
  );
};

export default PhraseDisplay;

