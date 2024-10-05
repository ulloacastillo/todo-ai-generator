import { Suspense } from 'react'
import List from './ui/components/List'
import PostForm from './ui/components/PostForm'

export default function Home({
  searchParams,
}: {
  searchParams?: { query?: string }
}) {
  const query = searchParams?.query || ''
  console.log(query)
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <main className="w-4/5 flex flex-col items-center justify-start">
        <PostForm></PostForm>
        <div className="w-full">
          <h2 className="text-2xl my-8">Your Smart notes Generated</h2>
          <Suspense key={query} fallback={<h1>cargando...</h1>}>
            <List className={'ml-10'} query={query} />
          </Suspense>
        </div>
      </main>
    </div>
  )
}
