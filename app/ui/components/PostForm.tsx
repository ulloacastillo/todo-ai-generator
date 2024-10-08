'use client'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'

export default function PostForm() {
  const searchParams = useSearchParams()
  const pathname = usePathname()
  const { replace } = useRouter()

  const queryUserText = (formData: FormData) => {
    console.log(formData)
    const params = new URLSearchParams(searchParams)
    const userText: string = (formData.get('comment') as string) || ''
    if (userText) {
      params.set('query', userText)
    } else {
      params.delete('query')
    }
    console.log(params.toString())

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <form action={queryUserText} className="w-full">
      <div className=" mb-4 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
        <div className="px-4 py-2 bg-white rounded-t-lg dark:bg-gray-800">
          <label htmlFor="comment" className="sr-only">
            Write here your Quick notes / meetings summary / etc
          </label>
          <textarea
            id="comment"
            name="comment"
            rows={4}
            className="w-full px-0 text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <div className="flex items-center justify-between px-3 py-2 border-t dark:border-gray-600">
          <button className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800">
            Generate Smart Notes
          </button>
        </div>
      </div>
      {/* {state?.summary} */}
    </form>
  )
}
