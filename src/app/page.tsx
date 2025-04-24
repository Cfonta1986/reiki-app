'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import PhraseDisplay from '@/components/PhraseDisplay';
import ReikistaInfo from '@/components/ReikistaInfo';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-5">Reiki Diario</h1>
      <Tabs defaultValue="phrase">
        <TabsList className="w-[200px] mx-auto">
          <TabsTrigger value="phrase">Frase</TabsTrigger>
          <TabsTrigger value="reikista">Info Reikista</TabsTrigger>
        </TabsList>
        <TabsContent value="phrase" className="mt-5">
          <PhraseDisplay />
        </TabsContent>
        <TabsContent value="reikista" className="mt-5">
          <ReikistaInfo />
        </TabsContent>
      </Tabs>
    </div>
  );
}

