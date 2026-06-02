import Link from 'next/link';

export default function BlogIndex() {
  return (
    <div className="min-h-screen pt-20 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h1 className="text-5xl font-bold mb-4">Blog</h1>
          <p className="text-gray-400">Reflexiones y relatos desde el experimento.</p>
        </div>

        <div className="space-y-8">
          <article className="glass rounded-xl p-6 border border-white/10 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-shrink-0 w-full sm:w-auto">
              <img src="https://source.unsplash.com/xdNgq1R15QY/800x600" alt="Donkey" className="w-full sm:w-40 h-64 sm:h-40 rounded-md object-cover" />
              <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">Photo by <a href="https://unsplash.com/@youandigraphics" target="_blank" rel="noopener noreferrer" className="underline">Irene Demetri</a> on <a href="https://unsplash.com/photos/xdNgq1R15QY" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a></p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">The Case of the Donkey: San-Ti, ADHD, and the Search for the Right Specialist</h2>
              <p className="text-gray-300 mb-3">Or how a restless mind turned chaos into a website — una historia personal sobre diagnóstico, metáforas y búsqueda de regulación.</p>
              <Link href="/blog/the-case-of-the-donkey">
                <a className="inline-block px-4 py-2 bg-neon-blue text-white rounded-md">Leer entrada</a>
              </Link>
            </div>
          </article>

          <article className="glass rounded-xl p-6 border border-white/10 flex flex-col sm:flex-row gap-6 items-center">
            <div className="flex-shrink-0 w-full sm:w-auto">
              <img src="https://source.unsplash.com/t5ItfWRLJM0/800x600" alt="Pharma" className="w-full sm:w-40 h-64 sm:h-40 rounded-md object-cover" />
              <p className="text-sm text-gray-400 mt-2 text-center sm:text-left">Photo by <a href="https://unsplash.com/@gettyimages" target="_blank" rel="noopener noreferrer" className="underline">Getty Images</a> on <a href="https://unsplash.com/photos/t5ItfWRLJM0" target="_blank" rel="noopener noreferrer" className="underline">Unsplash</a></p>
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-2">The Big Pharma Paradox</h2>
              <p className="text-gray-300 mb-3">Reflexión sobre trabajar en la industria farmacéutica y la contradicción frente a la salud mental.</p>
              <Link href="/blog/the-big-pharma-paradox">
                <a className="inline-block px-4 py-2 bg-neon-blue text-white rounded-md">Leer entrada</a>
              </Link>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
