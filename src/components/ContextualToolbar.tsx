interface ContextualToolbarProps {
  title: string
  description: string
  tags: string[]
}

export function ContextualToolbar({ title, description, tags }: ContextualToolbarProps) {
  return (
    <div className="w-full bg-white p-6 flex flex-col items-center text-left">
      <div className="space-y-4 max-w-xs">
        <div>
          <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
        </div>

        <div className="space-y-2">
          <p className="text-sm text-gray-600">
            Suggestions are related to the current page and users can perform actions based on them without changing to
            another page or context.
          </p>
        </div>

        <div className="flex gap-2 flex-wrap justify-start">
          {tags.map((tag, index) => (
            <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
