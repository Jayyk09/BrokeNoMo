import { ScrollArea } from "../components/ui/scroll-area"
import { FileText } from "lucide-react"

interface ReferencedDocumentsProps {
  currentChat: any
}

export function ReferencedDocuments({ currentChat }: ReferencedDocumentsProps) {
  // This is a placeholder. In a real application, you'd fetch the actual referenced documents.
  const documents = [
    { id: 1, name: "Product Manual" },
    { id: 2, name: "Troubleshooting Guide" },
    { id: 3, name: "Return Policy" },
    { id: 4, name: "Warranty Information" },
    { id: 5, name: "Shipping Details" },
  ]

  return (
    <div className="flex h-full flex-col">
      <header className="border-b border-gray-700 p-4">
        <h2 className="text-lg font-bold text-white">Referenced Documents</h2>
      </header>
      <ScrollArea className="flex-1">
        {documents.map((doc) => (
          <div key={doc.id} className="flex items-center gap-3 border-b border-gray-700 p-3 hover:bg-gray-700">
            <FileText className="h-5 w-5 text-blue-400" />
            <span className="text-sm text-white">{doc.name}</span>
          </div>
        ))}
      </ScrollArea>
    </div>
  )
}
