'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import PhraseDisplay from '@/components/PhraseDisplay';
import ReikistaInfo from '@/components/ReikistaInfo';
import SettingsTab from '@/components/SettingsTab';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-5">Reiki Diario</h1>
      <Tabs defaultValue="phrase">
        <TabsList className="w-[300px] mx-auto flex justify-center">
          <TabsTrigger value="phrase">Frase</TabsTrigger>
          <TabsTrigger value="reikista">Info Reikista</TabsTrigger>
          <TabsTrigger value="settings">Configuración</TabsTrigger>
        </TabsList>
        <TabsContent value="phrase" className="mt-5">
          <PhraseDisplay />
        </TabsContent>
        <TabsContent value="reikista" className="mt-5">
          <ReikistaInfo />
        </TabsContent>
        <TabsContent value="settings" className="mt-5">
          <SettingsTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
