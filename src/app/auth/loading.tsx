import {Loader2} from 'lucide-react'

export default async function Page() {
    return (
        <div className="flex items-center gap-2 animate-pulse mx-auto">
            <Loader2 className="animate-spin" size={18} />
            <p className="text-sm font-mono">Loading..</p>
        </div>
    )
}