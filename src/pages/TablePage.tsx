import MultiplicationTable from '@/components/MultiplicationTable';

export default function TablePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 flex items-center justify-center p-6">
      <MultiplicationTable base={2} />
    </div>
  );
}
