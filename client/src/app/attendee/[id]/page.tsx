export default function SoloAttendee({ params }: { params: { id: string } }){
    return (
      <main className="h-screen">
        <h1 className="text-3xl font-semibold">Attendee Details of {params.id}</h1>
      </main>
    );
  }
  