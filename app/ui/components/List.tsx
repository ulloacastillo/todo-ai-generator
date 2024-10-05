import { getOpenAiResponse } from '@/app/lib/openaiQueries'

export default async function List({
  className,
  query,
}: {
  className?: string
  query: string
}) {
  const [items, summary] = await getOpenAiResponse(query)

  return (
    <>
      <ul
        className={`space-y-4 text-left text-gray-500 dark:text-gray-400 ${className}`}
      >
        {items.map((item: string) => {
          return (
            <li
              key={item}
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <svg
                className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 12"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5.917 5.724 10.5 15 1.5"
                />
              </svg>
              <span>{item}</span>
            </li>
          )
        })}
      </ul>

      {summary}
    </>
  )
}
