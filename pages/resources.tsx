import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { siteConfig } from '@/data/site-config';

export default function ResourcesPage() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">Resources</h1>
        <p className="text-gray-400 mb-12 max-w-3xl">
          Crisis lines, victim assistance, legal help, and oversight offices for families in
          Colorado. Each listing was checked against the organization&rsquo;s own website on
          November 11, 2026. If you are in immediate danger, call 911.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {(siteConfig.resources || []).map((resource) => (
            <div key={resource.id} className="border border-slate-700 rounded-lg p-4 hover:border-red-500 transition-colors">
              <h3 className="text-lg font-semibold mb-2">{resource.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{resource.tag}</p>
              <p className="text-gray-300 text-xs mb-3">{resource.desc}</p>
              {resource.phone && (
                <p className="mb-2 text-sm text-gray-200">
                  Phone:{' '}
                  <a href={`tel:${resource.phone.replace(/[^0-9]/g, '')}`} className="underline underline-offset-4 hover:text-white">
                    {resource.phone}
                  </a>
                </p>
              )}
              {resource.url && (
                <a 
                  href={resource.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-red-400 hover:underline"
                >
                  Visit Resource →
                </a>
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

