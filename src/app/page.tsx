
'use client';

import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';
import PhraseDisplay from '@/components/PhraseDisplay';
import ReikistaInfo from '@/components/ReikistaInfo';

export default function Home() {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold text-center mb-5">Reiki Daily</h1>
      <Tabs defaultOpen="phrase">
        <TabsList className="w-[200px] mx-auto">
          <TabsTrigger value="phrase">Phrase</TabsTrigger>
          <TabsTrigger value="reikista">Reikista Info</TabsTrigger>
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

