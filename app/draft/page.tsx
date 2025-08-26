export default function DraftPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">Design Playground</h1>
      
      <div className="max-w-6xl mx-auto">
        <div className="grid gap-8">
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Draft Components</h2>
            <p className="text-gray-600 mb-4">
              Use this page to test your draft components and layouts. 
              Import and render your experimental components here.
            </p>
            
            <div className="bg-gray-50 p-4 rounded border-l-4 border-blue-500">
              <p className="text-sm">
                💡 <strong>Tip:</strong> Create components in <code>/draft/components/</code> 
                and import them here for testing
              </p>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-lg border shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
            <div className="space-y-2 text-sm text-gray-600">
              <p>1. Create components in <code>/draft/components/</code></p>
              <p>2. Import and test them on this page</p>
              <p>3. When you like a design, copy it to the main app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}