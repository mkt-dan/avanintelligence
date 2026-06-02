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
          <article className="glass rounded-xl p-6 border border-white/10 flex gap-6 items-center">
            <img src="/blog/donkey.svg" alt="Donkey" className="w-40 h-40 rounded-md object-cover" />
            <div>
              <h2 className="text-2xl font-bold mb-2">The Case of the Donkey: San-Ti, ADHD, and the Search for the Right Specialist</h2>
              <p className="text-gray-300 mb-3">Or how a restless mind turned chaos into a website — una historia personal sobre diagnóstico, metáforas y búsqueda de regulación.</p>
              <Link href="/blog/the-case-of-the-donkey">
                <a className="inline-block px-4 py-2 bg-neon-blue text-white rounded-md">Leer entrada</a>
              </Link>
            </div>
          </article>

          <article className="glass rounded-xl p-6 border border-white/10 flex gap-6 items-center">
            <img src="/blog/pharma.svg" alt="Pharma" className="w-40 h-40 rounded-md object-cover" />
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
