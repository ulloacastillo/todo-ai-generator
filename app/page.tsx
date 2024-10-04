import List from './ui/components/List'
import PostForm from './ui/components/PostForm'

export default function Home() {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center">
      <main className="w-4/5 flex flex-col items-center justify-start">
        <PostForm></PostForm>
        <div className="w-full">
          <h2 className="text-2xl my-8">Your Smart notes Generated</h2>
          <List className={'ml-10'} />
        </div>
      </main>
    </div>
  )
}
