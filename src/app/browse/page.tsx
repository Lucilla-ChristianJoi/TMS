import Table from '@/components/browse/table'
import { Card, CardContent } from '@/components/ui/card'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import React from 'react'

export default function Browse() {
    return (
        <main className="flex flex-col items-center justify-center gap-3 md:items-stretch md:flex-row p-5 w-screen">
            <Card>
                <CardContent className="h-full w-full">
                    <ScrollArea className="max-w-32 lg:max-w-52 h-1/2">
                        sdddddddssssssssssssssssssssssddddddddd
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </CardContent>
            </Card>
            <Table className="w-full md:max-w-[560px] lg:max-w-none" />
        </main>
    )
}
