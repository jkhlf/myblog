import Link from 'next/link'

interface BlogPost {
  id: string
  slug: string
  title: string
  date: string
}

const posts: BlogPost[] = [
  {
    id: "001",
    slug: "one-day",
    title: "Cat",
    date: "11-23-2024"
  },
]

export default function WritingPage() {
  return (
    <main className="max-w-2xl mx-auto space-y-16">
      <div>
        <h1 className="text-4xl font-normal mb-10">Writing.</h1>
        <p className='text-xs text-slate-500 mb-10'>One day I will have enough knowledge to write an article :)</p>
        <div className="space-y-6">
          {posts.map((post) => (
            <Link 
              key={post.id}
              href={`/writing/${post.slug}`}
              className="group flex justify-between items-baseline border-b border-gray-100 pb-6"
            >
              <div className="flex gap-4">
                <span className="text-gray-400">{post.id}</span>
                <span className="group-hover:underline">{post.title}</span>
              </div>
              <span className="text-gray-400 font-mono text-sm">{post.date}</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  )
}

